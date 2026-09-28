// lead-form.ts — Envío de formularios de cotización (form[data-lead-form]).
// 1) POST JSON a /api/lead (Cloudflare Pages Function).
// 2) Si el envío falla y el sitio tiene WhatsApp configurado, abre WhatsApp con el mensaje armado.
// 3) Si no hay WhatsApp, muestra un error claro para reintentar.

type Estado = "enviando" | "ok" | "error";

function pintar(form: HTMLFormElement, estado: Estado, texto: string) {
  const box = form.querySelector<HTMLElement>("[data-lead-status]");
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (btn) btn.disabled = estado === "enviando";
  if (!box) return;
  box.hidden = false;
  box.textContent = texto;
  box.dataset.estado = estado;
}

function mensajeWhatsApp(datos: Record<string, string>): string {
  const partes = [`Hola, soy ${datos.nombre ?? ""}${datos.empresa ? ` de ${datos.empresa}` : ""}.`];
  if (datos.tipo) partes.push(`Tipo de caja: ${datos.tipo}`);
  if (datos.producto) partes.push(`Producto: ${datos.producto}`);
  if (datos.medida) partes.push(`Medida: ${datos.medida}`);
  if (datos.cantidad) partes.push(`Cantidad: ${datos.cantidad}`);
  if (datos.detalles) partes.push(`Detalles: ${datos.detalles}`);
  partes.push(`Contacto: ${[datos.contacto, datos.email].filter(Boolean).join(" · ")}`);
  return partes.join("\n");
}

document.querySelectorAll<HTMLFormElement>("form[data-lead-form]").forEach((form) => {
  // Producto de referencia desde ?producto= (botones «Cotizar CAD-…»)
  const ref = new URLSearchParams(location.search).get("producto");
  const campoProducto = form.querySelector<HTMLInputElement>('[name="producto"]');
  if (ref && campoProducto && !campoProducto.value) campoProducto.value = ref.slice(0, 160);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const datos: Record<string, string> = {};
    new FormData(form).forEach((v, k) => { datos[k] = String(v).trim(); });
    datos.pagina = location.pathname;
    pintar(form, "enviando", "Enviando tu solicitud…");
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!r.ok) throw new Error(String(r.status));
      form.reset();
      pintar(form, "ok", "Recibimos tu solicitud. Te contactaremos con tu cotización en horario hábil.");
    } catch {
      const wa = form.dataset.wa;
      if (wa) {
        window.open(`https://wa.me/${wa}?text=${encodeURIComponent(mensajeWhatsApp(datos))}`, "_blank", "noopener");
        pintar(form, "ok", "Abrimos WhatsApp con tu solicitud para que la envíes.");
      } else {
        pintar(form, "error", "No pudimos enviar tu solicitud en este momento. Inténtalo de nuevo en unos minutos.");
      }
    }
  });
});

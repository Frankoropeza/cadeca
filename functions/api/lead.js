// functions/api/lead.js — Cloudflare Pages Function: recibe solicitudes de cotización.
// Variables de entorno (Cloudflare Pages → Settings → Environment variables):
//   LEAD_WEBHOOK_URL  (opcional) URL de n8n u otro webhook que recibe el JSON del lead.
//   BREVO_API_KEY     (opcional) clave de Brevo para enviar el lead por correo.
//   LEAD_TO_EMAIL     (requerida si hay Brevo) correo que recibe los leads.
//   LEAD_FROM_EMAIL   (requerida si hay Brevo) remitente verificado en Brevo.
// Sin ningún destino configurado responde 503 y el formulario muestra el aviso de reintento.

const CAMPOS = ["nombre", "empresa", "contacto", "email", "tipo", "producto", "medida", "cantidad", "detalles", "pagina"];
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export async function onRequestPost({ request, env }) {
  let entrada;
  try { entrada = await request.json(); } catch { return json(400, { ok: false, error: "formato" }); }

  // Honeypot: los bots llenan el campo oculto.
  if (entrada.sitio_web) return json(200, { ok: true });

  const lead = {};
  for (const c of CAMPOS) lead[c] = String(entrada[c] ?? "").slice(0, 2000).trim();
  if (!lead.nombre || (!lead.contacto && !lead.email)) return json(422, { ok: false, error: "faltan_datos" });
  lead.fecha = new Date().toISOString();
  lead.origen = "cajas-de-carton.com";

  const envios = [];
  if (env.LEAD_WEBHOOK_URL) {
    envios.push(fetch(env.LEAD_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) }));
  }
  if (env.BREVO_API_KEY && env.LEAD_TO_EMAIL && env.LEAD_FROM_EMAIL) {
    const filas = CAMPOS.filter((c) => lead[c]).map((c) => `<tr><td><b>${c}</b></td><td>${lead[c].replace(/</g, "&lt;")}</td></tr>`).join("");
    envios.push(fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": env.BREVO_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: { email: env.LEAD_FROM_EMAIL, name: "cajas-de-carton.com" },
        to: [{ email: env.LEAD_TO_EMAIL }],
        subject: `Nueva cotización: ${lead.tipo || lead.producto || "cajas de cartón"} — ${lead.nombre}`,
        htmlContent: `<table>${filas}</table>`,
      }),
    }));
  }
  if (!envios.length) return json(503, { ok: false, error: "sin_destino" });

  const r = await Promise.allSettled(envios);
  const alguno = r.some((x) => x.status === "fulfilled" && x.value.ok);
  return alguno ? json(200, { ok: true }) : json(502, { ok: false, error: "destino_fallo" });
}

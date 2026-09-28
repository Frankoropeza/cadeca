// src/data/contacto.ts — Fuente única de los datos de contacto de CADECA.
// Regla: un campo vacío NO se muestra en el sitio (ni en el HTML ni en el schema).
// Para activar un canal basta con llenar su valor aquí; todos los componentes lo leen de este archivo.

export const CONTACTO = {
  /** Teléfono en formato internacional sin "+", p. ej. "525512345678". */
  telefono: "",
  /** Teléfono tal como se muestra, p. ej. "55 1234 5678". */
  telefonoVisible: "",
  /** Número de WhatsApp en formato internacional sin "+", p. ej. "5215512345678". */
  whatsapp: "",
  /** Correo de ventas en un dominio que exista y reciba correo. */
  email: "",
  /** Horario de atención, p. ej. "Lun–Vie 9:00–18:00". */
  horario: "",
} as const;

export const HAS_TEL = CONTACTO.telefono.length > 0;
export const HAS_WA = CONTACTO.whatsapp.length > 0;
export const HAS_EMAIL = CONTACTO.email.length > 0;

export const COTIZAR_URL = "/cotizar/";

/**
 * Destino de los botones de contacto: WhatsApp si hay número configurado;
 * si no, el formulario de cotización (con el producto de referencia, si se indica).
 */
export function contactoHref(mensaje?: string): string {
  if (HAS_WA) {
    return `https://wa.me/${CONTACTO.whatsapp}` + (mensaje ? `?text=${encodeURIComponent(mensaje)}` : "");
  }
  const ref = mensaje?.replace(/^hola[^,]*,\s*/i, "").replace(/^quiero cotizar\s*/i, "").trim();
  return COTIZAR_URL + (ref ? `?producto=${encodeURIComponent(ref)}` : "");
}

/** Texto del canal secundario de contacto. */
export const CONTACTO_LABEL = HAS_WA ? "WhatsApp" : "Formulario de cotización";

/** Atributos para enlaces de contacto: nueva pestaña sólo si es WhatsApp. */
export const contactoAttrs: Record<string, string> = HAS_WA ? { target: "_blank", rel: "noopener" } : {};

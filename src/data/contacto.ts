import { CONTACTO } from "@/config/site";
export { CONTACTO } from "@/config/site";

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

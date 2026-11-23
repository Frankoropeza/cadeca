export const SITE = "https://cajas-de-carton.com";
export const SITE_NAME = "CADECA";

export const siteConfig = {
  url: SITE,
  name: SITE_NAME,
  alternateName: "CADECA Cajas de Cartón",
  description:
    "Proveedor de cajas de cartón corrugado para empresas y negocios en la Ciudad de México y el Estado de México: cajas estándar, a la medida, personalizadas con logo y láminas de cartón.",
  logo: "/img/cadeca-logo.png",
  ogImage: "/img/og-cadeca.jpg",
  language: "es-MX",
  locale: "es_MX",
  themeColor: "#E05800",
} as const;

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

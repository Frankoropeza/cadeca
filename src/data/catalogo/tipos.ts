// src/data/catalogo/tipos.ts — Modelo de datos homologado para categorías y fichas del catálogo.
// Regla de contenido (CADECA es proveedor/distribuidor): nada de «fabricante», «stock», tiempos de
// entrega fijos, certificaciones, pruebas de laboratorio ni cifras de resistencia no publicadas por
// el proveedor. Las medidas son de referencia y se confirman al cotizar.

export interface FichaSeo {
  /** Keyword principal (Ahrefs MX) — debe aparecer en title, H1 y primer párrafo. */
  keyword: string;
  /** Keywords secundarias con volumen, sólo para documentación interna. */
  secundarias: string[];
  /** <title> ≤ 60 caracteres, termina en « | CADECA». */
  title: string;
  /** Meta description 120–155 caracteres. */
  description: string;
}

export interface FichaDato { label: string; value: string }
export interface FichaMedida { nombre: string; medida: string; material: string; uso: string }
export interface FichaFaq { question: string; answer: string }
export interface FichaImagen { src: string; alt: string }

export interface Ficha {
  slug: string;              // kebab-case, sin acentos
  codigo: string;            // p. ej. CAD-RG-01
  nombre: string;            // nombre corto (breadcrumb, tarjeta)
  badge: string;             // 1–2 palabras
  seo: FichaSeo;
  hero: {
    eyebrow: string;
    titleHtml: string;       // H1 con <span> de acento
    desc: string;            // 1–2 frases, contiene la keyword
    desc2: string;           // 2 párrafos separados por «||», admite <strong>
  };
  resumen: string;           // párrafo de la ficha (70–110 palabras)
  destacados: FichaDato[];   // exactamente 4 (franja superior)
  specs: FichaDato[];        // 8–12 filas
  medidas: FichaMedida[];    // 4–6 filas de referencia
  usos: string[];            // 4–6 usos concretos
  faqs: FichaFaq[];          // 5 preguntas
  imagenes: FichaImagen[];   // 2–4, la primera es la principal
  tarjeta: { desc: string; datos: FichaDato[]; pedido: string };
}

export interface Categoria {
  slug: string;
  nombre: string;
  href: string;
  prefijo: string;           // prefijo de código SKU, p. ej. CAD-RG
}

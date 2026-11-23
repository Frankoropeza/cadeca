import { SITE, SITE_NAME, siteConfig } from "@/config/site";
import { CONTACTO, HAS_TEL, HAS_EMAIL } from "@/data/contacto";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}
export interface FaqSeoItem {
  question: string;
  answer: string;
}
export interface ProductSeo {
  name: string;
  sku: string;
  description: string;
  image: string;
  brand?: string;
  material?: string;
  category?: string;
  moq?: string;
}

export interface SchemaOptions {
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FaqSeoItem[];
  schema?: object | object[];
}

export function buildPageSchemas({
  breadcrumbs,
  faqItems,
  schema,
}: SchemaOptions): object[] {
  // ─── Schemas base (siempre presentes) ─────────────────────────────────────────
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#org`,
    name: SITE_NAME,
    alternateName: siteConfig.alternateName,
    url: SITE,
    logo: { "@type": "ImageObject", url: `${SITE}${siteConfig.logo}` },
    description: siteConfig.description,
    areaServed: [
      { "@type": "State", name: "Ciudad de México" },
      { "@type": "State", name: "Estado de México" },
    ],
    ...(HAS_TEL ? { telephone: `+${CONTACTO.telefono}` } : {}),
    ...(HAS_EMAIL ? { email: CONTACTO.email } : {}),
    ...(HAS_TEL || HAS_EMAIL
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            areaServed: "MX",
            availableLanguage: "Spanish",
            ...(HAS_TEL ? { telephone: `+${CONTACTO.telefono}` } : {}),
            ...(HAS_EMAIL ? { email: CONTACTO.email } : {}),
          },
        }
      : {}),
  };

  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: SITE_NAME,
    url: SITE,
    publisher: { "@id": `${SITE}/#org` },
  };

  // ─── BreadcrumbList JSON-LD (si se pasan breadcrumbs) ─────────────────────────
  const schemaBreadcrumb = breadcrumbs
    ? buildBreadcrumbSchema(breadcrumbs)
    : null;

  // ─── FAQPage JSON-LD (si se pasan faqItems) ───────────────────────────────────
  const schemaFaq = faqItems?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  // Product JSON-LD: se omite mientras no haya precios publicados (Offer sin price es inválido).

  // ─── Ensamblar todos los schemas ──────────────────────────────────────────────
  const allSchemas: object[] = [schemaOrg, schemaWebSite];
  if (schemaBreadcrumb) allSchemas.push(schemaBreadcrumb);
  if (schemaFaq) allSchemas.push(schemaFaq);
  if (schema) {
    const extra = Array.isArray(schema) ? schema : [schema];
    allSchemas.push(...extra);
  }

  return allSchemas;
}

export interface ArticleSeo {
  title: string;
  description: string;
  author: string;
  pubDate: Date;
  updatedDate?: Date;
  pageUrl: string;
  image?: string;
}

export function buildArticleSchema({
  title,
  description,
  author,
  pubDate,
  updatedDate,
  pageUrl,
  image,
}: ArticleSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE}${siteConfig.logo}` },
    },
    datePublished: pubDate.toISOString(),
    ...(updatedDate ? { dateModified: updatedDate.toISOString() } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    ...(image ? { image: `${SITE}${image}` } : {}),
  };
}

export function buildBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      ...(b.href ? { item: `${SITE}${b.href}` } : {}),
    })),
  };
}

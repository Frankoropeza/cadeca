import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    /** Título SEO (≤ 60 caracteres). Si falta, se usa title (+ " | CADECA" si cabe). */
    seoTitle: z.string().max(60).optional(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default("Equipo CADECA"),
    category: z.enum(["Guías", "E-commerce", "Industria", "Sostenibilidad", "Consejos", "Técnico", "Marketing", "Zonas"]),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }).strict(),
});

export const collections = { blog };

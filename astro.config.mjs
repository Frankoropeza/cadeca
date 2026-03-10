import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cadeca.com.mx", // ← cambiar al dominio real
  integrations: [
    mdx(),
    sitemap(),
  ],
});

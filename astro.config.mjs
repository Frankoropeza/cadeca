import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cajas-de-carton.com",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      // El directorio está en noindex hasta tener datos verificados: fuera del sitemap.
      filter: (page) => !page.includes("/directorio/"),
    }),
  ],
});

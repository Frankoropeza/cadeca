import { SITE } from "./src/config/site.ts";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      // El directorio está en noindex hasta tener datos verificados: fuera del sitemap.
      filter: (page) => !page.includes("/directorio/"),
    }),
  ],
});

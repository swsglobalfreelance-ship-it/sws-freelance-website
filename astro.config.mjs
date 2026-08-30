// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/site.ts";

// SITE_URL is centralized in src/data/site.ts (single source of truth) so
// the sitemap, canonical tags, and Open Graph URLs never drift out of sync
// with the rest of the site's config.
//   - While testing on Cloudflare Pages, set it to the *.pages.dev URL.
//   - After the final domain is connected, update it to that domain.

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [
    sitemap({
      // Keep the noindex 404 page out of the sitemap Google is told to crawl.
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

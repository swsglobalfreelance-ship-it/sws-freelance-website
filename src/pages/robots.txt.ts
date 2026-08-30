import type { APIRoute } from "astro";

// Generated (not a static public/ file) so the sitemap URL always matches
// the `site` value in astro.config.mjs — one less place to forget to update
// when the real domain is connected.
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site).toString();
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

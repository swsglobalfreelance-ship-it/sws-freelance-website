// ============================================================================
// CENTRALIZED SITE CONFIG — the single source of truth for brand, contact,
// navigation, and default SEO values. Change something here and it updates
// everywhere on the site (header, footer, page titles, meta tags, JSON-LD,
// sitemap/canonical URLs via astro.config.mjs, which imports SITE_URL from
// this same file).
//
// "SWS Freelance" is a TEMPORARY placeholder brand name, deliberately kept
// separate from SWS Global LLC. Replace `brandName` (and the rest of this
// file) once the real brand identity is decided — nothing else in the
// codebase needs to change.
// ============================================================================

// Plain string constant (no other imports) so astro.config.mjs can safely
// import it at config-load time, before the rest of Astro is available.
// Set to the live Cloudflare Workers/Pages URL. Update again once a final
// custom domain is connected — nothing else needs to change when it does.
export const SITE_URL = "https://sws-freelance-website.swsglobal-freelance.workers.dev";

export const siteConfig = {
  brandName: "SWS Freelance",
  // Short form used in tight spaces (mobile nav, favicon title, etc.)
  brandShortName: "SWS Freelance",
  tagline: "Amazon E-Commerce & Virtual Assistant Services",
  description:
    "Professional Amazon listing, optimization, product research, and virtual assistant / data entry services for e-commerce sellers and businesses worldwide.",

  // TODO: replace with a real business inbox before launch.
  contactEmail: "hello@swsfreelance.example",

  // Left empty on purpose — do not fill with placeholder/fake social links.
  // Add real profile URLs here once they exist, e.g. fiverr: "https://www.fiverr.com/..."
  social: {
    fiverr: "",
    upwork: "",
    linkedin: "",
  },

  // Primary top-level navigation. Update here to change the header/footer nav.
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Portfolio", href: "/portfolio/" },
    { label: "About", href: "/about/" },
    { label: "Process", href: "/process/" },
    { label: "FAQ", href: "/faq/" },
  ],

  // Footer-only legal links.
  legalNav: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
  ],

  ctaLabel: "Get a Free Quote",
  ctaHref: "/contact/",

  // Default SEO — used by BaseLayout when a page doesn't override it, and
  // as the base for Organization structured data on every page.
  defaultSeo: {
    titleTemplate: "%s | SWS Freelance", // %s is replaced with the page title
    description:
      "Amazon e-commerce and virtual assistant services — listings, optimization, product research, image design, data entry, and more.",
    locale: "en_US",
    twitterHandle: "", // left blank until a real account exists
  },
} as const;

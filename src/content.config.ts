// ============================================================================
// CONTENT COLLECTIONS — the data-driven core of this site.
//
// This is the ONE file that defines the shape of every category, service,
// FAQ, and portfolio item. Pages under src/pages/ read FROM these
// collections and generate routes automatically — they never hardcode a
// specific service or category.
//
// TO ADD A NEW SERVICE LATER (e.g. "Amazon PPC"): add one new markdown file
// under src/content/services/<category>/<slug>.md that matches the
// `services` schema below. No page code needs to change — it appears on
// /services/, on its category page, in the header dropdown, and gets its
// own page at /services/<category>/<slug>/ automatically.
//
// TO ADD A NEW CATEGORY LATER: add one new markdown file under
// src/content/categories/<slug>.md, then point services at it via their
// `category` field. No page code needs to change.
// ============================================================================

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const categories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/categories" }),
  schema: z.object({
    // Display name, e.g. "Amazon E-Commerce Services"
    title: z.string(),
    // URL segment, e.g. "amazon" -> /services/amazon/
    slug: z.string(),
    // Short one/two sentence summary shown on overview cards
    description: z.string(),
    // Name of a lucide-style icon (see src/components/ui/Icon.astro)
    icon: z.string(),
    // Controls display order across the site (lower = earlier)
    order: z.number().default(0),
    // Optional SEO overrides; falls back to title/description when omitted
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    // Display name, e.g. "Amazon Listing Optimization"
    title: z.string(),
    // URL segment, e.g. "listing-optimization"
    slug: z.string(),
    // Must match a categories entry's `slug`
    category: z.string(),
    // One or two sentences — used on cards, listings, and as the page intro
    shortDescription: z.string(),
    icon: z.string(),
    order: z.number().default(0),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    // "What we provide" — the deliverables list on the service page
    whatWeProvide: z.array(z.string()).optional(),
    // "Key features" — a shorter highlight list (also used on cards/sidebar)
    features: z.array(z.string()).optional(),
    // "Who this is for" — one short paragraph
    whoFor: z.string().optional(),
    // Optional highlighted callout for a service-specific hard rule (used by
    // Amazon Product Image Design for the product-accuracy principle).
    importantNote: z.string().optional(),
    // Optional call-to-action override for this specific service
    ctaLabel: z.string().optional(),
    ctaText: z.string().optional(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faqs" }),
  schema: z.object({
    question: z.string(),
    // Optional: ties this FAQ to a specific service's slug so it can be
    // surfaced on that service's page as well as the global FAQ page.
    relatedService: z.string().optional(),
    order: z.number().default(0),
    // Set true to feature this FAQ in the Home page FAQ preview
    featured: z.boolean().default(false),
  }),
});

// Portfolio items are grouped by their OWN category system (how work is
// displayed), which is intentionally separate from the services category
// system (what's sold) — e.g. "Product Images" spans multiple services.
const portfolioCategories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio-categories" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    // Must match a portfolioCategories entry's `slug`
    portfolioCategory: z.string(),
    // Optional: matches a services `category` slug, for cross-linking
    serviceCategory: z.string().optional(),
    summary: z.string(),
    // MUST be true until a real, verifiable client sample replaces it.
    // Pages must render placeholder items honestly (see PortfolioCard.astro)
    // — never as if they were real completed work.
    isPlaceholder: z.boolean().default(true),
    order: z.number().default(0),
    // Optional image path under /public/portfolio/
    image: z.string().optional(),
  }),
});

export const collections = { categories, services, faqs, portfolioCategories, portfolio };

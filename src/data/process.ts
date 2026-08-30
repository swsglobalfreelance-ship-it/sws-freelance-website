// Shared "how we work" steps — used on the Home page preview and the full
// /process/ page so it's defined once and stays in sync.
export const processSteps = [
  {
    title: "Requirement",
    description:
      "We start by understanding exactly what you need — the service, the scope, and any files or product information required.",
  },
  {
    title: "Analysis",
    description:
      "We review what you've provided (product details, data, existing listings) before any work starts, and flag questions early rather than guessing.",
  },
  {
    title: "Creation",
    description:
      "We do the work itself — writing the listing, researching the product, designing the image, or entering the data.",
  },
  {
    title: "Quality Check",
    description:
      "Before delivery, we check the output against what was agreed and against accuracy requirements (especially for product content).",
  },
  {
    title: "Delivery",
    description:
      "You receive the finished work in the agreed format, with revisions available if it doesn't match what was scoped.",
  },
] as const;

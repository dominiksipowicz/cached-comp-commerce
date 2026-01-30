import { RouteCard } from "@/app/components/route-card";

const exampleRoutes = [
  {
    label: "Category Landing Page (CLP)",
    description:
      "static, SEO URLs, no filters, no pagination, uses only bandwidth. Usually linked from MegaNav, CMS-driven content.",
    href: "/clp-static-landing-page?utm_source=google",
  },
  {
    label: "Search Results Page (SRP)",
    description:
      "dynamic, not SEO indexable, with query parameters, fresh on each request, content still in initial HTML, used compute",
    href: "/search?q=shoes",
  },
  {
    label: "Product Listing Page (PLP)",
    description:
      "dynamic, content in initial HTML",
    href: "/shoes/running?&utm_source=google",
  },
  {
    label: "long tail PLP for filters, sorting, etc.",
    description:
      "dyanmic, not SEO indexable, with query parameters, content still in initial HTML",
    href: "/shoes/running?page=2&color=red&utm_source=google",
  },
];

const vocabulary = [
  {
    term: "ISR",
    definition: "Incremental Static Regeneration – on build and runtime phase",
  },
  {
    term: "CSR",
    definition: "Client Side Rendering – in the browser",
  },
  {
    term: "SSR",
    definition: "Server Side Rendering – on the server, on each request",
  },
  {
    term: "SSG",
    definition: "Static Site Generation – on build phase only",
  },
  {
    term: "PPR",
    definition:
      "Partial Prerendering – a combination of static and dynamic, the best of both worlds",
  },
  {
    term: "Cache Components",
    definition:
      'Opt-in caching via "use cache" directive for pages, components, and functions. Completes the PPR story.',
  },
  {
    term: "static",
    definition: "Cached document on CDN like HTML output (uses only bandwidth)",
  },
  {
    term: "dynamic",
    definition: "Document rendered on each request (uses compute)",
  },
  {
    term: "long tail",
    definition:
      "Less frequently accessed pages, typically generated dynamically using SSR/CSR (ideally PPR)",
  },
  {
    term: "above the fold",
    definition:
      "Visible part of a webpage without scrolling, critical for SEO and Core Web Vitals",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Cache Components Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          All pages return content in initial HTML for SEO/crawlers. 
        </p>

        <div className="space-y-4 mb-12">
          {exampleRoutes.map((route) => (
            <RouteCard key={route.href} {...route} />
          ))}
        </div>
        <details className="group">
          <summary className="text-2xl font-bold mb-4 text-gray-900 dark:text-white cursor-pointer list-none flex items-center gap-2">
            <span className="text-gray-400 group-open:rotate-90 transition-transform">
              ▶
            </span>
            Vocabulary
          </summary>
          <dl className="space-y-3 mt-4">
            {vocabulary.map(({ term, definition }) => (
              <div
                key={term}
                className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <dt className="font-semibold text-gray-900 dark:text-white">
                  {term}
                </dt>
                <dd className="text-sm text-gray-600 dark:text-gray-400">
                  {definition}
                </dd>
              </div>
            ))}
          </dl>
        </details>
      </div>
    </main>
  );
}

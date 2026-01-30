# SSR Test

This is a test project to explore the different SSR strategies in Next.js with Cached Components.

- Cached pages use `(cached)` folder prefix and the `use cache` directive.
- Dynamic pages use `(dynamic)` folder prefix and the `connection` function.
- The difference is in layout (grouped by route) and Suspense on `<body>`.

# current limitations and recommendations

> Ideal approach is to use Cached Components for SEO-critical pages and Dynamic Components for long tail non-SEO-critical pages. However given tracking requirments and content based on query string parameters, we need to use Dynamic Components for all PLPs. This is not ideal from the Web Perfromance (CWC) and usage (compute) perspective.

> Another limitation is that PLPs, PDPs and other pages are currently on the same route level in URL. It is recommended to use a different route level for PLPs, PDPs and other pages like /c/ for category, /p/ for product, etc


## Getting Started

```bash
npm run dev
```

import { connection } from "next/server";
import Link from "next/link";
import { ProductList } from "@/app/components/product-list";
import type { Product } from "@/app/components/product";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  // Page uses connection() - fully dynamic SSR
  // With Suspense on <body> in layout (grouped by route), this blocks but dynamic content is in initial HTML
  await connection(); // This is like classic SSR but with a connection

  const { q: query = "" } = await searchParams;
  const products = await getSearchResults(query);

  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Dynamic Search (connection)
        </h1>

        <form className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search products..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>

        {query ? (
          <ProductList products={products} />
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Enter a search term
          </p>
        )}
      </div>
    </main>
  );
}

async function getSearchResults(query: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (!query) return [];

  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `${query} - Result ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    timestamp: new Date().toISOString(),
  }));
}

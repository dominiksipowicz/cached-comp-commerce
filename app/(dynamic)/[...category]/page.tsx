import Link from "next/link";
import { connection } from "next/server";
import { ProductList } from "@/app/components/product-list";
import type { Product } from "@/app/components/product";

export default async function CachedPage({
  params,
  searchParams,
}: PageProps<"/[...category]">) {
  // Page uses connection() - fully dynamic SSR with content in initial HTML
  // supports query params for filters, sorting, etc.
  // With Suspense on <body> in layout (grouped by route), this blocks but dynamic content is in initial HTML
  await connection();

  const { category } = await params;
  const {
    page = 1,
    color = "red",
    size = "M",
    sort = "price",
  } = await searchParams;

  const products = await getProducts(Number(page));

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
          Long Tail Dynamic non-SEO-critical PLP for category{" "}
          {category.join("/")} with query params
        </h1>

        <ProductList products={products} />
      </div>
    </main>
  );
}

async function getProducts(page: number): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return Array.from({ length: 5 * page }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    timestamp: new Date().toISOString(),
  }));
}

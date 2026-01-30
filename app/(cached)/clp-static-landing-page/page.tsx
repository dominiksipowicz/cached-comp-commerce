import Link from "next/link";
import { cacheLife } from "next/cache";
import { ProductList } from "@/app/components/product-list";
import type { Product } from "@/app/components/product";

export default async function CachedPage() {
  "use cache";
  cacheLife("hours"); // This is like classic ISR but with a cache life

  const products = await getProducts();

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
          Cached CLP (use cache)
        </h1>

        <ProductList products={products} />
      </div>
    </main>
  );
}

async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    timestamp: new Date().toISOString(),
  }));
}

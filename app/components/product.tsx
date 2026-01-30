export type Product = {
  id: number;
  name: string;
  price: number;
  timestamp: string;
};

export function Product({ product }: { product: Product }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-white">
        {product.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">${product.price}</p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        Generated: {product.timestamp}
      </p>
    </div>
  );
}

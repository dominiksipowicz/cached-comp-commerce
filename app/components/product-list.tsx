import { Product, type Product as ProductType } from "./product";

export function ProductList({ products }: { products: ProductType[] }) {
  return (
    <div className="space-y-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

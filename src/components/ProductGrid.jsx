import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAdd }) {
  if (products.length === 0)
    return <p className="empty">No products found.</p>;

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}

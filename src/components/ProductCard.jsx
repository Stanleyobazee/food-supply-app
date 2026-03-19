export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <div className="meta">📍 {product.supplier}</div>
        <div className="card-footer">
          <span className="price">{product.price}</span>
          <button className="btn" onClick={() => onAdd(product)}>Add</button>
        </div>
      </div>
    </div>
  );
}

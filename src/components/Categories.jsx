const CATEGORIES = ["All", "Vegetables", "Fruits", "Dairy", "Grains", "Meat", "Seafood"];

export default function Categories({ active, onSelect }) {
  return (
    <div className="categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`category${active === cat ? " active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

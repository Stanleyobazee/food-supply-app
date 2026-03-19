export default function Header({ search, onSearch }) {
  return (
    <header className="header">
      <h1>🥦 FoodSupply</h1>
      <input
        type="text"
        placeholder="Search suppliers or items..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
}

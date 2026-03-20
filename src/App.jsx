import { useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import CartBar from "./components/CartBar";
import ChatBot from "./components/ChatBot";
import products from "./data/products";
import "./index.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.supplier.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header search={search} onSearch={setSearch} />
      <Categories active={activeCategory} onSelect={setActiveCategory} />
      <ProductGrid products={filtered} onAdd={() => setCartCount((c) => c + 1)} />
      <CartBar count={cartCount} />
      <ChatBot />
    </>
  );
}

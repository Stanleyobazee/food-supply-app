export default function CartBar({ count }) {
  return (
    <div className="cart-bar">
      <span>🛒 {count} item{count !== 1 ? "s" : ""} in cart</span>
      <button onClick={() => alert("Proceeding to checkout...")}>View Cart</button>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";

const autoReply = (msg) => {
  const text = msg.toLowerCase();
  if (text.includes("hello") || text.includes("hi"))
    return "👋 Hi there! How can I help you today?";
  if (text.includes("vegetable") || text.includes("vegetables"))
    return "🥦 We have fresh Organic Tomatoes from Green Valley Farm. Use the Vegetables filter to browse more!";
  if (text.includes("fruit") || text.includes("fruits"))
    return "🍑 Check out our Avocados from Tropical Harvest under the Fruits category!";
  if (text.includes("dairy"))
    return "🥛 We stock Fresh Milk from Sunrise Dairy and Free-Range Eggs from Happy Hens Farm.";
  if (text.includes("meat"))
    return "🍗 We have Chicken Breast from Farm Direct Meats. Filter by Meat to see more!";
  if (text.includes("seafood") || text.includes("fish") || text.includes("salmon"))
    return "🐟 Atlantic Salmon from Ocean Fresh Ltd. is available. Check the Seafood category!";
  if (text.includes("grain") || text.includes("rice") || text.includes("flour"))
    return "🌾 We carry Basmati Rice and Whole Wheat Flour from Golden Grains Co.";
  if (text.includes("price") || text.includes("cost") || text.includes("cheap"))
    return "💰 Prices range from $1.80/L for Fresh Milk to $12.00/kg for Atlantic Salmon.";
  if (text.includes("cart") || text.includes("order"))
    return "🛒 Click the 'Add' button on any product to add it to your cart, then tap 'View Cart' to checkout.";
  if (text.includes("supplier"))
    return "🏪 Our suppliers include Green Valley Farm, Sunrise Dairy, Ocean Fresh Ltd., and more!";
  if (text.includes("delivery") || text.includes("ship"))
    return "🚚 Delivery options are available at checkout. Contact your supplier for specific delivery details.";
  if (text.includes("bye") || text.includes("thanks") || text.includes("thank you"))
    return "😊 You're welcome! Happy shopping!";
  return "🤔 I'm not sure about that. Try asking about products, categories, prices, or suppliers!";
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! I'm your FoodSupply assistant. Ask me about products, prices, or suppliers!" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    const botMsg = { from: "bot", text: autoReply(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") send();
  };

  return (
    <div className="chatbot-wrapper">
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>🥦 FoodSupply Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button onClick={send}>Send</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setOpen((o) => !o)}>
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}

import { useState } from "react";

function Order({ design }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  const placeOrder = async () => {
    const order = {
      name,
      design: design.name,
      quantity: qty
    };

    await fetch("http://localhost:8083/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });

    const message = `Hello, I want ₹{qty} "${design.name}" bookmark sets. Name: ${name}`;

    window.open(
      `https://wa.me/9715651007?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <div>
      <h3 style={{ marginTop: 0, fontFamily: "var(--font-heading)", fontSize: "2rem", textTransform: "uppercase" }}>Item: {design.name}</h3>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#ccc", fontFamily: "var(--font-subheading)" }}>Your Name</label>
        <input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%", padding: "12px",
            backgroundColor: "#fff", border: "2px solid #000",
            color: "#000", fontFamily: "var(--font-hand)", fontSize: "1rem"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px", color: "#ccc", fontFamily: "var(--font-subheading)" }}>Quantity</label>
        <input
          type="number"
          value={qty}
          min="1"
          onChange={(e) => setQty(e.target.value)}
          style={{
            width: "100%", padding: "12px",
            backgroundColor: "#fff", border: "2px solid #000",
            color: "#000", fontFamily: "var(--font-heading)", fontSize: "1.2rem"
          }}
        />
      </div>

      <button onClick={placeOrder} style={{
        width: "100%", backgroundColor: "#25D366", color: "white",
        border: "2px solid #fff", padding: "15px",
        fontWeight: "bold", fontFamily: "var(--font-heading)",
        fontSize: "1.5rem", textTransform: "uppercase",
        cursor: "pointer", boxShadow: "0 4px 0 #128C7E"
      }}>
        Order via WhatsApp
      </button>
    </div>
  );
}

export default Order;

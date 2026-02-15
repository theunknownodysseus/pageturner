import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 40px", borderBottom: "2px solid #333", background: "#000"
    }}>
      <div style={{ color: "white", fontSize: "1.5rem", fontFamily: "var(--font-heading)" }}>PAGE TURNER</div>
      <div style={{ display: "flex", gap: "20px", color: "white" }}>
        <span style={{ cursor: "pointer", fontSize: "0.9rem", fontFamily: "var(--font-subheading)" }}>SHOP</span>
        <span style={{ cursor: "pointer", fontSize: "0.9rem", fontFamily: "var(--font-subheading)" }}>NEW</span>
        <span style={{ cursor: "pointer", fontSize: "0.9rem", fontFamily: "var(--font-subheading)" }}>CONTACT</span>
      </div>
      <div style={{ display: "flex", gap: "15px", color: "white" }}>
        <FaSearch />
        <FaShoppingCart />
      </div>
    </nav>
  );
}

export default Navbar;

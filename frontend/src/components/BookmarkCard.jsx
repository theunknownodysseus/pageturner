function BookmarkCard({ design, onOrder }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h4>{design.name}</h4>
      <p>Price: ₹{design.price}</p>
      <button onClick={() => onOrder(design)}>
        Order
      </button>
    </div>
  );
}

export default BookmarkCard;

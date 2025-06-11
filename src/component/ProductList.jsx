import React, { useState } from "react";

export default function ProductList() {
  const [products] = useState([
    { id: 1, name: "Rice", quantity: 100 },
    { id: 2, name: "Wheat", quantity: 80 },
  ]);

  return (
    <div className="product-list">
      <h2>All Products</h2>
      {products.map((prod) => (
        <div key={prod.id}>{prod.name} - {prod.quantity} units</div>
      ))}
    </div>
  );
}

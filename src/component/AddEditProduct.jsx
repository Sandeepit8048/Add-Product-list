import React, { useState } from "react";

export default function AddEditProduct() {
  const [product, setProduct] = useState({ name: "", quantity: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product added (not persisted): " + JSON.stringify(product));
    setProduct({ name: "", quantity: "" });
  };

  return (
    <form className="add-product" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>
      <input
        type="text"
        placeholder="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

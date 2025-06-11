import React, { useState } from "react";

export default function AddEditProduct() {
  const [product, setProduct] = useState({ name: "", quantity: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Product added " + JSON.stringify(product));
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
        style={{ marginRight: "10px", background: "rgb(242, 18, 18)" }}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        style={{ marginRight: "10px", background: "rgb(250, 25, 25)" }}

      />
      <button type="submit">Add Product</button>
    </form>
  );
}

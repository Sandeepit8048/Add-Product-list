import React, { useState } from "react";

export default function ProductList() {
  const [products] = useState([
    { id: 1, name: "Rice", quantity: 100 },
    { id: 2, name: "Jewelry", quantity: 80 },
    { id: 3, name: "Clothes", quantity: 450 },
    { id: 4, name: "Electronics", quantity: 50 },
    { id: 5, name: "Furniture", quantity: 30 },
    { id: 6, name: "Books", quantity: 200 },
    { id: 7, name: "Toys", quantity: 120 },
    { id: 8, name: "Sports Equipment", quantity: 90 },
    { id: 9, name: "Beauty Products", quantity: 60 },
    { id: 10, name: "Kitchen Appliances", quantity: 40 },
    {id: 11, name: "Gardening Tools", quantity: 70 },
    {id: 12, name: "Pet Supplies", quantity: 110 } ,
  ]);

  return (
    <div className="product-list p-4 rounded-lg shadow ">
      <h2 className="text-2xl font-bold mb-4 ">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {products.map((prod) => (
        <div key={prod.id}>{prod.name} - {prod.quantity} units</div>
      ))}
    </div>
      </div>
  );
}

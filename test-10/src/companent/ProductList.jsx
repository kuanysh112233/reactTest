import React, { useContext } from 'react';
import CartContext from './CartContext';

export default function ProductList() {
  const { dispatch } = useContext(CartContext);

  const products = [
    { id: 1, name: "Book", price: 2000 },
    { id: 2, name: "Laptop", price: 1500000 },
    { id: 3, name: "Headphones", price: 120000 },
    { id: 4, name: "Smartphone", price: 900000 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(item => (
          <li key={item.id}>
            {item.name} – {item.price} ₸
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


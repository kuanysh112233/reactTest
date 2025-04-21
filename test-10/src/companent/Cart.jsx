import React, { useContext } from 'react';
import CartContext from './CartContext';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const totalPrice = state.cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (indexToRemove) => {
    const updatedCart = [...state.cart];
    updatedCart.splice(indexToRemove, 1);
    dispatch({ type: "SET_CART", payload: updatedCart });
  };

  return (
    <div>
      <h2> Cart</h2>
      {state.cart.length === 0 ? (
        <p>Себет бос</p>
      ) : (
        <>
          <ul>
            {state.cart.map((item, index) => (
              <li key={index}>
                {item.name} – {item.price} ₸
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Жалпы баға: {totalPrice} ₸</h3>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}


import { useReducer, useState } from 'react'
import './App.css'
import CartContext from './companent/CartContext'
import ProductList from './companent/ProductList'
import Cart from './companent/Cart'

const initialState = {
  cart : []
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
}


export default function App() {
  const[state , dispatch] = useReducer(reducer , initialState)

  return (
    <>
    <CartContext.Provider value={{state , dispatch}}>
    <ProductList/>
    <Cart/>
    </CartContext.Provider>
    </>
  )
}



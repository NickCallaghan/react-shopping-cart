import React, { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();
export const CartReducer = createContext();

const initialCart = {
  noOfItems: 0,
  total: 0.0,
  items: [],
};

export function CartProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={cart}>
      <CartReducer.Provider value={dispatch}>
        {props.children}
      </CartReducer.Provider>
    </CartContext.Provider>
  );
}
export default CartContext;

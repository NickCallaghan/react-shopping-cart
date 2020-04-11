import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../contexts/cartContext";

export default function Cart() {
  const cart = useContext(CartContext);
  const { items, noOfItems, total } = cart;
  return (
    <div>
      <h1>Cart</h1>
      {items.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <div>{total}</div>
    </div>
  );
}

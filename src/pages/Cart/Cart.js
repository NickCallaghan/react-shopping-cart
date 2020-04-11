import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../contexts/cartContext";
import { formatCurrency } from "../../helpers/helpers";
import "./Cart.scss";

export default function Cart() {
  const cart = useContext(CartContext);
  const { items, total } = cart;
  return (
    <div>
      <h1>Cart</h1>
      {items.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <div className="Cart-total">
        <p className="Cart-total-label">Total:</p>
        <p className="Cart-total-amount">{formatCurrency(total)}</p>
      </div>
    </div>
  );
}

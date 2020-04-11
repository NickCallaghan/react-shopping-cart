import React from "react";
import EmptySVG from "./empy-cart.svg";
import "./EmptyCart.scss";

export default function EmptyCart() {
  return (
    <div className="EmptyCart">
      <img className="EmptyCart-icon" src={EmptySVG} alt="Nothing in cart" />
      <p className="EmptyCart-text">Nothing in Cart</p>
    </div>
  );
}

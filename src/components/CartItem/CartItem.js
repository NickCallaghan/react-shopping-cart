import React from "react";
import "./CartItem.scss";

export default function CartItem(props) {
  const { product } = props;
  return (
    <div className="CartItem">
      <div className="CartItem-Img-wrapper">
        <img
          className="CartItem-Img"
          src={require("../../images/sample-1.jpg")}
          alt="product"
        />
      </div>
      <div className="CartItem-Info">
        <h3>{product.name}</h3>
        <h4>{product.tagline}</h4>
      </div>
      <div className="CartItem-Qty">
        <p>£{product.price}</p>
        <div className="buttonWrapper">
          <button>-</button>
          <p>{product.qty}</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

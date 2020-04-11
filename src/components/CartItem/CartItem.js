import React, { useContext } from "react";
import { CartReducer } from "../../contexts/cartContext";
import { formatCurrency } from "../../helpers/helpers";

import "./CartItem.scss";

export default function CartItem(props) {
  const { product } = props;
  const dispatch = useContext(CartReducer);

  const handleAdjustQty = (adjustmentAmount) => {
    const { id, qty } = product;
    //
    if (qty + adjustmentAmount < 0) return;
    const cartAdjustment = {
      id,
      qty: adjustmentAmount,
    };
    dispatch({ type: "ADJUST", cartAdjustment });
  };

  const handleRemoveFromCart = () => {
    const { id } = product;
    dispatch({ type: "REMOVE", id });
  };

  console.log(product);
  return (
    <div className="CartItem">
      <button className="removeFromCart" onClick={handleRemoveFromCart}>
        x
      </button>
      <div className="CartItem-Img-wrapper">
        <img className="CartItem-Img" src={product.imgUrl} alt="product" />
      </div>
      <div className="CartItem-content">
        <div className="CartItem-Info">
          <h3>{product.name}</h3>
          <h4>{product.tagline}</h4>
        </div>
        <div className="CartItem-Qty">
          <p className="CartItem-price">{formatCurrency(product.price)}</p>
          <div className="buttonWrapper">
            <button onClick={(e) => handleAdjustQty(-1)}>-</button>
            <p>{product.qty}</p>
            <button onClick={(e) => handleAdjustQty(1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

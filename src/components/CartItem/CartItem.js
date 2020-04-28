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

  return (
    <div className="CartItem">
      <button className="removeFromCart" onClick={handleRemoveFromCart}>
        x
      </button>
      <div className="CartItem-Img-wrapper">
        <img data-testid="product-image" className="CartItem-Img" src={product.imgUrl} alt={product.name} />
      </div>
      <div className="CartItem-content">
        <div className="CartItem-Info">
          <h3 data-testid="product-name">{product.name}</h3>
          <h4 data-testid="product-tagline">{product.tagline}</h4>
        </div>
        <div className="CartItem-Qty">
          <p data-testid="product-price" className="CartItem-price">{formatCurrency(product.price)}</p>
          <div className="buttonWrapper">
            <button data-testid="increment" onClick={(e) => handleAdjustQty(-1)}>-</button>
            <p data-testid="product-qty">{product.qty}</p>
            <button data-testid="decrement"  onClick={(e) => handleAdjustQty(1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

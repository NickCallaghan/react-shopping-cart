import React, { useContext } from "react";
import "./ProductCard.scss";
import { CartReducer } from "../../contexts/cartContext";
import { formatCurrency } from "../../helpers/helpers";

export default function Product(props) {
  const { id, name, tagline, desc, price } = props.product;
  const dispatch = useContext(CartReducer);

  const handleAdd = () => {
    const cartAdjustment = {
      id,
      name,
      tagline,
      desc,
      price,
      qty: 1,
    };
    dispatch({ type: "ADJUST", cartAdjustment });
  };

  return (
    <div className="ProductCard">
      <div className="ProductCard-head">
        <img
          className="ProductCard-image"
          src={require("../../images/sample-1.jpg")}
          alt="a shoe"
        />
      </div>
      <div className="ProductCard-body">
        <h2 className="ProductCard-title">{name}</h2>
        <h3 className="ProductCard-subtitle">{tagline}</h3>
        <p className="ProductCard-desc">{desc} </p>
        <div className="ProductCard-footer">
          <p className="ProductCard-pricing">
            Price: <span className="price">{formatCurrency(price)}</span>
          </p>
          <button className="addToCart" onClick={handleAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

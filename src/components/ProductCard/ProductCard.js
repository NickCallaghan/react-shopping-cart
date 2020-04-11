import React, { useContext } from "react";
import "./ProductCard.scss";
import { v4 as uuid } from "uuid";
import { CartContext, CartReducer } from "../../contexts/cartContext";

export default function Product(props) {
  const { id, name, tagline, desc, price } = props.product;
  const cart = useContext(CartContext);
  const dispatch = useContext(CartReducer);

  const handleAdd = () => {
    const newCartProduct = {
      id,
      qty: 1,
    };
    dispatch({ type: "ADD", newCartProduct });
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
            Price: <span className="price">£{price}</span>
          </p>
          <button className="addToCart" onClick={handleAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

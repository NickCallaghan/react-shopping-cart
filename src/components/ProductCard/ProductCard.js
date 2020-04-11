import React from "react";
import "./ProductCard.scss";

export default function Product(props) {
  const { name, tagline, desc, price } = props.product;
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
          <button className="addToCart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

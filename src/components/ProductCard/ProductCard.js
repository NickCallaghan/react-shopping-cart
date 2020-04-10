import React from "react";
import "./ProductCard.scss";

export default function Product() {
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
        <h2 className="ProductCard-title">Product Name</h2>
        <h3 className="ProductCard-subtitle">Product Subheading</h3>
        <p className="ProductCard-desc">
          Proident ea elit consectetur et culpa mollit. Laboris deserunt veniam
          id id cillum ut Lorem commodo voluptate aliquip anim.
        </p>
        <p className="ProductCard-pricing">
          Price: <span className="price"></span>£79.99
        </p>
      </div>
    </div>
  );
}

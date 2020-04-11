import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productsContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Shop.scss";

export default function Shop() {
  const products = useContext(ProductContext);

  return (
    <div className="Shop">
      <h1>Shop</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

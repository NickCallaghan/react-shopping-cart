import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const intialProducts = [
  {
    id: uuid(),
    category: "shoes",
    name: "Nike Air Force One",
    tagline: "Stylish Street Shoe",
    desc:
      "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
    price: 59.99,
    imgUrl: "/static/sample-1.jpg",
  },
  {
    id: uuid(),
    category: "shoes",
    name: "Nike Free",
    tagline: "Performance Running Shoe",
    desc:
      "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
    price: 69.99,
    imgUrl: "/static/sample-2.jpg",
  },
  {
    id: uuid(),
    category: "shoes",
    name: "Nike Air Max",
    tagline: "Retro Cool",
    desc:
      "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
    price: 99.99,
    imgUrl: "/static/sample-3.jpg",
  },
  {
    id: uuid(),
    category: "shoes",
    name: "Nike Hi-Tops",
    tagline: "Ultimate basketball wear",
    desc:
      "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
    price: 39.99,
    imgUrl: "/static/sample-4.jpg",
  },
  {
    id: uuid(),
    category: "shoes",
    name: "New Balance 578",
    tagline: "Multi-Purpose Gym Trainer",
    desc:
      "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
    price: 49.95,
    imgUrl: "/static/sample-5.jpg",
  },
];

export const ProductContext = createContext();

function ProductProvider(props) {
  const [products] = useState(intialProducts);
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

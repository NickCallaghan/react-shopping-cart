import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const intialProducts = [
  {
    id: uuid(),
    name: "Nike air max",
    tagline: "Perfomance shoe",
    desc:
      "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
    price: 59.99,
  },
  {
    id: uuid(),
    name: "Nike air Jordan",
    tagline: "Ultimate basketball wear",
    desc:
      "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
    price: 69.99,
  },
];

export const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState(intialProducts);
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

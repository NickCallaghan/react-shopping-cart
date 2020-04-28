import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CartItem from "./CartItem";
import { formatCurrency } from "../../helpers/helpers";

afterEach(() => {
  cleanup();
});

const dispatch = jest.fn();

const product = {
  id: "1234",
  category: "shoes",
  name: "Nike Air Force One",
  tagline: "Stylish Street Shoe",
  desc:
    "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
  price: 59.99,
  imgUrl: "/static/sample-1.jpg",
  qty: 1,
};

test("<CartItem/> renders", () => {
  const { debug, getByTestId } = render(<CartItem product={product} />);
  expect(getByTestId("product-name").textContent).toBe(product.name);
  expect(getByTestId("product-tagline").textContent).toBe(product.tagline);
  expect(getByTestId("product-price").textContent).toBe(
    formatCurrency(product.price)
  );
  expect(getByTestId("product-qty").textContent).toBe(product.qty.toString());
});

test("Increment Cart Qty", () => {
  const { debug, getByTestId } = render(<CartItem product={product} />);
  const button = getByTestId("increment");
  const dispatch = jest.fn();
  fireEvent.click(button);
});

// Decrement Cart Qty
// Remove from cart

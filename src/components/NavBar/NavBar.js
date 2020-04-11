import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import "./NavBar.scss";

export default function NavBar() {
  const cart = useContext(CartContext);
  return (
    <div className="NavBar">
      <nav>
        <ul className="NavBar-list">
          <li className="NavBar-item">
            <Link to="/" className="NavBar-item-link">
              Shop
            </Link>
          </li>
          <li className="NavBar-item">
            <Link to="/cart" className="NavBar-item-link">
              Cart ({cart.noOfItems})
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

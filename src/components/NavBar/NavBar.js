import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
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
              Cart (0)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

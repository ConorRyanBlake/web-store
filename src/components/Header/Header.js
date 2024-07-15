import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header({ user }) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          GAME EXPRESS
        </Link>
        {/* Link to home page */}
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {/* Link to home page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Products
              </Link>
              {/* Link to products page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
              {/* Link to cart page */}
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {" "}
            {/* Navbar right-side items */}
            {user ? (
              <li className="nav-item">
                <span className="nav-link">Welcome, {user}</span>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link nav-login" to="/login">
                    Login
                  </Link>{" "}
                  {/* Link to login page */}
                </li>
                <li className="nav-item">
                  <Link className="btn custom-button" to="/register">
                    Register
                  </Link>{" "}
                  {/* Link to register page styled as a button */}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

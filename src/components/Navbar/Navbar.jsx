import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="head-navbar" data-testid="head-navbar">
      <nav
        id="navbar"
        className="navbar px-5 pt-2 mb-3 bg-dark"
        data-testid="navbar"
      >
        <h1 className="logo">
          <Link
            to={"/"}
            className="text-decoration-none text-white"
            data-testid="navbar-brand"
          >
            <em>
              Top<span className="navbar-b">Jobs</span>
            </em>
          </Link>
        </h1>
        <ul className="text-white" data-testid="navbar-nav">
          <li>
            <Link to="/" data-testid="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" data-testid="navbar-link">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/contact" data-testid="navbar-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

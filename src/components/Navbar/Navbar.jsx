import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="head-navbar">
      <nav id="navbar" className="navbar px-5 pt-2 mb-3 bg-dark">
        <h1 className="logo">
          <Link to={"/"} className="text-decoration-none text-white">
            <em>
              Top<span className="navbar-b">Jobs</span>
            </em>
          </Link>
        </h1>
        <ul className="text-white">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" >
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/contact" >
              Contact US
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

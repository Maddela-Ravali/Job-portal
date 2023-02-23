import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar" className="navbar px-5 pt-2 mb-3">
        <h1 className="logo">
          <Link to={"/"} className="text-decoration-none">
            Top<span>Jobs</span>
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

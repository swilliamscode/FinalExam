import React from 'react';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#products">Product Categories</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
    </nav>

  );
};

export default Navbar;
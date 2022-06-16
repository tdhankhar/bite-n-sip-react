import React from "react";
import './Navbar.css';

function Navbar () {
    return (
        <section className="navbar">
          <a href="#pitch" className="navbar-item">Home</a>
          <a href="#galleria" className="navbar-item">Galleria</a>
          <a href="#reviews" className="navbar-item">Reviews</a>
          <a href="#footer" className="navbar-item">Reach Us</a>
      </section>
      )
}

export default Navbar;
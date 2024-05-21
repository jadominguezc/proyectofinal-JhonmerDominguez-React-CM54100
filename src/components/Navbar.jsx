import React from 'react';
import { Link } from 'react-router-dom';
import logootaku from "../pictures/logootaku.png"
import CartWidget from './CartWidget';


import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logootaku} alt="Logo Otaku" />
        </Link>
      </div>
      <div className="navbar-categories">
        <Link to="/category/handrolls">HAND ROLLS</Link>
        <Link to="/category/californiarolls">CALIFORNIA ROLLS</Link>
        <Link to="/category/hotrolls">HOT ROLLS</Link>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import jiyadLogo from '../assets/jiyad2.jpg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src={jiyadLogo} alt="Jiyad Logo" className="logo-image" />
            <span className="logo-text">Jiyad Family</span>
          </Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Service</Link></li>
          <li><Link to="/trips">Trips</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

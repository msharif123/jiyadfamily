import React from 'react';
import './Header.css';
import logo from '../assets/jiyad.jpg'; 

const Header = () => {
  return (
    <header className="main-header">
      {/* Logo on the left */}
      <div className="logo-container">
        <img src={logo} alt="Jiyad Logo" className="logo-img" />
      </div>

      {/* Navigation center */}
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Auth buttons on the right */}
      <div className="user-actions">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
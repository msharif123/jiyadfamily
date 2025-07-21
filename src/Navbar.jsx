import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">JiyadFamily</div>
      <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
        <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
        <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        <li><a href="#support" onClick={() => setMobileMenuOpen(false)}>Support</a></li>
        <li><a href="#fraga" onClick={() => setMobileMenuOpen(false)}>Fråga</a></li>
        <li><a href="#login" onClick={() => setMobileMenuOpen(false)}>Login</a></li>
        <li><a href="#register" onClick={() => setMobileMenuOpen(false)}>Register</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;

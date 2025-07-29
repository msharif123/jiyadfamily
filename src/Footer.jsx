import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="jiyad-footer">
      <div className="footer-content">
        {/* Brand Logo & Info */}
        <div className="footer-brand">
          <h2 className="brand-name">JiyadFamily</h2>
          <p className="brand-slogan">Building the future, together.</p>
          <div className="social-links">
            <a href="https://facebook.com/jiyadfamily" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/jiyadfamily" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/jiyadfamily" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/jiyadfamily" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Nairobi Kenya</li>
            <li><i className="fas fa-phone"></i> +254 722 727236</li>
            <li><i className="fas fa-envelope"></i> info@jiyadfamily.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} JiyadFamily. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="header-section">
        <h1>Jiyad Family Umrah Services</h1>
        <h2>Where Sacred Journeys Begin</h2>
      </div>

      <div className="intro-section">
        <p>
          We are devoted to crafting spiritually uplifting Umrah experiences that stay with you forever. 
          Our comprehensive services ensure every aspect of your pilgrimage is handled with care and reverence.
        </p>
      </div>

      <div className="services-section">
        <h3>🌙 Our Complete Umrah Solutions:</h3>
        <ul className="services-list">
          <li>✔ <strong>Tailored Packages</strong> (for individuals & families)</li>
          <li>✔ <strong>Handpicked Accommodations</strong> (steps from the Haram)</li>
          <li>✔ <strong>Seamless Visa Processing</strong></li>
          <li>✔ <strong>Private Luxury Transport</strong></li>
          <li>✔ <strong>Ziyarah Guidance & Support</strong></li>
        </ul>
      </div>

      <div className="trust-section">
        <h3>Why Pilgrims Trust Us:</h3>
        <div className="trust-points">
          <div className="trust-card">
            <h4>Heart-Centered Service</h4>
            <p>We treat your journey as our own</p>
          </div>
          <div className="trust-card">
            <h4>Makkah/Madinah Experts</h4>
            <p>15+ years of local knowledge</p>
          </div>
          <div className="trust-card">
            <h4>White-Glove Attention</h4>
            <p>From airport to Haram and beyond</p>
          </div>
        </div>
      </div>

      <div className="quote-section">
        <blockquote>
          "We remove the hurdles so you can embrace every sacred moment."
        </blockquote>
      </div>

      <div className="cta-section">
        <p>Let us serve you on this blessed journey.</p>
        <button className="cta-button">📞 Reach out today</button>
      </div>
    </div>
  );
};

export default AboutUs;
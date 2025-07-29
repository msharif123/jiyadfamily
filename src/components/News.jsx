// src/components/News.jsx

import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="news-wrapper">
      <div className="news-card">
        <h1 className="news-title">Upcoming Umrah Packages</h1>
        <p className="news-dates">
          <strong>Available Dates:</strong> <br />
          7–18 August • 14–25 August • 28 August–8 September
        </p>
        <p className="news-price">
          <strong>Price:</strong> <span>$1400 per person</span>
        </p>

        <div className="news-section">
          <h2>Package Includes</h2>
          <ul>
            <li>Visa Processing</li>
            <li>Ground Transport</li>
            <li>Health Insurance</li>
            <li>Return Air Ticket</li>
            <li>Guided Tour of Badr Historical Sites</li>
            <li>Hostel Accommodation</li>
            <li>Educational Seminars</li>
          </ul>
        </div>

        <div className="news-section">
          <h2>Accommodation</h2>
          <ul>
            <li><strong>Makkah:</strong> Infinity Hotel</li>
            <li><strong>Madinah:</strong> Al Ansar Golden Tulip</li>
          </ul>
        </div>

        <div className="news-section highlight">
          <h2>Hajj 2026 Registration</h2>
          <p>Registration is now open!</p>
          <p>Secure your spot early and benefit from expert guidance and comprehensive support.</p>
        </div>

        <div className="news-contact">
          <p><strong>📞 Nairobi Office:</strong> 0740 600 100</p>
          <p><strong>📞 Mombasa Office:</strong> 0740 600 300</p>
          <button className="news-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default News;

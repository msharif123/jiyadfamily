import React from 'react';
import './Transport.css';

const Transport = () => {
  return (
    <div className="transport-container">
      <div className="transport-hero">
        <h1>Comfortable Travel Between Mecca & Madinah</h1>
        <p>
          Travel with peace of mind in our premium air-conditioned buses, guided by experienced professionals.
        </p>
      </div>

      <section className="transport-details">
        <div className="transport-card">
          <h2>🚌 Modern & Comfortable Buses</h2>
          <p>
            Our transport services feature luxury buses equipped with reclining seats, air conditioning, Wi-Fi, and onboard refreshments — ensuring your journey is smooth and restful.
          </p>
        </div>

        <div className="transport-card">
          <h2>👨‍🏫 Experienced Travel Guides</h2>
          <p>
            Our English and Swahili-speaking guides have years of experience assisting pilgrims. They provide valuable insights, practical help, and spiritual context throughout your journey.
          </p>
        </div>

        <div className="transport-card">
          <h2>🕌 Historic Site Visits</h2>
          <p>
            Along the route and upon arrival, you will visit key Islamic landmarks in both Mecca and Madinah, including:
          </p>
          <ul>
            <li>Masjid Quba – the first mosque in Islam</li>
            <li>Mount Uhud – site of the famous battle</li>
            <li>Jannatul Baqi – the historic cemetery</li>
            <li>Cave of Hira and Cave of Thawr (Mecca)</li>
            <li>Zamzam Well & Masjid al-Haram</li>
          </ul>
        </div>

        <div className="transport-card highlight">
          <h2>Why Choose Aljiyad Transport?</h2>
          <ul>
            <li>✅ Stress-free coordination from hotel to destination</li>
            <li>✅ Safety-focused, well-maintained buses</li>
            <li>✅ Group-friendly or private family transport options</li>
            <li>✅ 24/7 support team on-ground</li>
          </ul>
        </div>
      </section>

      <div className="transport-cta">
        <h2>Book Your Journey Today</h2>
        <p>Let us take care of the travel — you focus on your spiritual experience.</p>
        <button onClick={() => window.location.href = '/contact'} className="primary-btn">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Transport;

import React from 'react';
import backgroundImage from '../assets/kaba.jpeg';
import MadinaMosque from './MadinaMosque';
import News from './News';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Background */}
      <div 
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` }}
      >
        <div className="hero-content">
          <h1>شركة الجياد للحج والعمرة ترحب بكم</h1>
          <p>مع الجياد... حجٌ مبرور، وعمرةٌ ميسّرة، وذكريات لا تُنسى</p>
          <button className="cta-button">إبدأ رحلتك الآن</button>
        </div>
      </div>

      {/* Madina Mosque Component */}
      

      {/* Welcome Message Section */}
      <div className="welcome-section">
        <div className="section-header">
          <h2>عن شركتنا</h2>
          <div className="decorative-line"></div>
        </div>
        
        <div className="welcome-content">
          {/* Arabic Version */}
          <div className="arabic-welcome">
            <h3>شركة الجياد للحج والعمرة</h3>
            <p className="arabic-text">
              بكل فخر واعتزاز، نُرحب بكم في رحاب الجياد للحج والعمرة، حيث نضع راحتكم ورضاكم في مقدمة أولوياتنا.
            </p>
            <p className="arabic-text">
              نُقدّم لكم خدمات متميزة، وبرامج متكاملة، وتنظيم راقٍ يليق بقدسية الرحلة وروحانيتها.
            </p>
            <ul className="benefits-list">
              <li>برامج حج وعمرة متميزة</li>
              <li>فريق إرشادي متخصص</li>
              <li>أفضل مواقع الإقامة</li>
              <li>وسائل نقل مريحة</li>
            </ul>
          </div>

          {/* English Version */}
          <div className="english-welcome">
            <h3>Al-Hiyad Company for Hajj and Umrah</h3>
            <p>
              With great pride and honor, we welcome you to Al-Hiyad for Hajj and Umrah, 
              where your comfort and satisfaction are our top priorities.
            </p>
            <p>
              We offer exceptional services, comprehensive programs, and top-tier organization 
              that befits the sacredness and spirituality of your journey.
            </p>
            <ul className="benefits-list">
              <li>Premium Hajj & Umrah packages</li>
              <li>Specialized guidance team</li>
              <li>Premium accommodation</li>
              <li>Comfortable transportation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="news-section">
        <div className="section-header">
          <h2>أحدث الأخبار والعروض</h2>
          <div className="decorative-line"></div>
        </div>
        <News />
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>جاهزون لرحلتكم المباركة؟</h2>
        <p>سجل الآن واحصل على استشارة مجانية من خبرائنا</p>
        <div className="cta-buttons">
          <button className="primary-cta">سجل للحج</button>
          <button className="secondary-cta">سجل للعمرة</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
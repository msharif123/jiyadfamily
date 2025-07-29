import React from 'react';
import backgroundImage from '../assets/kaba.jpeg';
import './home.css';


const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
             
        <div className="hero-content">
          <h1>شركة الحياد للحج والعمرة ترحب بكم</h1>
          
          <p>مع الحياد... حجٌ مبرور، وعمرةٌ ميسّرة، وذكريات لا تُنسى</p>
          
        </div>
      </div>

      {/* Welcome Message Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          {/* Arabic Version */}
          <div className="arabic-welcome">
            <h2>شركة الحياد للحج والعمرة</h2>
            
            <p className="arabic-text">
              بكل فخر واعتزاز، نُرحب بكم في رحاب الحياد للحج والعمرة، حيث نضع راحتكم ورضاكم في مقدمة أولوياتنا.
            </p>
            <p className="arabic-text">
              نُقدّم لكم خدمات متميزة، وبرامج متكاملة، وتنظيم راقٍ يليق بقدسية الرحلة وروحانيتها.
            </p>
        





          </div>


          

          {/* English Version */}
          <div className="english-welcome">
            <h2>Al-Jiyad Company for Hajj and Umrah</h2>
            <p>
              With great pride and honor, we welcome you to Al-Hiyad for Hajj and Umrah, 
              where your comfort and satisfaction are our top priorities.
            </p>
            <p>
              We offer exceptional services, comprehensive programs, and top-tier organization 
              that befits the sacredness and spirituality of your journey.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import madinaImage from '../assets/madina.jpg';
import jiyadLogo from '../assets/jiyad2.jpg';
import './MadinaMosque.css';

const MadinaMosque = () => {
  return (
    <div className="madina-mosque-container">
      <div className="logo-container">
        <img src={jiyadLogo} alt="Jiyad Logo" className="logo" />
      </div>
      <div className="mosque-image-container">
        <img
          src={madinaImage}
          alt="Madina Mosque"
          className="mosque-image"
          title="Madina Mosque - Al-Masjid an-Nabawi"
        />
      </div>
    </div>
  );
};

export default MadinaMosque;

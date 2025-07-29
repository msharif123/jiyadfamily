import React from 'react';
import madinaImage from '../assets/madina.jpg';
import jiyadLogo from '../assets/jiyad2.jpg';
import './MadinaMosque.css';

const MadinaMosque = () => {
  return (
    <div>
      <div className="logo-container">
        <img src={jiyadLogo} alt="Jiyad Logo" className="logo" />
      </div>

      <div className="container">
        <div className="text-section">
          <h1 className="title">Madina Mosque</h1>
          <p className="caption">Al-Masjid an-Nabawi in Madina, Saudi Arabia</p>
        </div>
        <img
          src={madinaImage}
          alt="Madina Mosque"
          className="image"
          title="Madina Mosque - Al-Masjid an-Nabawi"
        />
      </div>

     
    </div>
  );
};

export default MadinaMosque;

import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = () => {
  const service = [
    {
      id: 1,
      title: 'Tailored Umrah Packages',
      description: 'Customized packages for individuals and families to ensure a comfortable and memorable pilgrimage experience.',
      icon: '🌙',
      link: '/umrah-package-1', // The route to navigate when clicked
    },
    {
      id: 2,
      title: 'Luxury Accommodation',
      description: 'Stay in 5-star hotels close to the Haram, providing you with premium services during your journey.',
      icon: '🏨',
      link: '/luxury-accommodation', // The route to navigate when clicked
    },
    {
      id: 3,
      title: 'Private Transport Services',
      description: 'Enjoy comfortable, private transportation to and from the holy sites with our dedicated transport options.',
      icon: '🚗',
      link: '/private-transport', // The route to navigate when clicked
    },
    {
      id: 4,
      title: 'Ziyarah Guidance',
      description: 'Expert guidance for your Ziyarah (visitation) to significant Islamic sites in Makkah and Madinah.',
      icon: '📜',
      link: '/ziyarah-guidance', // The route to navigate when clicked
    },
  ];

  return (
    <div className="service-container">
      <h2>Our Services</h2>
      <div className="service-list">
        {service.map((item) => (
          <Link to={item.link} key={item.id} className="service-card-link">
            <div className="service-card">
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Service;

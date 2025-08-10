import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Tailored Umrah Packages',
    description: 'Customized packages for individuals and families to ensure a comfortable and memorable pilgrimage experience.',
    icon: '🌙',
    link: '/packages',
  },
  {
    id: 2,
    title: 'Luxury Accommodation',
    description: 'Stay in 5-star hotels close to the Haram, providing you with premium services during your journey.',
    icon: '🏨',
    link: '/luxury-accommodation',
  },
  {
    id: 3,
    title: 'Private Transport Services',
    description: 'Enjoy comfortable, private transportation to and from the holy sites with our dedicated transport options.',
    icon: '🚗',
    link: '/private-transport',
  },
  {
    id: 4,
    title: 'Ziyarah Guidance',
    description: 'Expert guidance for your Ziyarah (visitation) to significant Islamic sites in Makkah and Madinah.',
    icon: '📜',
    link: '/ziyarah-guidance',
  },
];

const Service = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Premium Services</h2>
        <p>We are committed to making your journey seamless, spiritual, and memorable.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <Link to={service.link} key={service.id} className="service-card" aria-label={service.title}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="learn-more">Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Service;

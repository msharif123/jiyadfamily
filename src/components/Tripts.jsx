import React from 'react';
import './Trips.css';

const trips = [
  {
    id: 1,
    title: 'Umrah Paket 2025',
    price: '35 000 SEK',
    description: 'A complete Umrah trip with accommodation, transportation and guided tours..',
  },
  {
    id: 2,
    title: 'Umrah Paket Ekonomi',
    price: '12 000 SEK',
    description: 'En prisvärd Umrah-resa med flyg och hotell nära Haram.',
  },
  {
    id: 3,
    title: 'Umrah Paket Premium',
    price: '18 000 SEK',
    description: 'Lyxigt paket med ****-stjärnigt boende och privat transport.',
  },
];

function Trips() {
  return (
    <section className="trips-section">
      <h2>Våra Resor & Priser</h2>
      <div className="trips-container">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <h3>{trip.title}</h3>
            <p className="price">{trip.price}</p>
            <p>{trip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trips;

import React from 'react';
import './Trips.css';
import logo from '../assets/jiyad.jpg'; 
 

const trips = [


  
  {

    
    id: 1,
    title: 'Umrah Paket 2025',
    price: '1 000 $',
    description: 'A complete Umrah trip with accommodation, transportation and guided tours..',
  },
  {
    id: 2,
    title: 'Umrah Paket Ekonomi',
    price: '12 000 $',
    description: 'En prisvärd Umrah-resa med flyg och hotell nära Haram.',
  },
  {
    id: 3,
    title: 'Umrah Paket Premium',
    price: '1300 $',
    description: 'Lyxigt paket med ****-stjärnigt boende och privat transport.',
  },
  {
    id: 4,
    title: 'Umrah Paket Premium',
    price: '1300 $',
    description: 'Lyxigt paket med ****-stjärnigt boende och privat transport.',
        

  },
];     



function Trips() {
  return (
    <section className="trips-section">
      <h2>Our trip & Prices </h2>
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

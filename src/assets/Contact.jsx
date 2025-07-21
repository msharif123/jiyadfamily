import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Kontakta oss</h2>
      <p>Har du frågor om Hajj eller Umrah? Fyll i formuläret nedan så återkommer vi så snart vi kan.</p>
      <form className="contact-form">
        <input type="text" placeholder="Ditt namn" required />
        <input type="email" placeholder="Din e-post" required />
        <textarea placeholder="Ditt meddelande..." rows="5" required></textarea>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Contact;

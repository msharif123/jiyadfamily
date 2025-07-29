import React, { useState } from 'react';
import './Fråga.css';
// import { useNavigate } from "react-router-dom";
const Fråga = () => {
  const [formData, setFormData] = useState({
    namn: '',
    epost: '',
    meddelande: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inskickat:', formData);
    alert('Tack för din fråga!');
    setFormData({ namn: '', epost: '', meddelande: '' });
  };

  return (
    <div className="fraga-container" id="fraga">
      <h2>Ställ en Fråga</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="namn">Namn:</label>
        <input
          type="text"
          id="namn"
          name="namn"
          value={formData.namn}
          onChange={handleChange}
          required
        />

        <label htmlFor="epost">E-post:</label>
        <input
          type="email"
          id="epost"
          name="epost"
          value={formData.epost}
          onChange={handleChange}
          required
        />

        <label htmlFor="meddelande">Meddelande:</label>
        <textarea
          id="meddelande"
          name="meddelande"
          value={formData.meddelande}
          onChange={handleChange}
          required
        />

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Fråga;

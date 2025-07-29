import React, { useState } from 'react';
import './AboutUs.css'; // Or move CTA styles to Contact.css if preferred

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);

  const handleClick = () => setShowPhone(true);

  return (
    <div className="cta-section">
      <p>Let us serve you on this blessed journey.</p>

      {!showPhone ? (
        <button className="cta-button" onClick={handleClick}>
          📞 Reach out today
        </button>
      ) : (
        <p className="phone-number">
          📱 Call us: <a href="tel:+254722727236">+254 722 727236</a>
        </p>
      )}
    </div>
  );
};

export default Contact;

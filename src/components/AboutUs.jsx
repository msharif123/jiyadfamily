import React, { useState } from 'react';
import './AboutUs.css';

import { useNavigate } from 'react-router-dom';


const services = [
  { title: "Custom Packages", desc: "Tailored journeys for individuals, couples, and families", icon: "📋" },
  { title: "Visa Processing", desc: "End-to-end visa assistance with expert guidance", icon: "✈️" },
  { title: "Premium Accommodation", desc: "Carefully selected hotels near the Haram", icon: "🏨" },
  { title: "Transportation", desc: "Comfortable private transfers throughout your journey", icon: "🚌" },
  { title: "Spiritual Guidance", desc: "Knowledgeable guides to enhance your pilgrimage", icon: "🕌" },
  { title: "Ziyarah Tours", desc: "Visits to significant Islamic historical sites", icon: "🗺️" },
  { title: "24/7 Support", desc: "Dedicated assistance throughout your journey", icon: "📱" },
  { title: "Catering Services", desc: "Halal meals to suit your dietary preferences", icon: "🍽️" }
];

const features = [
  {
    title: "Local Expertise",
    desc: "As Kenyans serving Kenyans, we understand the unique needs of our community.",
    icon: "🇰🇪"
  },
  {
    title: "Spiritual Focus",
    desc: "We prioritize the spiritual aspects of your pilgrimage.",
    icon: "🕋"
  },
  {
    title: "Seamless Experience",
    desc: "We handle all logistics so you can focus on worship.",
    icon: "✨"
  }
];

const testimonials = [
  {
    name: "Amina Hassan",
    location: "Mombasa",
    quote: "Aljiyad made our Umrah experience seamless. Their attention to detail transformed it into a blessed experience. Jazakaumullahu khyr",
    rating: 5
  },
  {
    name: "Mohamed Abdi",
    location: "Nairobi",
    quote: "As a first-time pilgrim, Aljiyad's team guided me through every step with patience and care. Thank you all especially Abdi Basit " ,
    rating: 5
  },
  {
     name: "Hamza Sharif",
    location: "Garissa",
    quote: "masha allah aad ayaad u mahadsantihiin waa markii iigu  horeeyey aan cumro aado waana ku faraxsanahay in aan raacay guruubkaan aadka u qiimaha badan",
    rating: 5
  }
];

const AboutUs = () => {  
  
 const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });

  const navigate = useNavigate()
  const goToContact= ()=>{
    navigate ("/contact")
  }
 const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]); }

  return (

    <>


    <div className="about-container">
      {/* Header */}
      <div className="about-header">
        <div className="overlay" />
        <div className="header-content">
          <h1>Aljiyad for Umrah & Hajj</h1>
          <p>Guiding Kenyan Muslims on Sacred Journeys Since 2010</p>
          <div className="button-group">
            <button className="primary-btn" onClick={goToContact}>Contact</button>
            <button className="secondary-btn">View Packages</button>
          </div>
        </div>
      </div> 

      {/* Services */}
      <section className="section services">
        <h2>Complete Pilgrimage Solutions</h2>
        <p>We handle every detail so you can focus on your spiritual journey</p>
        <div className="grid">
          {services.map((s, i) => (
            <div key={i} className="card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section features">
        <h2>Why Kenyan Pilgrims Choose Aljiyad</h2>
        <p>Our commitment to excellence makes your journey unforgettable</p>
        <div className="grid">
          {features.map((f, i) => (
            <div key={i} className="card">
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <h2>Pilgrim Experiences</h2>
        <p>Hear from fellow Kenyan Muslims who journeyed with us</p>
        <div className="grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="quote">❝</div>
              <p>{t.quote}</p>
              <div className="author">
                <div className="avatar" />
                <div>
                  <h4>{t.name}</h4>
                  <small>{t.location}</small>
                  <div className="stars">{'★'.repeat(t.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
       {/* Comment Section */}
        <Comment onCommentSubmit={handleCommentSubmit} comments={comments} />

      {/* Call to Action */}
      <section className="cta">
        <h2>Begin Your Spiritual Journey</h2>
        <p>Contact us today to start planning your pilgrimage</p>
        <div className="contact-grid">
          <div className="contact-card"><strong>Phone:</strong> +254 700 123 456</div>
          <div className="contact-card"><strong>Email:</strong> journeys@aljiyad.co.ke</div>
          <div className="contact-card"><strong>Visit Us:</strong> Nairobi, Kenya</div>
        </div>
        <button className="primary-btn">Request a Consultation</button>
      </section>
    </div>
  </>);
};

export default AboutUs;

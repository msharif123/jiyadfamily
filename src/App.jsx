import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";


import Navbar from './components/Navbar';
import Home from "./components/Home";
import Service from "./components/Service";  
import AboutUs from "./components/AboutUs";
import News from './components/News';
import Footer from "./components/Footer";
import Trips from './components/Trips';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Service />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

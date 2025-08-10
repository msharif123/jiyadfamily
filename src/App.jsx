// App.jsx

import React, { useState } from "react";  // ✅ Keep this first
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UmrahPackages from './components/Packages'; // 
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Service from "./components/Service";  
import News from './components/News';
import Footer from "./components/Footer";
import Trips from './components/Trips';
import Contact from './components/Contact'; 
import About from "./components/About"; // ✅ Capitalization is good

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
            <Route path="/packages" element={<UmrahPackages />} />
        
            new route */
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

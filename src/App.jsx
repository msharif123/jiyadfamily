import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from "./components/Home";
import Trips from "./components/Trips";  // fixed typo
import Fråga from "./components/Fråga";  // optional: renamed variable to avoid special char
import AboutUs from "./components/AboutUs";
import Contact from './components/Contact';
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/fråga" element={<Fråga />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

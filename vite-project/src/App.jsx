import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Front from './components/Front';
import About from './components/About';
import AppDownload from "./components/AppDownload";
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Offer from './components/Offer'; // Ensure correct path

 const App = () => {
  return (
    <Router>
      <Navbar />
      <Front />
      <About />
      <AppDownload />
      <Testimonials />
      <Footer />
      <Routes>
        {/* Offers Page */}
        <Route path="/offers" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;

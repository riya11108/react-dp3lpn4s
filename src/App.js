import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import FeaturedProperties from './components/FeaturedProperties';
import VerifiedListings from './components/VerifiedListings';
import WhatOurUsersSay from './components/WhatOurUsersSay.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactForm />
      <FeaturedProperties />
      <VerifiedListings />
      <WhatOurUsersSay />
      <Footer />
    </div>
  );
}

export default App;

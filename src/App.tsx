import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ConsortiumTypes from './components/ConsortiumTypes';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <ConsortiumTypes />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Modules from '../components/Modules';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Modules />
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import ProveedoresBar from '../components/ProveedoresBar';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactCTA from '../components/ContactCTA';

const Home = () => (
  <>
    <HeroSection />
    <Carousel />
    <ProveedoresBar />
    <ServicesGrid />
    <WhyChooseUs />
    <ContactCTA />
  </>
);

export default Home; 
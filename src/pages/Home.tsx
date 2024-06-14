import React from 'react';
import Header from '../components/Layout/Header/Header';
import Hero from '../components/Home/Hero/Hero';
import Offerings from '../components/Home/Offerings/Offerings';
import Footer from '../components/Layout/Footer';
import HeroImageSection from '../components/Home/HeroImageSection/HeroImageSection';
import car from "../assets/car.png"
import mobilecar from "../assets/mobilecar.png"
import { useMediaQuery } from 'react-responsive';
import ScrollToTop from '../components/scrollToTop/ScrollToTop';

const Home: React.FC = () => {

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      <main className="flex-grow pt-16">
        <Hero />
        <Offerings />
        <HeroImageSection
          imageUrl={isDesktopOrLaptop ? car : mobilecar}
        // overlayText="Intelligent Logistics for a Greener Tomorrow"
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;

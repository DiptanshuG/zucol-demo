import React from 'react';
import Header from '../components/Layout/Header/Header';
import Hero from '../components/Home/Hero/Hero';
import Offerings from '../components/Home/Offerings/Offerings';
import Footer from '../components/Layout/Footer';
import HeroImageSection from '../components/Home/HeroImageSection/HeroImageSection';
import car from "../assets/car.png"


const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

        <Header />

        <main className="flex-grow pt-16">
          <Hero />
          <Offerings />
          <HeroImageSection
            imageUrl={car}
            overlayText="Intelligent Logistics for a Greener Tomorrow"
          />
        </main>

        <Footer />

    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../components/Layout/Header/Header';
import Hero from '../components/Home/Hero/Hero';
import Offerings from '../components/Home/Offerings/Offerings';
import Footer from '../components/Layout/Footer';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Hero />
        <Offerings />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

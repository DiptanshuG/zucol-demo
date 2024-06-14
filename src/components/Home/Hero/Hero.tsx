import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      <HeroContent />
      <HeroImage />
    </div>
  );
};

export default Hero;

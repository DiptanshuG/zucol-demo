import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import Container from '../../Container/Container';

const Hero: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <HeroImage />
      <Container>
        <div className="absolute w-full left-0 top-1/2 transform -translate-y-1/2 p-8">
          <HeroContent />
        </div>
      </Container>
    </div>
  );
};

export default Hero;

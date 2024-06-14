import React from 'react';

type HeroImageSectionProps = {
  imageUrl: string;
  overlayText?: string;
};

const HeroImageSection: React.FC<HeroImageSectionProps> = ({ imageUrl, overlayText }) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-white text-3xl md:text-5xl font-bold text-center px-4">
        {overlayText}
      </h1> */}
    </div>
  );
};

export default HeroImageSection;

import React from 'react';
import HeroTitle from './HeroTitle';
import HeroButton from './HeroButton';

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-start md:w-1/2 space-y-4">
      <HeroTitle />
      <HeroButton />
    </div>
  );
};

export default HeroContent;

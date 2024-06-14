import React from 'react';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroButton from './HeroButton';

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-start md:w-1/2 space-y-4">
      <HeroTitle />
      <HeroSubtitle />
      <HeroButton />
    </div>
  );
};

export default HeroContent;

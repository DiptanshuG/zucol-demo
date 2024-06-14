import React from 'react';
import Button from '../../ui/Button';

const HeroButton: React.FC = () => {
  const handleClick = () => {
    console.log('Enquire Now clicked');
  };

  return (
    <Button variant="outlined" onClick={handleClick}
      className="rounded-full"> Enquire Now</Button>
  );
};

export default HeroButton;

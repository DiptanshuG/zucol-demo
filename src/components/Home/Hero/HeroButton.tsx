import React from 'react';

const HeroButton: React.FC = () => {
  const handleClick = () => {
    // Handle button click
    console.log('Enquire Now clicked');
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      onClick={handleClick}
    >
      Enquire Now
    </button>
  );
};

export default HeroButton;

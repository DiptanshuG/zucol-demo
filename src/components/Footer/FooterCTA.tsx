import React from 'react';
import Button from '../ui/Button';

const FooterCTA: React.FC = () => {
  return (
    <div className="text-center md:text-right">
      <p className="mb-2">Want to Connect and Partner for Success?</p>
      <div className='flex justify-start items-start'>
        <Button variant="filled" className="rounded-full bg-[#07BB8F] text-white">        Enquire Now
        </Button>
      </div>


    </div>
  );
};

export default FooterCTA;

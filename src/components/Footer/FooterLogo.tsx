import React from 'react';
import logo from "../../assets/logo.png"

const FooterLogo: React.FC = () => {
  return (
    <div className="text-xl font-bold flex gap-2">
      <img src={logo} alt="Altron" className="h-8" /> <span className='text-[32px] font-normal text-black'>altron</span>
    </div>
  );
};

export default FooterLogo;

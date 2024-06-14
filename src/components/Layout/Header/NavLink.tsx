import React from 'react';

type NavLinkProps = {
  text: string;
};

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <a href="#" className="text-sm text-[#202020] hover:text-[#202020]">
      {text}
    </a>
  );
};

export default NavLink;

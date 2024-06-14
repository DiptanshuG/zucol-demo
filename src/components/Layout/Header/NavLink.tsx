import React from 'react';

type NavLinkProps = {
  text: string;
};

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
  return (
    <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
      {text}
    </a>
  );
};

export default NavLink;

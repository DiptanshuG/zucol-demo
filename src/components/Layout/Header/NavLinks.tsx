import React from 'react';
import NavLink from './NavLink';

const NavLinks: React.FC = () => {
  const links = ['About', 'Logistics', 'Informatics', 'ChargeGrid', 'Careers', 'Our stories'];

  return (
    <nav className="flex space-x-4 text-black">
      {links.map((link, index) => (
        <NavLink key={index} text={link} />
      ))}
    </nav>
  );
};

export default NavLinks;




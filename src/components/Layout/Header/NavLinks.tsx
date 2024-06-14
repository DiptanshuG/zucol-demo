import React from 'react';
import NavLink from './NavLink';

const NavLinks: React.FC = () => {
  const links = ['About', 'Logistics', 'Informatics', 'ChargeGrid', 'Careers', 'Our stories', 'Client Login', 'Get in touch'];

  return (
    <nav className="flex space-x-4">
      {links.map((link, index) => (
        <NavLink key={index} text={link} />
      ))}
    </nav>
  );
};

export default NavLinks;

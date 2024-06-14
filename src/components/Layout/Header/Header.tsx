import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Logo />
      <NavLinks />
    </header>
  );
};

export default Header;

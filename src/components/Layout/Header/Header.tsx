import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from '../../ui/Button';
import Container from '../../Container/Container';

const Header: React.FC = () => {
  return (
    <header className="bg-white bg-opacity-30 backdrop-blur-md fixed w-full z-50 shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Logo />
          <div className="flex flex-grow justify-end mr-[4%]">
            <NavLinks />
          </div>
          <div className="flex space-x-4">
            <Button variant="outlined" className="rounded-full">Client Login</Button>
            <Button variant="filled" className="rounded-full bg-[#07BB8F]">Get in touch</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

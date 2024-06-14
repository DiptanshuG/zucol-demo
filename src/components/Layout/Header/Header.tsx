import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from '../../ui/Button';
import Container from '../../Container/Container';
import icon from "../../../assets/svg/hamburger.svg"

const Header: React.FC = () => {
  return (
    <header className="bg-white bg-opacity-30 backdrop-blur-md fixed w-full z-50 shadow-md">
      <Container>
        <div className="flex justify-between items-center md:px-0 px-3 py-4">
          <Logo />
          <div className="md:flex hidden flex-grow justify-end mr-[4%]">
            <NavLinks />
          </div>
          <div className="md:flex space-x-4 hidden ">
            <Button variant="outlined" className="rounded-full">Client Login</Button>
            <Button variant="filled" className="rounded-full bg-[#07BB8F]">Get in touch</Button>
          </div>
          <img src={icon} alt="icon" className="h-6 md:hidden block" />

        </div>
      </Container>
    </header>
  );
};

export default Header;

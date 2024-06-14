import React from 'react';
import Container from '../Container/Container';
import FooterLogo from '../Footer/FooterLogo';
import FooterNavLinks from '../Footer/FooterNavLinks';
import FooterCTA from '../Footer/FooterCTA';
import FooterSocialIcons from '../Footer/FooterSocialIcons';
import FooterCopyright from '../Footer/FooterCopyright';
import FooterLinks from '../Footer/FooterLinks';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white md:p-8 p-4">
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full md:flex hidden flex-col md:flex-row justify-between items-start mb-8">
            <FooterLogo />
            <FooterNavLinks />
            <FooterCTA />
          </div>

          <div className="w-full md:hidden flex flex-col md:flex-row justify-between items-start mb-8">
            <FooterLogo />
            <FooterCTA />
            <FooterNavLinks />

          </div>
          <FooterSocialIcons />
          <div className="w-full mt-8 border-t border-gray-300 pt-4 hidden md:flex flex-col md:flex-row justify-between items-center">
            <FooterCopyright />
            <FooterLinks />
          </div>
          <div className="w-full mt-8 border-t gap-6 border-gray-300 pt-4 md:hidden flex flex-col md:flex-row justify-between items-start">
            <FooterLinks />
            <FooterCopyright />

          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import linkedIn from "../../assets/svg/LinkedIn.svg";
import twitter from "../../assets/svg/twitter.svg";
import fb from "../../assets/svg/fb.svg";
import a from "../../assets/svg/a.svg";
import insta from "../../assets/svg/insta.svg";
import circle from "../../assets/svg/circle.svg";
import { Link } from 'react-router-dom';

const socialIcons = [
  { icon: linkedIn, alt: 'LinkedIn' },
  { icon: insta, alt: 'Instagram' },
  { icon: fb, alt: 'Facebook' },
  { icon: a, alt: 'Twitter' },
  { icon: twitter, alt: 'X' }
];

const FooterSocialIcons: React.FC = () => {
  return (
    <div className="flex justify-around md:justify-start w-full space-x-4 mt-4 md:mt-0">
      {socialIcons.map((social, index) => (
        <div key={index} className={`flex items-center ${index < socialIcons.length - 1 ? 'border-r-2 border-gray-400 pr-4' : ''}`}>
          <Link to="#">
            {social.alt === "Instagram" ? (
              <div className="relative w-6 h-6">
                <img src={social.icon} alt="Instagram" className="absolute inset-0 w-full h-full z-0" />
                <img src={circle} alt="Circle" className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-10" />
              </div>
            ) : (
              <img src={social.icon} alt={social.alt} className="h-6 w-6" />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterSocialIcons;




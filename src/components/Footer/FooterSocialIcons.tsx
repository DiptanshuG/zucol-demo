import React from 'react';

const socialIcons = [
  { icon: 'path/to/linkedin-icon.png', alt: 'LinkedIn' },
  { icon: 'path/to/instagram-icon.png', alt: 'Instagram' },
  { icon: 'path/to/facebook-icon.png', alt: 'Facebook' },
  { icon: 'path/to/twitter-icon.png', alt: 'Twitter' },
  { icon: 'path/to/x-icon.png', alt: 'X' }
];

const FooterSocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-4 md:mt-0">
      {socialIcons.map((social, index) => (
        <a key={index} href="#">
          <img src={social.icon} alt={social.alt} className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};

export default FooterSocialIcons;

import React from 'react';

const links = ['Privacy', 'Disclaimer', 'Legal Information'];

const FooterLinks: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4 text-center">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;

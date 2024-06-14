import React from 'react';

const links = ['About', 'Logistics', 'Informatics', 'ChargeGrid', 'Careers', 'Our Stories'];

const FooterNavLinks: React.FC = () => {
  return (
    <nav className="mb-4 md:mb-0">
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
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

export default FooterNavLinks;

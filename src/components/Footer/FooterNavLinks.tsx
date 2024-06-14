import React from 'react';
import { Link } from 'react-router-dom';

const links = ['About', 'Logistics', 'Informatics', 'ChargeGrid', 'Careers', 'Our Stories'];

const FooterNavLinks: React.FC = () => {
  return (
    <nav className="mb-4 md:mb-0">
      <ul className="flex flex-col text-left space-y-2">
        {links.map((link, index) => (
          <li key={index} className="w-full">
            <Link to="#" className="text-gray-700 hover:text-gray-900 block w-full">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavLinks;

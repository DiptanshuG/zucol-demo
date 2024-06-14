import React from 'react';
import { Link } from 'react-router-dom';

const links = ['About', 'Logistics', 'Informatics', 'ChargeGrid', 'Careers', 'Our Stories'];

const FooterNavLinks: React.FC = () => {
  return (
    <nav className="mb-4 md:mb-0">
      <ul className="flex flex-wrap md:flex-col w-full text-left space-y-2 md:space-y-0 my-4 md:my-0">
        {links.map((link, index) => (
          <li key={index} className="w-1/2 md:w-full">
            <Link to="#" className="text-black hover:text-gray-900 text-[24px] block">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavLinks;

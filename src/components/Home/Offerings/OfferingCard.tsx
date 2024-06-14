import React from 'react';
import { CgArrowTopRight } from "react-icons/cg";
import useIntersectionObserver from '../../../hook/useIntersectionObserver';

type OfferingCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
};

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description, imageUrl, index }) => {
  const delay = index * 200; 
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-64 md:p-4 bg-white rounded-lg relative transition-transform duration-700 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute bottom-[-36px] right-[-10px] flex items-center justify-center bg-[#F4F4F4] rounded-full w-12 h-12 shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:bg-[#07BB8F] hover:scale-110">
          <CgArrowTopRight className="w-4 h-4" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[24px] font-normal mb-2 text-black">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default OfferingCard;

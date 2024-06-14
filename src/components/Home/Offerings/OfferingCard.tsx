import React from 'react';
import { CgArrowTopRight } from "react-icons/cg";

type OfferingCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="w-64 md:p-4 bg-white rounded-lg relative">
      <div className="relative">
        <img src={imageUrl} alt={title} className=" w-full h-40 object-cover" />
        <div className="absolute bottom-[-36px] right-[-10px] flex items-center justify-center bg-[#F4F4F4] rounded-full w-12 h-12 shadow-lg">
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

import React from 'react';

type OfferingCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
};

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description, imageUrl, iconUrl }) => {
  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-lg">
      <img src={imageUrl} alt={title} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-end">
          <img src={iconUrl} alt="icon" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default OfferingCard;

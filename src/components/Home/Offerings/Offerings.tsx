import React from 'react';
import OfferingCard from './OfferingCard';

const offeringsData = [
  {
    title: 'Logistics',
    description: 'Contributing to cleaner air & reduced greenhouse gas emissions in urban areas.',
    imageUrl: 'path/to/logistics-image.png',
    iconUrl: 'path/to/icon.png',
  },
  {
    title: 'Informatics',
    description: 'Data-driven dashboard optimizes end-to-end delivery & fleet management.',
    imageUrl: 'path/to/informatics-image.png',
    iconUrl: 'path/to/icon.png',
  },
  {
    title: 'ChargeGrid',
    description: 'Aligning with global push towards cleaner, greener & sustainable energy practices.',
    imageUrl: 'path/to/chargegrid-image.png',
    iconUrl: 'path/to/icon.png',
  },
];

const Offerings: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Our Offerings</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {offeringsData.map((offering, index) => (
          <OfferingCard
            key={index}
            title={offering.title}
            description={offering.description}
            imageUrl={offering.imageUrl}
            iconUrl={offering.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Offerings;

import React from 'react';
import OfferingCard from './OfferingCard';
import Container from '../../Container/Container';
import offer1 from "../../../assets/offer1.png"
import offer2 from "../../../assets/offer2.png"
import offer3 from "../../../assets/offer3.png"

const offeringsData = [
  {
    title: 'Logistics',
    description: 'Contributing to cleaner air & reduced greenhouse gas emissions in urban areas.',
    imageUrl: offer1,
  },
{
  title: 'Informatics',
    description: 'Data-driven dashboard optimizes end-to-end delivery & fleet management.',
      imageUrl: offer2,
  },
{
  title: 'ChargeGrid',
    description: 'Aligning with global push towards cleaner, greener & sustainable energy practices.',
      imageUrl: offer3,
  },
];

const Offerings: React.FC = () => {
  return (
    <Container>
      <div className="py-12">
        <h2 className="text-center text-[#07BB8F] text-[40px] font-normal mb-8">Our Offerings</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {offeringsData.map((offering, index) => (
            <OfferingCard
              key={index}
              title={offering.title}
              description={offering.description}
              imageUrl={offering.imageUrl}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Offerings;

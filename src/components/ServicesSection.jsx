import React from 'react';
import { servicesData, icons, sectionContent } from '../assets/data/servicesData';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkblue font-raleway tracking-tight sm:text-4xl">
            {sectionContent.title}
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto my-4"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {sectionContent.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-center mb-4">
                  {icons[service.iconKey]}
                </div>
                <h3 className="text-xl font-semibold text-darkblue mb-2 text-center font-raleway">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a 
                  href={service.learnMoreLink} 
                  className="block w-full px-4 py-2 bg-cream hover:bg-golden transition-colors duration-300 text-darkblue rounded-md font-medium text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
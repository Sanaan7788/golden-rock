import React from 'react';
import { aboutUsContent } from '../assets/data/aboutUsData';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkblue font-raleway tracking-tight sm:text-4xl">
            {aboutUsContent.title}
          </h2>
          <div className="w-24 h-1 bg-golden mx-auto my-4"></div>
          <p className="mt-4 text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            {aboutUsContent.subtitle}
          </p>
        </div>

        {/* About content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {aboutUsContent.description.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-gray-700 ${index > 0 ? 'mt-4' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative">
            <div className="bg-darkblue rounded-lg shadow-xl p-8 relative z-10">
              <div className="grid grid-cols-2 gap-8">
                {aboutUsContent.statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-golden">
                      {stat.value}
                    </div>
                    <div className="text-sm mt-2 text-cream font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 rounded-lg bg-golden opacity-30 z-0"></div>
          </div>
        </div>

        {/* Core values */}
        <div>
          <h3 className="text-2xl font-semibold text-darkblue text-center font-raleway mb-10">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutUsContent.values.map((value, index) => (
              <div 
                key={index} 
                className="bg-cream rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-rust mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
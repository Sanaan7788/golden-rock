import React from 'react';

const Hero = () => {
  return (
    <div className="bg-cream">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
              <span className="block">Transform your business with</span>
              <span className="block text-rust">Golden Rock Consulting</span>
            </h1>
            <p className="mt-3 text-base text-dark sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
              Expert consulting solutions tailored to meet your business needs and drive sustainable growth.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rust hover:bg-golden hover:text-dark transition-colors duration-300 md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-dark text-base font-medium rounded-md text-dark bg-cream hover:bg-golden transition-colors duration-300 md:py-4 md:text-lg md:px-10">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 flex justify-center">
            <div className="w-full h-72 bg-dark rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-dark opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-golden text-3xl font-bold mb-2">Business Excellence</div>
                    <p className="text-cream">Helping businesses achieve their fullest potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
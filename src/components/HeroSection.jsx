import React from 'react';

const HeroSection = () => {
  const handleKnowMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-darkblue/90 via-darkblue/70 to-rust/80"></div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golden/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-rust/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-golden/10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-raleway leading-tight">
            <span className="block animate-slide-in-left">Oil and Gas</span>
            <span className="block text-golden animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              Consulting Business
            </span>
            <span className="block text-cream animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              in Texas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Expert technical services and innovative solutions for the oil and gas industry
          </p>

          <button
            onClick={handleKnowMore}
            className="group relative px-8 py-4 bg-gradient-to-r from-rust to-golden text-white font-semibold text-lg rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl animate-bounce-gentle"
            style={{ animationDelay: '1.2s' }}
          >
            <span className="relative z-10">Know More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-golden to-rust opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-rust via-golden to-rust opacity-30 group-hover:opacity-60 blur transition-all duration-300 rounded-lg"></div>
          </button>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-golden rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-cream rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/2 w-1.5 h-1.5 bg-golden/70 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
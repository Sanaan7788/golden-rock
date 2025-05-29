// import React, { useState } from "react";
// import logoImage from "../assets/images/logo-navbar.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleNavClick = (sectionId) => {
//     // Close mobile menu if open
//     setIsMenuOpen(false);

//     // Custom scroll function with offset for fixed navbar
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const offset = 80; // Height of navbar plus some padding
//       const elementPosition = section.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <nav className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               {/* Logo Image */}
//               <img
//                 src={logoImage}
//                 alt="Golden Rock Logo"
//                 className="h-8 sm:h-9 md:h-10 w-auto mr-2"
//               />
//               <span className="text-2xl font-bold text-golden font-raleway">
//                 Golden Rock
//               </span>
//             </div>
//           </div>

//           {/* Desktop menu items */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
            
            
//             <button
//               onClick={() => handleNavClick("home")}
//               className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
//             >
//               Home
//             </button>

//             <button
//               onClick={() => handleNavClick("about")}
//               className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
//             >
//               About
//             </button>

            
//             <button
//               onClick={() => handleNavClick("services")}
//               className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
//             >
//               Services
//             </button>
            

//             <button
//               onClick={() => handleNavClick("about")}
//               className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
//             >
//               Training
//             </button>

//             <button
//               onClick={() => handleNavClick("about")}
//               className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
//             >
//               Industry Info
//             </button>

//             {/* Contact Us button */}
//             <button
//               onClick={() => handleNavClick("contact")}
//               className="bg-rust hover:bg-golden hover:text-dark text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
//             >
//               Contact Us
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-golden hover:text-cream focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-900">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <button
//               onClick={() => handleNavClick("home")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => handleNavClick("services")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
//             >
//               Services
//             </button>
//             <button
//               onClick={() => handleNavClick("about")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
//             >
//               About
//             </button>
//             <button
//               onClick={() => handleNavClick("contact")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logoImage from "../assets/images/logo-navbar.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    // Close mobile menu if open
    setIsMenuOpen(false);

    // Custom scroll function with offset for fixed navbar
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Height of navbar plus some padding
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Home icon SVG
  const HomeIcon = ({ className }) => (
    <svg 
      className={className}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
      />
    </svg>
  );

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo Image */}
              <img
                src={logoImage}
                alt="Golden Rock Logo"
                className="h-8 sm:h-9 md:h-10 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-golden font-raleway">
                Golden Rock
              </span>
            </div>
          </div>

          {/* Desktop menu items */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Home Icon instead of text */}
            <button
              onClick={() => handleNavClick("home")}
              className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium flex items-center"
              title="Home"
            >
              <HomeIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleNavClick("about")}
              className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick("services")}
              className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
            >
              Services
            </button>

            <button
              onClick={() => handleNavClick("training")}
              className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
            >
              Training
            </button>

            <button
              onClick={() => handleNavClick("industry-info")}
              className="text-cream hover:text-golden px-3 py-2 rounded-md font-medium"
            >
              Industry Info
            </button>

            {/* Contact Us button */}
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-rust hover:bg-golden hover:text-dark text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-golden hover:text-cream focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
            >
              <HomeIcon className="h-4 w-4 mr-2" />
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("training")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
            >
              Training
            </button>
            <button
              onClick={() => handleNavClick("industry-info")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
            >
              Industry Info
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-cream hover:text-golden"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
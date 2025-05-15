import React from "react";
import logoImage from "../assets/images/logo-navbar.png";

const Footer = () => {
  const handleNavClick = (sectionId) => {
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

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="Golden Rock Logo"
                className="h-8 sm:h-9 md:h-10 w-auto mr-2"
              />
              <h3 className="ml-2 text-xl font-bold text-golden font-raleway">
                Golden Rock
              </h3>
            </div>
            <p className="mt-2 text-cream">
              Transforming oil and gas operations through expert technical
              services and innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-golden font-raleway">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="text-cream hover:text-golden transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-cream hover:text-golden transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-cream hover:text-golden transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-cream hover:text-golden transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-golden font-raleway">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-cream">123 Energy Boulevard</li>
              <li className="text-cream">Houston, TX 77001</li>
              <li className="text-cream">info@goldenrock.com</li>
              <li className="text-cream">+1 (713) 555-7890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-rust pt-8">
          <p className="text-cream text-center">
            © 2025 Golden Rock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

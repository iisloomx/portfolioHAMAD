import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#home" className="text-base text-gray-400 hover:text-white">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#about" className="text-base text-gray-400 hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#skills" className="text-base text-gray-400 hover:text-white">
              Skills
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#education" className="text-base text-gray-400 hover:text-white">
              Education
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#experience" className="text-base text-gray-400 hover:text-white">
              Experience
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#contact" className="text-base text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </nav>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-base text-gray-400">
            &copy; {currentYear} Hamad Al-Busaadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

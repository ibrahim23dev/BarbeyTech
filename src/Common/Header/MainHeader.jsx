import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png"; // Update the path to your logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#AD37E3] to-[#7581F7] text-white sticky top-0 z-50 shadow-md">
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[150px] h-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["Services", "We Do", "Product", "Portfolio", "Partnership Program", "Hire Developer", "Contact Us"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline hover:text-gray-200 transition duration-200"
              >
                {item}
              </a>
            )
          )}
          <a href="#" className="hover:text-gray-200 transition duration-200">
            <FaRegUser className="w-6 h-6" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-white text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#9747FF] px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {["Services", "We Do", "Product", "Portfolio", "Partnership Program", "Hire Developer", "Contact Us"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:underline hover:text-gray-200 transition duration-200"
                >
                  {item}
                </a>
              )
            )}
            <a href="#" className="flex items-center gap-2 hover:text-gray-200">
              <FaRegUser className="text-white w-6 h-6" />
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#AD37E3] to-[#7581F7] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/">
<img src={logo} alt="Logo" className="w-[150px] h-auto" />
          </Link>
          
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div className="dropdown relative">
            <button
              onClick={() => setShowServicesDropdown((prev) => !prev)}
              className="hover:underline hover:text-gray-200 transition duration-200"
            >
              Services ▼
            </button>
            {showServicesDropdown && (
              <div className="absolute top-full mt-2 w-[200px] left-0 bg-[#9747FF] text-white p-4 space-y-2 shadow-md rounded-md">
                <Link to="/web-development" className="block hover:underline">
                  Web Development
                </Link>
                <Link to="/software-development" className="block hover:underline">
                  Software Development
                </Link>
                <Link to="/ui-ux-design" className="block hover:underline">
                  UI/UX Design
                </Link>
                <Link to="/graphic-design" className="block hover:underline">
                  Graphic Design
                </Link>
                <Link to="/mobile-app-development" className="block hover:underline">
                  Mobile App Development
                </Link>
              </div>
            )}
          </div>
          {["We Do", "Product", "Portfolio", "Partnership Program", "Hire Developer", "Contact Us"].map((item, index) => (
            <a key={index} href="#" className="hover:underline hover:text-gray-200">
              {item}
            </a>
          ))}
          <a href="#" className="hover:text-gray-200 transition duration-200">
            <FaRegUser className="w-6 h-6" />
          </a>
        </nav>

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

      {isMenuOpen && (
        <div className="md:hidden bg-[#9747FF] px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <div className="dropdown">
              <button
                onClick={() => setShowServicesDropdown((prev) => !prev)}
                className="flex justify-between items-center hover:underline w-full text-left"
              >
                Services
                <span
                  className={`transform transition-transform duration-200 ${
                    showServicesDropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {showServicesDropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link to="/web-development" className="block hover:underline">
                    Web Development
                  </Link>
                  <Link to="/software-development" className="block hover:underline">
                    Software Development
                  </Link>
                  <Link to="/ui-ux-design" className="block hover:underline">
                    UI/UX Design
                  </Link>
                  <Link to="/graphic-design" className="block hover:underline">
                    Graphic Design
                  </Link>
                  <Link to="/website-design" className="block hover:underline">
                    Website Design
                  </Link>
                  <Link to="/mobile-app-development" className="block hover:underline">
                    Mobile App Development
                  </Link>
                </div>
              )}
            </div>
            {["We Do", "Product", "Portfolio", "Partnership Program", "Hire Developer", "Contact Us"].map((item, index) => (
              <a key={index} href="#" className="hover:underline hover:text-gray-200">
                {item}
              </a>
            ))}
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

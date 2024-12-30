import React, { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation(); // To track the current route

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

  // Close the dropdown menu when the route changes
  useEffect(() => {
    setShowServicesDropdown(false);
  }, [location]); // Whenever the route changes, close the dropdown

  // Close the dropdown when any link is clicked in the "We Do", "Product" etc. section
  const handleLinkClick = () => {
    setShowServicesDropdown(false);
  };

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
                <Link to="/web-development" className="block hover:underline" onClick={handleLinkClick}>
                  Web Development
                </Link>
                <Link to="/software-development" className="block hover:underline" onClick={handleLinkClick}>
                  Software Development
                </Link>
                <Link to="/ui-ux-design" className="block hover:underline" onClick={handleLinkClick}>
                  UI/UX Design
                </Link>
                <Link to="/graphic-design" className="block hover:underline" onClick={handleLinkClick}>
                  Graphic Design
                </Link>
                <Link to="/mobile-app-development" className="block hover:underline" onClick={handleLinkClick}>
                  Mobile App Development
                </Link>
              </div>
            )}
          </div>

          <Link to="/we-do" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
            We Do
          </Link>
          <Link to="/product" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
            Product
          </Link>
          <Link to="/portfolio" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
            Portfolio
          </Link>
          <Link to="/partnership-program" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
            Partnership Program
          </Link>
          <Link to="/hire-developer" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
            Hire Developer
          </Link>
          <Link to="/contact-us" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
            Contact Us
          </Link>

          <Link to="/profile" className="hover:text-gray-200 transition duration-200">
            <FaRegUser className="w-6 h-6" />
          </Link>
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
                  <Link to="/web-development" className="block hover:underline" onClick={handleLinkClick}>
                    Web Development
                  </Link>
                  <Link to="/software-development" className="block hover:underline" onClick={handleLinkClick}>
                    Software Development
                  </Link>
                  <Link to="/ui-ux-design" className="block hover:underline" onClick={handleLinkClick}>
                    UI/UX Design
                  </Link>
                  <Link to="/graphic-design" className="block hover:underline" onClick={handleLinkClick}>
                    Graphic Design
                  </Link>
                  <Link to="/website-design" className="block hover:underline" onClick={handleLinkClick}>
                    Website Design
                  </Link>
                  <Link to="/mobile-app-development" className="block hover:underline" onClick={handleLinkClick}>
                    Mobile App Development
                  </Link>
                </div>
              )}
            </div>

            <Link to="/we-do" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
              We Do
            </Link>
            <Link to="/product" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
              Product
            </Link>
            <Link to="/portfolio" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
              Portfolio
            </Link>
            <Link to="/partnership-program" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
              Partnership Program
            </Link>
            <Link to="/hire-developer" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
              Hire Developer
            </Link>
            <Link to="/contact-us" className="hover:underline hover:text-gray-200" onClick={handleLinkClick}>
              Contact Us
            </Link>

            <Link to="/profile" className="flex items-center gap-2 hover:text-gray-200" onClick={handleLinkClick}>
              <FaRegUser className="text-white w-6 h-6" />
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

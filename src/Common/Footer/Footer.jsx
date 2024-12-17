import React from "react";
import GooglePlay from "../../assets/Googleplay.png";
import AppStore from "../../assets/Appstore.png"; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-10">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* Information Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Information</h3>
          <p className="leading-relaxed">
            Barbey Tech Consultancy is a leading travel technology partner who
            delivers innovative solutions for the travel industry. Our
            comprehensive software products empower worldwide travel businesses
            to automate business processes and enhance their customer service.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <img
              src={GooglePlay}
              width={150}
              height={50}
              alt="Google Play"
              className="h-10 cursor-pointer object-contain"
            />
            <img
              src={AppStore}
              width={150}
              height={50}
              alt="App Store"
              className="h-10 cursor-pointer object-contain"
            />
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Related Products</h3>
          <ul className="space-y-2">
            <li>B2B Booking Engine</li>
            <li>B2C Booking Engine</li>
            <li>Tour Operator Software</li>
            <li>Travel Management System</li>
            <li>Travel Mobile Apps</li>
            <li>Restaurant Software</li>
            <li>Travel CRM</li>
          </ul>
        </div>

        {/* More Solutions Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">More Solutions</h3>
          <ul className="space-y-2">
            <li>Web Design</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Mobile Application Development</li>
            <li>XML/API Integrations</li>
            <li>Search Engine Optimization</li>
            <li>Online Marketing Services</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white mt-10 pt-5">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Copyright Text */}
          <p className="text-sm text-center lg:text-left">
            © 2024 Barbey Tech. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex justify-center gap-2">
            <img
              src={GooglePlay}
              width={100}
              height={50}
              alt="Visa"
              className="h-8 object-contain"
            />
            <img
              src={GooglePlay}
              width={100}
              height={50}
              alt="PayPal"
              className="h-8 object-contain"
            />
            <img
              src={GooglePlay}
              width={100}
              height={50}
              alt="MasterCard"
              className="h-8 object-contain"
            />
            <img
              src={GooglePlay}
              width={100}
              height={50}
              alt="Amex"
              className="h-8 object-contain"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-4 flex justify-center gap-4 mt-4">
          <a href="#" className="text-sm hover:underline">
            Terms
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm hover:underline">
            Cookies
          </a>
          <a href="#" className="text-sm hover:underline">
            Careers
          </a>
          <a href="#" className="text-sm hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

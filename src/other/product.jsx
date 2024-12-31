import React from 'react';

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
        <p className="text-lg text-gray-600 mt-2">Innovative Solutions for Modern Challenges</p>
      </header>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200" // Replace with actual image URL for Adbiysa Tour & Travel
            alt="Adbiysa Tour & Travel"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">Adbiysa Tour & Travel</h2>
            <p className="text-gray-600 mt-2">
              Streamline your travel bookings with ease and efficiency using our comprehensive travel management platform.
            </p>
            <button className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300x200" // Replace with actual image URL for School Management System
            alt="School Management System"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">School Management System</h2>
            <p className="text-gray-600 mt-2">
              Manage student records, schedules, and communication seamlessly with our powerful school management system.
            </p>
            <button className="mt-4 px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Add more product cards as needed */}
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800">Interested in Our Products?</h3>
        <p className="text-gray-600 mt-2">Contact us today to get started and transform your business.</p>
        <button className="mt-4 px-8 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ProductPage;

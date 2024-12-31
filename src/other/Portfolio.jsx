import React from 'react';

function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col justify-center items-center p-8">
      <div className="text-center text-white mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Our Innovative Company</h1>
        <p className="mt-4 text-lg sm:text-xl">Delivering Excellence Through Creativity and Innovation</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {/* Portfolio Item 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Project 1</h2>
            <p className="mt-2 text-gray-600">A brief description of the first project goes here.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Client 1</span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Project 2</h2>
            <p className="mt-2 text-gray-600">A brief description of the second project goes here.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Client 2</span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Project 3</h2>
            <p className="mt-2 text-gray-600">A brief description of the third project goes here.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Client 3</span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-white">
          Want to collaborate with us? <span className="font-bold">Let's talk!</span>
        </p>
        <button className="mt-4 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Portfolio;

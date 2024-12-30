import React from 'react';
import { useSpring, animated } from 'react-spring';

// Importing images
import Tech1 from '../assets/Tech/Tech7.png';
import Tech2 from '../assets/Tech/Tech8.png';
import Tech3 from '../assets/Tech/Tech9.png';
import Tech4 from '../assets/Tech/Tech10.png';
import Tech5 from '../assets/Tech/Tech11.png';
import Tech6 from '../assets/Tech/Tech12.png';

// Solutions Data
const solutions = [
  {
    title: "Hospital Management System",
    image: Tech1,
  },
  {
    title: "Inventory Management System",
    image: Tech2,
  },
  {
    title: "School Management System",
    image: Tech3,
  },
  {
    title: "Stock Management System",
    image: Tech4,
  },
  {
    title: "Hotel & Restaurant Management",
    image: Tech5,
  },
  {
    title: "Research Solution",
    image: Tech6,
  },
];

function Home() {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn} className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="text-center py-8 px-4 bg-purple-100 shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Smart, Preconfigured,{" "}
          <span className="text-purple-500">Dynamic Business Solutions</span>
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-4 md:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <animated.div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { duration: 600, delay: index * 100 },
            })}
          >
            {/* Image */}
            <div className="w-full h-[200px] flex justify-center items-center bg-gray-50 rounded-md mb-4">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-[200px] h-[150px] object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 text-center">
              {solution.title}
            </h2>

            {/* Button */}
            <button className="px-4 py-2 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition">
              Details
            </button>
          </animated.div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center py-6">
        <button className="px-6 py-3 bg-purple-500 text-white text-lg rounded-full shadow-lg hover:bg-purple-600 transition">
          See More
        </button>
      </div>
    </animated.div>
  );
}

export default Home;

import React from "react";
import { motion } from "framer-motion";

// Image imports
import Tech1 from "../assets/Tech/tech1.png";
import Tech2 from "../assets/Tech/tech2.png";
import Tech3 from "../assets/Tech/tech3.png";
import Tech4 from "../assets/Tech/tech4.png";
import Tech5 from "../assets/Tech/tech5.png";
import Tech6 from "../assets/Tech/tech6.png";

const solutions = [
  {
    title: "Hospital Management System",
    description: "Manage hospital operations efficiently with our HMS solution.",
    image: Tech1,
  },
  {
    title: "Inventory Management System",
    description: "Optimize inventory with our modern IMS tools.",
    image: Tech2,
  },
  {
    title: "School Management System",
    description: "Streamline school administration with our SMS solution.",
    image: Tech3,
  },
  {
    title: "Stock Management System",
    description: "Track and manage stock accurately with ease.",
    image: Tech4,
  },
  {
    title: "Hotel & Restaurant Management",
    description: "Simplify hotel operations with our H&R solutions.",
    image: Tech5,
  },
  {
    title: "Research Solution",
    description: "Empower research with our intelligent tools.",
    image: Tech6,
  },
];

function Services() {
  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      {/* Title Section */}
      <h1 className="text-2xl text-center mb-10 sm:text-3xl md:text-4xl font-bold text-gray-800">
        Empowering Efficiency,{" "}
        <span className="text-purple-500">One Click at a Time</span>
      </h1>

      {/* Solutions Grid */}
      <div className="container mx-auto mb-8 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="relative group h-[340px] bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden transition duration-300"
          >
            {/* Image Section */}
            <div className="p-6 text-center flex flex-col justify-between h-full">
              <div className="flex justify-center mb-4">
                <motion.img
                  src={solution.image}
                  alt={solution.title}
                  className="object-contain w-[180px] h-[180px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{solution.description}</p>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.8 }}
            >
              <p className="text-white text-lg font-semibold">
                Learn More
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;

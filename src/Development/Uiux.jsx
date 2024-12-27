import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCogs } from "react-icons/fa";
import UiUx from "../assets/uiux.png";
import UiUx2 from "../assets/uiux2.png"
import Project1 from "../assets/Tech/adbiyas.jpeg";
import Project2 from "../assets/Tech/adbiysaSoluation.jpeg";
import Project3 from "../assets/Tech/grocery.jpeg";
const WebDevelopmentFeatures = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const projects = [
    { title: "Adbiyas Tour", image: Project1 },
    { title: "Adbiyas Solution", image: Project2 },
    { title: "Adbiyas Grocery", image: Project3 },
  ];

  return (
    <div>
    <div className=" text-white">
      {/* Header Section */}
      <div className="text-center flex justify-center items-center h-[441px] bg-gradient-to-b from-[#4C02F1] to-[#06044A] px-6 md:px-20">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
          Crafting Exceptional Experiences with UI/UX Design
        </h1>
        <p className="mt-4 text-lg">
          Your website is more than just a digital presence—it’s the soul of your business.
        </p>
        <motion.button
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mt-6 px-6 py-2 bg-white text-purple-700 rounded-lg shadow-lg font-medium hover:bg-gray-100"
        >
          Get a Project Quote
        </motion.button>
          </div>
          <div>
            <img className=" w-[400px]" src={UiUx2}/>
          </div>
          
      </div>

      {/* Features Section */}
      <div className="mt-10 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Key Features of Our Web Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white text-gray-900 rounded-lg shadow-lg p-6"
          >
            <FaLaptopCode className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-xl font-semibold">Custom Website Development</h3>
            <p className="mt-2">
              Responsive and user-friendly websites tailored to your brand identity.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white text-gray-900 rounded-lg shadow-lg p-6"
          >
            <FaMobileAlt className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-xl font-semibold">Responsive Design</h3>
            <p className="mt-2">
              Mobile-first design for seamless user experience on all devices.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white text-gray-900 rounded-lg shadow-lg p-6"
          >
            <FaCogs className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-xl font-semibold">eCommerce Development</h3>
            <p className="mt-2">
              Powerful eCommerce solutions using WordPress, Shopify, and more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-20 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Benefits of Partnering With Us
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Custom development tailored to your needs.</li>
          <li>Responsive and mobile-friendly designs.</li>
          <li>Enhanced performance optimization.</li>
          <li>Expert team with years of experience.</li>
        </ul>
      </div>
      
      </div>
      <div className=" justify-center flex">
        <img src={UiUx} />
      </div>
      <div className="md:px-20">
        <div className=" justify-center mt-6 mb-3 flex">
        <h2 className=" text-[#41A2DA] font-semibold text-[29px]">Finally Delivered Project</h2>
      </div>
      <div className="grid grid-cols-1 mb-12 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              {/* Using standard img tag instead of Next.js Image component */}
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      </div>
  );
};

export default WebDevelopmentFeatures;

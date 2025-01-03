import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaLaptopCode, FaMobileAlt, FaCogs, FaGithub } from "react-icons/fa";
import Web1 from "../assets/Web1.png";
import Web2 from "../assets/web2.png";
import Project1 from "../assets/Tech/adbiyas.jpeg";
import Project2 from "../assets/Tech/adbiysaSoluation.jpeg";
import Project3 from "../assets/Tech/grocery.jpeg";


const WebDevelopmentFeatures = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const projects = [
    { title: "Adbiyas Tour", image: Project1, github: "#", demo: "#" },
    { title: "Adbiyas Solution", image: Project2, github: "#", demo: "#" },
    { title: "Adbiyas Grocery", image: Project3, github: "#", demo: "#" },
  ];

  const benefits = [
    "Creative Expertise: Unique designs that align with your brand and audience.",
    "Future-Ready Technology: Modern frameworks and coding standards.",
    "Scalability: Websites designed to grow with your business.",
    "Cost-Effective Solutions: Tailored to fit your budget without compromising quality.",
    "Comprehensive Support: Maintenance and updates to ensure peak performance.",
    "User-Centric Approach: Focused on delivering engaging and intuitive experiences.",
  ];

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <div className="text-gray-900">
      {/* Header Section */}
      <div className="text-white bg-gradient-to-b from-[#4C02F1] to-[#06044A] flex flex-col-reverse md:flex-row items-center justify-center h-auto md:h-[441px] px-6 md:px-20 py-12 gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Building Innovative Websites That Drive Results
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
        <div className="w-full lg:w-[500px] md:w-1/2">
          <img src={Web2} alt="Web Development" className="w-full h-auto" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-10 px-6 md:px-[200px]">
        <h2 className="text-2xl font-bold border border-[#51414F] py-3 rounded-lg text-center mb-12">
          Key Features of Our Web Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              Icon: FaLaptopCode,
              title: "Custom Website Development",
              description: "Responsive and user-friendly websites tailored to your brand identity.",
            },
            {
              Icon: FaMobileAlt,
              title: "Responsive Design",
              description: "Mobile-first design for seamless user experience on all devices.",
            },
            {
              Icon: FaCogs,
              title: "eCommerce Development",
              description: "Powerful eCommerce solutions using WordPress, Shopify, and more.",
            },
          ].map(({ Icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border-2 border-[#800080] rounded-lg shadow-lg p-6"
            >
              <Icon className="text-4xl text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-20 px-6 md:px-[200px]">
        <motion.h2
          className="text-2xl border border-[#51414F] rounded-lg py-3 font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Benefits of Partnering With Us
        </motion.h2>
        <motion.ul
          className="list-disc space-y-6 text-lg"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={listVariants}
              className="p-3 bg-gray-100 rounded-xl shadow-sm hover:bg-indigo-100 hover:shadow-lg transition duration-300"
            >
              {benefit}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Delivered Projects Section */}
      <div className="flex flex-col items-center md:px-[200px] my-12">
        <h2 className="text-[#41A2DA] font-semibold text-2xl mb-6">
          Finally Delivered Projects
        </h2>
        <Marquee speed={60} gradient={false} className="w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative w-[450px] h-[300px]  mx-4 border-[2px] border-[#953553]  rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-bold mb-3">{project.title}</h3>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default WebDevelopmentFeatures;

import React, { useState } from "react";
import Web from "../assets/Tech/web1.png";
import Mobile from "../assets/Tech/mobile2.png";
import Github from "../assets/Tech/github.png";
import Bitbucket from "../assets/Tech/bitbucket.png";
import Gitlab from "../assets/Tech/gitlab.png";
import Testing from "../assets/Tech/testing.png";
import Aws from "../assets/Tech/aws.png";
import Cloud from "../assets/Tech/cloud.png";
import Othercloud from "../assets/Tech/other-cloud.png";
import { TbBrandBooking } from "react-icons/tb";
import { FaCheck, FaCogs, FaHammer } from 'react-icons/fa';
import { FaLaravel, FaNodeJs, FaReact, FaAngular, FaVuejs, FaWordpress, FaShopify } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showSolutions, setShowSolutions] = useState(true);

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const toggleSolutions = () => {
    setShowSolutions(!showSolutions);
  };

  const techStack = [
  {
    category: "Backend",
    technologies: [
      { name: "Laravel", icon: <FaLaravel />, color: "bg-red-100", border: "border-red-400" },
      { name: "Node.js", icon: <FaNodeJs />, color: "bg-green-100", border: "border-green-400" },
    ],
  },
  {
    category: "CMS",
    technologies: [
      { name: "WordPress", icon: <FaWordpress />, color: "bg-blue-100", border: "border-blue-400" },
      { name: "Shopify", icon: <FaShopify />, color: "bg-green-200", border: "border-green-500" },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React.js", icon: <FaReact />, color: "bg-blue-100", border: "border-blue-400" },
      { name: "Angular", icon: <FaAngular />, color: "bg-red-100", border: "border-red-400" },
      { name: "Vue.js", icon: <FaVuejs />, color: "bg-green-100", border: "border-green-400" },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "MySQL", icon: <SiMysql />, color: "bg-yellow-100", border: "border-yellow-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-blue-100", border: "border-blue-400" },
      { name: "MongoDB", icon: <SiMongodb />, color: "bg-green-100", border: "border-green-400" },
    ],
  },
];
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className=" bg-purple-100 shadow-md   py-12 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Agile <span className=" text-purple-500">Software</span>  Development
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Our processes are proven, the capabilities are there, and our tools are top-notch.
        </p>
      </div>

      {/* Web and Mobile Tech Stack */}
      <div className=" justify-center items-center container  mx-auto px-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 ">
        {/* Web Tech Stack */}
        <div className=" p-6 sm:p-8 transition-shadow">
          <h2 className="text-xl ml-[200px] font-semibold text-gray-800 mb-4">Web</h2>
          <img
            src={Web}
            alt="Web illustration"
            className="w-[500px] h-auto object-cover"
          />
          <div className="p-6 bg-gray-50">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Tech Stack</h3>
      <div className="space-y-6">
        {techStack.map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-md font-bold text-gray-800">{stack.category}</h4>
            <div className="flex flex-wrap gap-4">
              {stack.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: techIndex * 0.2 }}
                  className={`flex items-center space-x-2 p-4 ${tech.color} ${tech.border} border rounded-lg shadow-sm hover:shadow-lg transition`}
                >
                  <div className="text-xl">{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
        </div>

        {/* Mobile Tech Stack */}
        <div className=" p-6 px-10 sm:p-8">
          <h2 className="text-xl ml-[200px] font-semibold text-gray-800 mb-4">Mobile</h2>
          <img
            src={Mobile}
            alt="Mobile illustration"
            className="w-[400px] h-auto object-cover"
          />
          <div className="p-6 bg-gray-50">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Tech Stack</h3>
      <div className="space-y-6">
        {techStack.map((stack, index) => (
          <motion.div
            key={stack.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-md font-bold text-gray-800">{stack.category}</h4>
            <div className="flex flex-wrap gap-4">
              {stack.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: techIndex * 0.2 }}
                  className={`flex items-center space-x-2 p-4 ${tech.color} ${tech.border} border rounded-lg shadow-sm hover:shadow-lg transition`}
                >
                  <div className="text-xl">{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
        </div>
      </div>

      {/* Testing Section */}
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Testing</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img
            alt="Testing"
            src={Testing}
            className="rounded-lg object-cover"
            width={1000}
            height={700}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
      {/* Unit Tests Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-indigo-100 rounded-lg p-4 w-[300px] h-[100px] flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaCheck className="text-indigo-700 text-3xl mb-2" />
        <span className="text-indigo-700 font-semibold text-sm">Unit Tests</span>
      </motion.div>

      {/* Integration Testing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-indigo-100 rounded-lg p-4 w-[300px] h-[100px] flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaCogs className="text-indigo-700 text-3xl mb-2" />
        <span className="text-indigo-700 font-semibold text-sm">Integration</span>
      </motion.div>

      {/* End-to-End Testing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-indigo-100 rounded-lg p-4 w-[300px] h-[100px] flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaHammer className="text-indigo-700 text-3xl mb-2" />
        <span className="text-indigo-700 font-semibold text-sm">End-to-End</span>
      </motion.div>
    </div>
      </div>

      {/* DevOps Section */}
       {/* Deployment Section */}
      <div className="container mx-auto text-center mb-16 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mt-12 mb-8">DevOps</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* AWS Image with Github Button */}
        <div className="flex flex-col items-center">
          <img
            src={Github}
            width={150}
            height={80}
            alt="AWS"
            className="rounded-full mb-4"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
           Github
          </button>
        </div>

        {/* DigitalOcean Image with GitLab Button */}
        <div className="flex flex-col items-center">
          <img
            src={Gitlab}
            width={150}
            height={80}
            alt="DigitalOcean"
            className="rounded-full mb-4"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            GitLab
          </button>
        </div>

        {/* OtherCloud Image with BitBucket Button */}
        <div className="flex flex-col items-center">
          <img
            src={Bitbucket}
            width={150}
            height={80}
            alt="Cloud Services"
            className="rounded-full mb-4"
          />
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
            BitBucket
          </button>
        </div>
      </div>
    </div>

      {/* Deployment Section */}
      <div className="container mx-auto text-center mb-16 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Deployment</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* AWS Image with Github Button */}
        <div className="flex flex-col items-center">
          <img
            src={Aws}
            width={150}
            height={80}
            alt="AWS"
            className="rounded-full mb-4"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            AWS
          </button>
        </div>

        {/* DigitalOcean Image with GitLab Button */}
        <div className="flex flex-col items-center">
          <img
            src={Cloud}
            width={150}
            height={80}
            alt="DigitalOcean"
            className="rounded-full mb-4"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Digitalocean
          </button>
        </div>

        {/* OtherCloud Image with BitBucket Button */}
        <div className="flex flex-col items-center">
          <img
            src={Othercloud}
            width={150}
            height={80}
            alt="Cloud Services"
            className="rounded-full mb-4"
          />
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
            Other Cloud Services
          </button>
        </div>
      </div>
    </div>

      {/* Solutions Section */}
      <div className="container justify-center items-center mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="   p-6 sm:p-8">
          <div className=" bg-[#9797F8] w-[271px] items-center justify-center mb-5  h-[60px] rounded-lg text-center">  <h2 className="text-3xl font-bold text-white mt-4">Web Solutions</h2></div>
        
          <ul className="text-gray-600 space-y-2">
           <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">Booking Apps</span>
            </div>
            <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">Utility Apps</span>
            </div>
            <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">Financial Apps</span>
            </div>
            <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">eCommerce Apps</span>
    </div>
            
          </ul>
        </div>
        <div className="   p-6 sm:p-8">
         <div className=" bg-[#9797F8] w-[271px] items-center justify-center mb-5  h-[60px] rounded-lg text-center">  <h2 className="text-3xl font-bold text-white mt-4">Mobile Solutions</h2></div>
          <ul className="text-gray-600 space-y-2">
           <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">Booking Apps</span>
            </div>
            <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">Utility Apps</span>
            </div>
            <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">Financial Apps</span>
            </div>
            <div className="border-2 w-[200px] h-[50px] bg-[#2563eb] flex rounded-full justify-center items-center gap-2 shadow-md hover:bg-[#1d4ed8] transition duration-300">
      {/* Icon */}
      <span className="text-white text-lg">
        <TbBrandBooking />
      </span>
      {/* Text */}
      <span className="font-semibold text-white">eCommerce Apps</span>
    </div>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

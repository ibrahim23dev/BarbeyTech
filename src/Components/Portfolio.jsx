import React from "react";
import Project1 from "../assets/Tech/adbiyas.jpeg";
import Project2 from "../assets/Tech/adbiysaSoluation.jpeg";
import Project3 from "../assets/Tech/grocery.jpeg";
import Project4 from "../assets/Tech/Text.jpeg";
import Project6 from "../assets/Tech/UsaJob.jpeg";
import Project5 from "../assets/Tech/HasanTax.jpeg";

const Portfolio = () => {
  const projects = [
    { title: "Adbiyas Tour", image: Project1 },
    { title: "Adbiyas Solution", image: Project2 },
    { title: "Adbiyas Grocery", image: Project3 },
    { title: "Desitax Org.", image: Project4 },
    { title: "Hasan Tax", image: Project5 },
    { title: "Nanny Job USA", image: Project6 },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        {/* Button */}
        <button className="mt-10 px-6 py-2 bg-purple-600 text-white font-medium rounded-lg shadow-lg transform transition duration-300 hover:bg-purple-700 hover:scale-105">
          See All Projects
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

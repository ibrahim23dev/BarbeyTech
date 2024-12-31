import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project1 from "../assets/Tech/adbiyas.jpeg";
import Project2 from "../assets/Tech/adbiysaSoluation.jpeg";
import Project3 from "../assets/Tech/grocery.jpeg";
import Project4 from "../assets/Tech/Text.jpeg";
import Project5 from "../assets/Tech/HasanTax.jpeg";
import Project6 from "../assets/Tech/UsaJob.jpeg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Adbiyas Tour",
      image: Project1,
      github: "https://github.com/your-repo/adbiyas-tour",
      demo: "https://demo.adbiyas-tour.com",
    },
    {
      title: "Adbiyas Solution",
      image: Project2,
      github: "https://github.com/your-repo/adbiyas-solution",
      demo: "https://demo.adbiyas-solution.com",
    },
    {
      title: "Adbiyas Grocery",
      image: Project3,
      github: "https://github.com/your-repo/adbiyas-grocery",
      demo: "https://demo.adbiyas-grocery.com",
    },
    {
      title: "Desitax Org.",
      image: Project4,
      github: "https://github.com/your-repo/desitax-org",
      demo: "https://demo.desitax-org.com",
    },
    {
      title: "Hasan Tax",
      image: Project5,
      github: "https://github.com/your-repo/hasan-tax",
      demo: "https://demo.hasan-tax.com",
    },
    {
      title: "Nanny Job USA",
      image: Project6,
      github: "https://github.com/your-repo/nanny-job-usa",
      demo: "https://demo.nanny-job-usa.com",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-purple-600 hover:text-purple-800`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} text-purple-600 hover:text-purple-800`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Our Portfolio
          </h2>
          <p className="text-gray-600 text-lg animate-slide-up">
            Showcasing our technology and development phases.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Call to Action Button */}
        <button className="mt-12 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:bg-purple-700 hover:scale-105 animate-bounce">
          See All Projects
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

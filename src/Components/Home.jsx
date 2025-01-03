import React, { useState, useEffect } from "react";
import Services from "./Services";
import Solutions from "./Soluation";
import Development from "./Development";
import Portfolio from "./Portfolio";
import Partner from "./Partner";
import Testimonial from "./Testimonial";
import Banner1 from "../assets/Banner/Banner1.jpeg";
import Banner2 from "../assets/Banner/Banner2.jpeg";
import Banner3 from "../assets/Banner/Banner3.jpeg";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: Banner1,
      title: "Welcome to Barbey Tech",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Leo eget suspendisse sollicitudin consectetur.",
    },
    {
      src: Banner2,
      title: "Smart Solutions for a Connected World",
      description:
        "Aliquet in id id ullamcorper pulvinar dolor amet. Augue pretium amet platea eu sit sit.",
    },
    {
      src: Banner3,
      title: "Innovative Technology, Seamless Experience",
      description:
        "Tristique etiam quis bibendum duis mauris dictum molestie enim ut. Elementum tempus adipiscing nulla.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={images[currentImage].src}
          alt="Banner"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
            {images[currentImage].title}
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg max-w-3xl">
            {images[currentImage].description}
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 text-lg">
            Start Now
          </button>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-white scale-125" : "bg-gray-400"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <div className="py-16">
        <Services />
        <Solutions />
        <Development />
        <Portfolio />
        <Partner />
        <Testimonial />
      </div>
    </div>
  );
}

export default Home;

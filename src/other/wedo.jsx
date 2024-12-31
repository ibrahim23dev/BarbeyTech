import React from 'react';
import Cardustomse from "../assets/customse.jpg"
import Cloud from "../assets/cloudse.jpg";
import Mobilese from "../assets/Mobilese.jpg";
import Enterpsise from "../assets/EnterpriSe.jpg";
import AIse from "../assets/Aise.jpg";
import Itconsult from "../assets/Itconsult.jpg";
function Wedo() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <header className="py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">What We Do</h1>
        <p className="mt-4 text-lg md:text-xl">Empowering businesses through innovative software solutions</p>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={Cardustomse}
              alt="Custom Software Development"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">Custom Software Development</h2>
            <p className="mt-4 text-gray-600">
              We design and build scalable, high-quality software tailored to your business needs.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={Cloud}
              alt="Cloud Solutions"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">Cloud Solutions</h2>
            <p className="mt-4 text-gray-600">
              Leverage the power of the cloud to improve flexibility, security, and efficiency.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={Mobilese}
              alt="Mobile App Development"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">Mobile App Development</h2>
            <p className="mt-4 text-gray-600">
              We create user-friendly mobile apps that enhance customer engagement.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={Enterpsise}
              alt="Enterprise Solutions"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">Enterprise Solutions</h2>
            <p className="mt-4 text-gray-600">
              Optimize your enterprise operations with our tailored software solutions.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={AIse}
              alt="AI & Machine Learning"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">AI & Machine Learning</h2>
            <p className="mt-4 text-gray-600">
              Unlock new possibilities with AI-powered tools and machine learning solutions.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={Itconsult}
              alt="IT Consulting"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">IT Consulting</h2>
            <p className="mt-4 text-gray-600">
              Expert advice to align your IT strategies with your business goals.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Join Our Team</h2>
          <p className="mt-4">Be part of our vibrant and growing family of software engineers.</p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow">
            Careers
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Wedo;

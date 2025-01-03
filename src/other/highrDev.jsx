import React from 'react';

function HireDev() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
          Hire Top Developers for Your Projects
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We connect you with highly skilled developers to bring your ideas to life!
        </p>
      </div>

      {/* How it Works Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800">How It Works</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our process is simple and efficient. Here's how you can get started with hiring the best developers.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4 text-indigo-600 font-semibold text-2xl">01</div>
          <h3 className="text-xl font-semibold text-gray-800">Share Your Requirements</h3>
          <p className="mt-4 text-gray-600">
            Tell us about your project, the skills you need, and the timeline for completion.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4 text-indigo-600 font-semibold text-2xl">02</div>
          <h3 className="text-xl font-semibold text-gray-800">Get Matched with Developers</h3>
          <p className="mt-4 text-gray-600">
            We’ll match you with the best-fit developers based on your specific needs and requirements.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4 text-indigo-600 font-semibold text-2xl">03</div>
          <h3 className="text-xl font-semibold text-gray-800">Hire & Collaborate</h3>
          <p className="mt-4 text-gray-600">
            Once you're satisfied with the candidates, hire them and start working together on your project.
          </p>
        </div>
      </div>

      {/* Why Hire With Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Why Hire Developers With Us?</h2>
        <p className="mt-4 text-lg text-gray-600">
          We bring together a team of passionate, talented, and experienced developers.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto mt-8">
        {/* Benefit 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Expert Developers</h3>
          <p className="mt-4 text-gray-600">
            We connect you with developers who have proven experience in your technology stack.
          </p>
        </div>

        {/* Benefit 2 */}

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Flexibility & Control</h3>
          <p className="mt-4 text-gray-600">
            Hire developers on a full-time, part-time, or project basis. You control the collaboration.
          </p>
        </div> 
        {/* Benefit 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Transparent Pricing</h3>
          <p className="mt-4 text-gray-600">
            We offer clear and competitive pricing models without hidden fees or surprises.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Hire Your Developer?</h3>
        <p className="text-lg text-gray-600 mb-6">
          Let’s get started on your project today. Hire the right developer to bring your ideas to life.
        </p>
        <a
          href="#contact"
          className="px-8 py-3 bg-indigo-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Hire Now
        </a>
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-16 w-full max-w-screen-lg mx-auto text-center p-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold">Have Questions? Let’s Talk!</h2>
        <p className="mt-4 text-lg">
          Reach out to us directly for more information on hiring developers and getting started.
        </p>
        <a
          href="mailto:hire@company.com"
          className="mt-6 inline-block px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default HireDev;

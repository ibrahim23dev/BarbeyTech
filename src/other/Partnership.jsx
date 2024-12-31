import React from 'react';

function Partnership() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
          Join Our Partnership Program
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Grow with us! We’re looking for like-minded partners to collaborate and create impactful solutions.
        </p>
      </div>

      {/* Partnership Benefits Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto">
        {/* Benefit 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="text-indigo-600 font-semibold text-2xl">01</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Exclusive Resources</h2>
          <p className="mt-4 text-gray-600">
            Access to our comprehensive library of resources, tools, and support to help you succeed.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="text-indigo-600 font-semibold text-2xl">02</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Collaborative Growth</h2>
          <p className="mt-4 text-gray-600">
            Collaborate on innovative projects, helping both businesses grow through mutual efforts.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <span className="text-indigo-600 font-semibold text-2xl">03</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Revenue Sharing</h2>
          <p className="mt-4 text-gray-600">
            Enjoy lucrative revenue-sharing opportunities based on your contribution and performance.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
        <p className="text-lg text-gray-600 mb-6">
          If you’re ready to take your business to the next level, we’re here to support you.
        </p>
        <a
          href="#contact"
          className="px-8 py-3 bg-indigo-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Become a Partner
        </a>
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-16 w-full max-w-screen-lg mx-auto text-center p-8 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold">Have Questions? Let’s Talk!</h2>
        <p className="mt-4 text-lg">
          Reach out to us directly, and we’ll be happy to discuss how we can work together.
        </p>
        <a
          href="mailto:partner@company.com"
          className="mt-6 inline-block px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Partnership;

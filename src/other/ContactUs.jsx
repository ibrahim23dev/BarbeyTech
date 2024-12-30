import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="First_Name Last_Name"
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@domain.com"
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <h3 className="text-xl font-semibold text-gray-800">BARBEY TECH</h3>
          <p className="text-gray-600 mt-2">
            75, Green Road, Hossen Tower (6th floor)
            <br /> Near by Asia University, Farmgate, Dhaka-1216
          </p>
          <p className="text-gray-600 mt-4">+8801706 452 007</p>
          <p className="text-gray-600">hello@arch-tech.com</p>
          <div className="flex space-x-4 mt-4 text-purple-600">
            <a href="#" aria-label="YouTube" className="hover:text-purple-800">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-purple-800">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-purple-800">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-800">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902084928519!2d90.39126157420117!3d23.750920592109956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85b9c0d8c33%3A0xaea64d28f9e10a7e!2sFarmgate%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

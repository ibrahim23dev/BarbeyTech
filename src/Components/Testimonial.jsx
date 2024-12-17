import React, { useState } from "react";
import Me from '../assets/me.jpg'; // Adjust the path based on your folder structure

const TestimonialsAndFAQs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Esther Hills",
      designation: "Lead Internet Technician",
      image: Me, // Replace with the correct path
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      name: "Ethel Johnston",
      designation: "Human Resources Director",
      image: Me, // Replace with the correct path
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];

  const faqs = [
    { question: "What services does your software company provide?", answer: "We offer custom software solutions tailored to your needs." },
    { question: "What industries do you work with?", answer: "We build software for various industries, ensuring functionality aligns with your goals." },
    { question: "What technologies do you use?", answer: "We use the latest tech like React, Next.js, Tailwind CSS, and more." },
    { question: "How do you ensure the security of your software?", answer: "We follow best practices in cybersecurity and data protection." },
    { question: "How do you handle intellectual property rights?", answer: "All rights remain with the client, as per our agreement." },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-100 via-white to-purple-100 py-16 px-6">
      {/* Testimonials Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Clients Testimonials</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 transform hover:scale-105 transition-transform"
          >
            <div className="flex-shrink-0">
              {/* Replacing Next.js Image with standard img tag */}
              <img
                src={testimonial.image}
                width={70}
                height={70}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
              <p className="mt-4 text-gray-600">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 py-4 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-gray-800 font-medium">{faq.question}</p>
                  <span
                    className={`transform transition-transform ${activeFaq === index ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                {activeFaq === index && (
                  <div className="mt-2 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div>
            {activeFaq !== null && (
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800">
                  {faqs[activeFaq].question}
                </h4>
                <p className="mt-2 text-gray-600">{faqs[activeFaq].answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndFAQs;

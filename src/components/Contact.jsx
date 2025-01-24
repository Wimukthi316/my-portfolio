import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#03070e] text-white py-16 px-6 font-serif relative overflow-hidden"
      >
        {/* Decorative Floating Elements */}
        <div className="absolute top-16 left-16 w-16 h-16 bg-[#FFC371] opacity-30 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FF5F6D] opacity-40 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-[#34D399] opacity-25 blur-2xl rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#FFD700] opacity-35 blur-3xl rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 left-1/3 w-18 h-18 bg-[#FF4500] opacity-20 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-10 w-12 h-12 bg-[#7FFFD4] opacity-25 blur-2xl rounded-full animate-bounce"></div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Me</h2>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-[#0d121d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-[#0d121d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 bg-[#0d121d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#03070e] text-white py-8 px-4 font-serif">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Footer Title */}
          <p className="text-gray-400 text-2xl">
            Crafting ideas into reality. Let's connect!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-10 text-3xl">
            <a
              href="https://github.com/Wimukthi316"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/wimukthi-gunarathna-40b452259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:wimukthi316@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm font-semibold mb-3">
            © {new Date().getFullYear()} Wimukthi Gunarathna. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;

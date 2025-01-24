import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
          <h2 className="text-5xl font-bold">Contact Me</h2>
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
                className="w-full p-3 bg-[#0d121d] border border-gray-600 rounded-lg focus:outline-none focus:ring-2"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="relative flex items-center px-11 py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-500 rounded-3xl group overflow-hidden transition-transform duration-200 hover:scale-95">
                {/* Icon */}
                <div className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 left-3 group-hover:left-1/2 group-hover:-translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white transform transition-transform group-hover:scale-110"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>

                {/* Text */}
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-[200%]">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#03070e] text-white py-8 px-4 font-serif">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Footer Title */}
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 text-2xl">
            Crafting ideas into reality. Let's connect!
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-10 text-3xl">
            <a
              href="https://github.com/Wimukthi316"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-all duration-300 hover:-translate-y-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/wimukthi-gunarathna-40b452259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-all duration-300 hover:-translate-y-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:wimukthi316@gmail.com"
              className="text-gray-400 hover:text-purple-500 transition-all duration-300 hover:-translate-y-2"
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

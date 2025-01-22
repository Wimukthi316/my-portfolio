import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#03070e] text-white py-16 px-6 font-serif relative"
    >
      {/* Title and Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">
          Get in touch with me. You can either call, email directly, or send a
          message.
        </p>
      </div>

      {/* Contact Icons */}
      <div className="flex justify-center gap-16 mb-12">
        {/* Call Me */}
        <a
          href="tel:+94717989333"
          className="flex flex-col items-center gap-2 text-center hover:text-[#3aa0ff] transition-all transform hover:translate-y-[-4px]"
        >
          <FaPhoneAlt size={36} />
          <span>Call Me</span>
        </a>

        {/* Email Me */}
        <a
          href="wimukthi316@gmail.com"
          className="flex flex-col items-center gap-2 text-center hover:text-[#3aa0ff] transition-all transform hover:translate-y-[-4px]"
        >
          <FaEnvelope size={36} />
          <span>Email Me</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Wimukthi316"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-center hover:text-[#3aa0ff] transition-all transform hover:translate-y-[-4px]"
        >
          <FaGithub size={36} />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/wimukthi-gunarathna-40b452259/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-center hover:text-[#3aa0ff] transition-all transform hover:translate-y-[-4px]"
        >
          <FaLinkedin size={36} />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Contact Form */}
      <form className="max-w-4xl mx-auto bg-[#30343d] p-8 rounded-lg shadow-lg border border-white/30">
        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded-lg bg-[#5b5f66] text-white placeholder-white focus:ring-2"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-lg bg-[#5b5f66] text-white placeholder-white"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-full p-3 rounded-lg bg-[#5b5f66] text-white placeholder-white"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-6 bg-[#3aa0ff] text-white font-semibold text-lg rounded-lg hover:bg-[#1d3144] transition-all"
        >
          Send Message
        </button>
      </form>

      {/* Decorative Floating Elements */}
      <div className="absolute top-16 left-16 w-16 h-16 bg-[#FFC371] opacity-30 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FF5F6D] opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-[#34D399] opacity-25 blur-2xl rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#FFD700] opacity-35 blur-3xl rounded-full animate-bounce"></div>
      <div className="absolute bottom-16 left-1/3 w-18 h-18 bg-[#FF4500] opacity-20 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-10 w-12 h-12 bg-[#7FFFD4] opacity-25 blur-2xl rounded-full animate-bounce"></div>
    </section>
  );
};

export default Contact;

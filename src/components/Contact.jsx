import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6 font-serif">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <p className="text-center text-gray-400 mb-12">
        Feel free to connect with me through any of the platforms below!
      </p>

      {/* Contact Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/wimukthi-gunarathna-40b452259/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 p-4 rounded-lg shadow-lg"
        >
          <FaLinkedin size={30} className="text-blue-500" />
          <span className="text-lg">LinkedIn</span>
        </a>

        {/* Twitter */}
        <a
        href="https://twitter.com/Wimukthi316"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 p-4 rounded-lg shadow-lg"
        >
        <FaTwitter size={30} className="text-blue-400" />
        <span className="text-lg">Twitter</span>
        </a>


        {/* GitHub */}
        <a
          href="https://github.com/Wimukthi316"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 p-4 rounded-lg shadow-lg"
        >
          <FaGithub size={30} className="text-gray-400" />
          <span className="text-lg">GitHub</span>
        </a>

        

      </div>

      {/* Footer Note */}
      <p className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Wimukthi Gunarathna. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
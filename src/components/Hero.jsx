import React from "react";
import NightSky from "./NightSky";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center font-serif justify-center bg-gradient-to-b from-black via-[#0f0e17] to-[#1a1a2e] text-white overflow-hidden">
      {/* Background Stars */}
      <NightSky />

      {/* Content Section */}
      <div className="absolute top-1/2 left-4 md:left-10 lg:left-20 transform -translate-y-1/2 max-w-sm md:max-w-xl text-center md:text-left space-y-3 px-4 md:px-0">
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
          Welcome to my Portfolio!
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
          I'm <span className="text-purple-500">Wimukthi Gunarathna</span>,<br />
        </h1>

        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
          I craft modern, dynamic web experiences that bring ideas to life. Let's build something extraordinary together!
        </p>

        <div className="mt-3 sm:mt-4 md:mt-6">
          <a
            href="/resume.pdf" // Path to the resume file
            download="Wimukthi Gunarathna Resume.pdf"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Download My Resume
            <svg
              className="ml-2 sm:ml-3 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="absolute top-3/4 sm:top-1/2 right-4 sm:right-10 md:right-20 lg:right-40 transform -translate-y-1/2">
        <img
          src="/astro.png"
          alt="Decorative"
          className="w-32 sm:w-48 md:w-72 lg:w-96 object-cover rounded-lg shadow-lg animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;

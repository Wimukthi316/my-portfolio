import React from "react";
import NightSky from "./NightSky";


const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center font-serif justify-center bg-gradient-to-b from-black via-[#0f0e17] to-[#1a1a2e] text-white overflow-hidden">
      {/* Background Stars */}
      <NightSky />

      {/* Content Section */}
<div className="absolute top-1/2 left-10 md:left-20 transform -translate-y-1/2 max-w-xl text-center md:text-left space-y-3">
  <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
    Welcome to my Portfolio!
  </p>

  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
    I'm <span className="text-purple-500">Wimukthi Gunarathna</span>,<br />
    
  </h1>

  <p className="text-gray-300 text-base md:text-lg">
    I craft modern, dynamic web experiences that bring ideas to life. Let's build something extraordinary together!
  </p>

  <div className="mt-6">
    <a
        href="/resume.pdf" // Path to the resume file
        download="Wimukthi Gunarathna Resume.pdf" // Suggested filename for the download
        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      Download My Resume
      <svg
        className="ml-3 w-5 h-5"
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

      
    </div>
  );
};

export default Hero;
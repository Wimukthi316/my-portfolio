import React, { useEffect } from "react";
import NightSky from "./NightSky";
import DeveloperImg from "../assets/developer.png";

const Hero = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".animated-letter");

    // Set animation delay for each letter dynamically
    letters.forEach((letter, index) => {
      letter.style.transitionDelay = `${index * 0.05}s`; // Each letter will have a 0.05s delay
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Add 'animate' class when in view
        }
      });
    }, { threshold: 0.5 });

    letters.forEach((letter) => {
      observer.observe(letter); // Observe each letter
    });

    return () => {
      letters.forEach((letter) => observer.unobserve(letter)); // Cleanup observer
    };
  }, []);

  // Function to handle text splitting and adding spaces between words
  const splitText = (text) => {
    return text.split("").map((letter, index) => {
      // Check for spaces and return a space if found
      if (letter === " ") {
        return <span key={index} className="inline-block">&nbsp;</span>;
      }
      return (
        <span key={index} className="animated-letter inline-block opacity-0">
          {letter}
        </span>
      );
    });
  };

  return (
    <div className="relative w-full h-screen flex items-center font-serif justify-center bg-gradient-to-b from-black via-[#0f0e17] to-[#1a1a2e] text-white overflow-hidden">
      {/* Background Stars */}
      <NightSky />

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-16">
        {/* Text Section */}
        <div className="flex-1 text-left space-y-6 px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
            Welcome to my Portfolio!
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
            I'm <span className="text-purple-500">Wimukthi Gunarathna</span>,<br />
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
            {/* Animated text */}
            {splitText("FullStack Developer, UX/UI Designer and Data Science Student")}
          </p>

          <div className="mt-4 sm:mt-6">
            <a
              href="/Resume.pdf" // Path to the resume file
              download="Wimukthi Gunarathna.pdf"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-full text-xs sm:text-sm md:text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Download My Resume
              <svg
                className="ml-2 sm:ml-3 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6"
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
        <div className="flex-1 flex justify-center">
          <img
            src={DeveloperImg}
            alt="Decorative"
            className="w-72 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

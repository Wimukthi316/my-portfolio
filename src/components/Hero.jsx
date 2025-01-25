import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import NightSky from "./NightSky";
import ResumeButton from "./ResumeButton"; // Import the new ResumeButton
import developerImage from "../assets/developer.png"; // Adjust the path as needed

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  // Handle scroll event to adjust opacity of the image
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(1 - scrollY / 500, 0); // Ensure opacity doesn't go below 0
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // IntersectionObserver hook to handle when elements come into view
  const useIntersectionObserver = (ref, options) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        options
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref, options]);

    return isVisible;
  };

  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const imageRef = useRef(null);

  const textIsVisible = useIntersectionObserver(textRef, { threshold: 0.2 });
  const skillsIsVisible = useIntersectionObserver(skillsRef, { threshold: 0.2 });
  const imageIsVisible = useIntersectionObserver(imageRef, { threshold: 0.2 });

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Animation variants for skills section
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-[#0b1120] text-white font-serif flex items-center overflow-hidden">
      {/* NightSky Background */}
      <div className="absolute inset-0 z-0">
        <NightSky />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-32 pt-[4rem] pb-8 w-full gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:mr-10">
          <h2 className="md:text-xl  font-semibold bg-gradient-to-r from-purple-400 to-indigo-600 text-transparent bg-clip-text">
            Welcome to my Portfolio! <br />
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              I'm <span className="text-purple-500">Wimukthi Gunarathna</span>,<br />
            </h1>
          </h2>

          {/* Fullstack Developer Text Animation */}
          <motion.p
            ref={textRef}
            className="mt-4 text-base md:text-lg text-gray-400 text-justify"
            initial="hidden"
            animate={textIsVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            Fullstack Developer, UX/UI Designer, Mobile App Developer & Data Science Student
          </motion.p>

          {/* Skills Section */}
          <motion.div
            ref={skillsRef}
            className="flex flex-wrap gap-2 mt-6"
            initial="hidden"
            animate={skillsIsVisible ? "visible" : "hidden"}
            variants={skillVariants}
          >
            {["React", "JavaScript", "Node.js", "Tailwind"].map((skill) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm border border-purple-500 shadow-md shadow-white/10"
                variants={skillItemVariants}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-10">
            <ResumeButton /> {/* Use the new ResumeButton here */}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 md:ml-10">
          <motion.img
            ref={imageRef}
            src={developerImage}
            alt="Developer Illustration"
            className="w-[400px] sm:w-[400px] md:w-[450px] h-auto object-contain"
            style={{ opacity }} // Apply the dynamic opacity value
            transition={{
              duration: 0.5, // Smooth fade transition
              ease: "easeOut",
            }}
            initial="hidden"
            animate={imageIsVisible ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;

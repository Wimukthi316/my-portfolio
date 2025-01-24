import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaAndroid,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiKotlin, SiTailwindcss, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { TbVector } from "react-icons/tb"; // UX/UI Designing Icon

const skills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#539E43]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
  { name: "Android Studio", icon: <FaAndroid className="text-[#3DDC84]" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-[#796EFF]" /> },
  { name: "HTML", icon: <FaHtml5 className="text-[#FF5733]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1E90FF]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "Figma", icon: <FaFigma className="text-[#A259FF]" /> },
  { name: "UX/UI Designing", icon: <TbVector className="text-[#FF6D9D]" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#03070e] py-20 px-4 font-serif relative">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative group flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 transition-transform duration-300 transform hover:-translate-y-2 hover:bg-white/20"
            initial={{ x: -100, opacity: 0 }} // Start at the current position (not off-screen)
            whileInView={{ x: 0, opacity: 1 }} // Stay in place, just fade in
            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the card is visible
            transition={{
              type: "spring",
              stiffness: 250, // Increased stiffness for faster animation
              damping: 30, // Slightly less damping for smoother motion
              delay: index * 0.1, // Shortened delay for faster staggered animation
            }}
          >
            <div className="text-6xl mb-4 group-hover:text-[#3aa0ff]">
              {skill.icon}
            </div>
            <p className="text-lg font-bold text-white group-hover:text-gray-300">
              {skill.name}
            </p>
            <div className="absolute inset-0 bg-[#3aa0ff] opacity-0 group-hover:opacity-10 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>

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

export default Skills;

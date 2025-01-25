import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#03070e] text-white font-serif flex items-center justify-center overflow-hidden"
    >
      {/* Section Title with Animation */}
      <motion.h2
        className="absolute top-10 justify-center text-5xl font-bold text-gray-200 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Content Section with Scroll Animation */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20 max-w-4xl mx-auto -mt-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Animated Paragraphs */}
        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          🚀 Passionate fullstack developer dedicated to crafting modern,
          responsive, and immersive web experiences. I specialize in React,
          Tailwind CSS, and intuitive UI/UX design. With a detail-oriented
          mindset, I create sleek and efficient digital solutions. 🚀
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          ✨ Skilled in JavaScript, component-based architecture, and API
          integrations, I transform ideas into seamless digital experiences.
          Constantly evolving with the latest frontend trends to bring
          *cutting-edge* innovation to my work. ✨
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "UX/UI Design",
            "Node.js",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 text-gray-200 rounded-full text-sm border border-purple-400 shadow-md shadow-blue-500/20 transition-all duration-300 hover:bg-purple-500/20"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-16 w-16 h-16 bg-[#FFC371] opacity-30 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FF5F6D] opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-[#34D399] opacity-25 blur-2xl rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#FFD700] opacity-35 blur-3xl rounded-full animate-bounce"></div>
      <div className="absolute bottom-16 left-1/3 w-18 h-18 bg-[#FF4500] opacity-20 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-10 w-12 h-12 bg-[#7FFFD4] opacity-25 blur-2xl rounded-full animate-bounce"></div>
    </section>
  );
};

export default About;
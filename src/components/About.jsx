import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#03070e] font-serif flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Title Outside the Main Content */}
      <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-12 text-center">
        About Me
      </h2>

      {/* Content Wrapper */}
      <div className="relative z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/10 max-w-4xl mx-4 lg:mx-auto text-center">
        <p className="text-xl text-gray-200 leading-relaxed">
          <span className="text-[#FFC371] text-2xl mr-2">🚀</span>
          I'm a passionate frontend developer with experience in building
          modern and responsive websites. I specialize in creating efficient,
          scalable, and visually appealing user interfaces using React, Tailwind CSS, and other modern web technologies.
        </p>
        <p className="text-xl text-gray-200 leading-relaxed mt-6">
          <span className="text-[#FF5F6D] text-2xl mr-2">✨</span>
          With expertise in <strong className="text-[#FFC371]">JavaScript</strong>,{" "}
          <strong className="text-[#FFC371]">HTML</strong>,{" "}
          <strong className="text-[#FFC371]">CSS</strong>, and responsive design principles,
          I ensure every project delivers a seamless and engaging user experience. I’m dedicated to creating user-centric designs that stand out in today’s fast-evolving web landscape.
        </p>
        <div className="mt-10">
          {/* Call-to-action button */}
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] text-black font-bold rounded-full shadow-lg hover:shadow-[#FFC371]/50 hover:scale-110 transform transition duration-300">
            Explore My Work
          </button>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#BA84FF] opacity-70 blur-3xl rounded-s-3xl animate-floating"></div>
      <div className="absolute top-4 right-4 w-48 h-48 bg-[#53C4DD] opacity-70 blur-3xl rounded-full animate-floating"></div>
      <div className="absolute bottom-4 left-4 w-48 h-48 bg-[#7C8CF7] opacity-70 blur-3xl rounded-full animate-floating"></div>
      <div className="absolute bottom-4 right-4 w-48 h-48 bg-[#1E556D] opacity-70 blur-3xl rounded-full animate-floating"></div>
    </section>
  );
};

export default About;

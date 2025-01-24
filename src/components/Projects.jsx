import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import CaffeenaImg from "../assets/cafeena.png";
import HarvestBrewImg from "../assets/harvestbrew.png";
import SmoothieImg from "../assets/smoothie.png";
import FemmeFitImg from "../assets/femmefit.png";
import HaiPizaImg from "../assets/haipiza.png";
import ListMateImg from "../assets/listmate.png";

const projects = [
  {
    name: "FEMMEFIT",
    img: FemmeFitImg,
    description:
      "FEMMEFIT is a modern trending women's fashion website built with React and Tailwind CSS.",
    link: "https://femmefitclothing.netlify.app/",
    github: "",
    languages: ["React", "Vite", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "HARVESTBREW",
    img: HarvestBrewImg,
    description:
      "HARVESTBREW is a website for a tea shop built with React and Tailwind CSS, focusing on user-friendly navigation and aesthetic design.",
    link: "https://harvestbrew.netlify.app/",
    github: "",
    languages: ["React", "Vite", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "CAFFEENA",
    img: CaffeenaImg,
    description:
      "CAFFEENA is a coffee shop website developed using HTML, CSS, and JavaScript, offering a clean, modern UI.",
    link: "https://caffeena.netlify.app/",
    github: "",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "HAIPIZA",
    img: HaiPizaImg,
    description:
      "HAIPIZA is a Pizza shop mobile app UI design using a red colour theme to attract users.",
    link: "https://github.com/Wimukthi316/Hai-Piza",
    github: "",
    languages: ["Kotlin", "Figma"],
  },
  {
    name: "LISTMATE",
    img: ListMateImg,
    description:
      "List Mate Is Multitasking Mobile Application with timer, update, delete tasks. Create using Room Database",
    link: "https://github.com/Wimukthi316/List-Mate",
    github: "",
    languages: ["Kotlin", "RoomDB", "Figma"],
  },
  {
    name: "SMOOTHIE",
    img: SmoothieImg,
    description:
      "SMOOTHIE is a smoothie shop mobile app UI design using a light purple theme to attract users.",
    link: "https://smoothieapp.netlify.app/",
    github: "",
    languages: ["Kotlin", "Figma"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-[#03070e] text-white pt-2 pb-20 px-5 font-serif relative">
      <h2 className="text-center text-5xl font-extrabold mb-16">
        <span className="relative inline-block">My Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }} // Initial hidden state
            whileInView={{ opacity: 1, y: 0 }} // Animation when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
            transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-white">{project.name}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>

            {/* Languages Used */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.languages.map((lang, langIndex) => (
                <span
                  key={langIndex}
                  className="bg-[#1E1E1E] text-purple-400 text-sm px-3 py-1 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* GitHub Icon */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-4 text-gray-300 hover:text-white"
              >
                <FaGithub className="text-lg mr-2" />
                GitHub
              </a>
            )}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

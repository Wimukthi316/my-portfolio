import React from "react";
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
    link: "https://femmefitclothing.netlify.app/", // Add your project link here
  },
  {
    name: "HARVESTBREW",
    img: HarvestBrewImg,
    description:
      "HARVESTBREW is a website for a tea shop built with React and Tailwind CSS, focusing on user-friendly navigation and aesthetic design.",
    link: "https://harvestbrew.netlify.app/", // Add your project link here
  },
  {
    name: "CAFFEENA",
    img: CaffeenaImg,
    description:
      "CAFFEENA is a coffee shop website developed using HTML, CSS, and JavaScript, offering a clean, modern UI.",
    link: "https://caffeena.netlify.app/", // Add your project link here
  },
  {
    name: "HAIPIZA",
    img: HaiPizaImg,
    description:
      "HAIPIZA is a Pizza shop mobile app UI design using a red colour theme to attract users. .",
    link: "https://github.com/Wimukthi316/Hai-Piza", // Update if there's an error
  },
  {
    name: "LISTMATE",
    img: ListMateImg,
    description:
      "List Mate Is Multitasking Mobile Application with timer, update, delete tasks. Create using Room Database",
    link: "https://github.com/Wimukthi316/List-Mate", // Add your project link here
  },
  {
    name: "SMOOTHIE",
    img: SmoothieImg,
    description:
      "SMOOTHIE is a smoothie shop mobile app UI design using a light purple theme to attract users.",
    link: "https:", // Add your project link here
  },
  
  
  
];

const Projects = () => {
  return (
    <div id="projects" className="bg-[#03070e] text-white pt-2 pb-20 px-5 font-serif relative">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-extrabold mb-16">
        <span className="relative inline-block">My Projects</span>
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link} // Link to the project
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security and performance
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            {/* Project Name */}
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {project.name}
            </h3>
            {/* Description */}
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
          </a>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-16 w-16 h-16 bg-[#FFC371] opacity-30 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FF5F6D] opacity-40 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/2 w-10 h-10 bg-[#34D399] opacity-25 blur-2xl rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#FFD700] opacity-35 blur-3xl rounded-full animate-bounce"></div>
      <div className="absolute bottom-16 left-1/3 w-18 h-18 bg-[#FF4500] opacity-20 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-10 w-12 h-12 bg-[#7FFFD4] opacity-25 blur-2xl rounded-full animate-bounce"></div>
    </div>
  );
};

export default Projects;

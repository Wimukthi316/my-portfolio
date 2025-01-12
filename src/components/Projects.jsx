import React from 'react';

const projects = [
  { name: ' LIST MATE', img: '/images/plant1.png' },
  { name: 'CAFFEENA', img: '/images/plant2.png' },
  { name: 'HARVESTBREW', img: '/images/plant3.png' },
  { name: 'SMOOTHIE', img: '/images/plant4.png' },
  { name: 'FEMMEFIT', img: '/images/plant5.png' },
 
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20 px-5 font-serif">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-extrabold mb-16">
        <span className="relative inline-block">
          My Projects
        </span>
      </h2>

      {/* Project Cards */}
      <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((plant, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <img
              src={plant.img}
              alt={plant.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            {/* Project Name */}
            <h3 className="text-2xl font-semibold mb-2 text-white">{plant.name}</h3>
            {/* Description */}
            <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
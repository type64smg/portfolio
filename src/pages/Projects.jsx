import React from 'react';
import { motion } from 'framer-motion';
import projectData from '../data/projects'; // Load project details from a file

function Projects() {
  // Sort projects by year in descending order (latest first)
  const sortedProjects = projectData.sort((a, b) => b.year - a.year);

  // Utility to randomize tile width (small, medium, large)
  const getRandomWidth = () => {
    const widths = ['w-full', 'md:w-1/2', 'md:w-2/3']; // Random width sizes
    return widths[Math.floor(Math.random() * widths.length)];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container mx-auto p-8 dark:bg-dark-bg light-text"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">My Projects</h2>
      <div className="relative">
        {sortedProjects.map((project, index) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.05 }}
            className={`mb-8 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {/* Left-aligned items (Circle, Line, then Tile) */}
            {index % 2 === 0 ? (
              <>
                {/* Circle */}
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  {/* Horizontal line extending from the dot */}
                  <div className="absolute bg-blue-500 h-1 top-1/2 transform -translate-y-1/2 left-4 w-[60px]"></div>
                </div>
                {/* Tile */}
                <div
                  className={`bg-dark-card dark:bg-dark-card p-6 rounded-lg shadow-lg transition-all ${getRandomWidth()} ml-12`}
                >
                  <h3 className="text-2xl font-semibold mb-2 dark:text-light-text">
                    {project.name} <span className="text-sm text-gray-400">({project.year})</span>
                  </h3>
                  <p className="dark:text-light-text">{project.description}</p>
                </div>
              </>
            ) : (
              <>
                {/* Tile first for right-aligned items */}
                <div
                  className={`bg-dark-card dark:bg-dark-card p-6 rounded-lg shadow-lg transition-all ${getRandomWidth()} mr-12`}
                >
                  <h3 className="text-2xl font-semibold mb-2 dark:text-light-text">
                    {project.name} <span className="text-sm text-gray-400">({project.year})</span>
                  </h3>
                  <p className="dark:text-light-text">{project.description}</p>
                </div>
                {/* Horizontal line extending from the tile to the circle */}
                <div className="relative">
                  <div className="absolute bg-blue-500 h-1 top-1/2 transform -translate-y-1/2 right-4 w-[60px]"></div>
                  {/* Circle */}
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;

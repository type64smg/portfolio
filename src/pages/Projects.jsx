import React from 'react';
import { motion } from 'framer-motion';
import projectData from '../data/projects'; // Load project details from a file

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container mx-auto p-8 dark:bg-dark-bg light-text"
    >
      <h2 className="text-4xl font-bold mb-6  text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectData.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.05 }}
            className="bg-dark-card dark:bg-dark-card p-6 rounded-lg shadow-lg transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2 dark:text-light-text">{project.name}</h3>
            <p className="dark:text-light-text">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;

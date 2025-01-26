import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = ['React', 'JavaScript', 'CSS', 'Node.js', 'AI Integration'];

  return (
    <motion.div
      className="container mx-auto p-8container mx-auto p-8 dark:bg-dark-bg dark:text-dark-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="text-4xl text-white font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map(skill => (
          <motion.div
            key={skill}
            className="bg-blue-200 p-4 rounded shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();  // Step 2: Initialize navigate function from useNavigate

  const handleNavigate = () => {
    navigate('/projects');  // Step 3: Navigate to /projects route
  };

  const handleContact = () => {
    navigate('/contacts');  // Navigate to a contact page (you need to set up this route)
  };

  return (
    <motion.div
      className="container mx-auto p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-6xl font-bold mb-6 text-white">Welcome.</h1>
      <div className="flex">
        <div className="border-l-4 border-gray-300 pl-6">
          <p className="text-lg text-white">
            Hi, I’m Satyaki Bose, a passionate UI Developer with 8 years of experience turning complex ideas into seamless, interactive designs. Specializing in React, JavaScript, and creating reusable frontend components, I also have a strong background in building efficient backend APIs with Node.js and Express. Whether it’s crafting intuitive user interfaces or optimizing performance, I bring both creativity and precision to every project. When I'm not coding, you’ll find me immersed in gaming, honing my martial arts skills, or pushing my limits in fitness — because I believe in balancing both the mind and body for peak performance!
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
  <motion.button
    className="bg-blue-500 text-white p-2 rounded"
    whileHover={{ scale: 1.1 }}
    onClick={handleNavigate}
  >
    View My Projects
  </motion.button>

  <motion.button
    className="bg-green-500 text-white p-2 rounded"
    whileHover={{ scale: 1.1 }}
    onClick={handleContact}
  >
    Contact Me
  </motion.button>
</div>

    </motion.div>
  );
}

export default Home;

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';  // Import the required icons

function Contacts() {
  return (
    <div className="container mx-auto p-8 dark:bg-dark-bg dark:text-dark-text">
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Contact Me</h2>
      <p className="text-lg mb-6 text-white text-center">
        You can reach out to me through any of the following platforms:
      </p>

      <div className="flex justify-center">
        <div className="border-l-4 border-white pl-6 space-y-4">
          {/* Email */}
          <div className="flex items-center justify-center">
            <FaEnvelope className="text-xl text-blue-500 mr-4" /> {/* Email Icon */}
            <a 
              href="mailto:satyakibose1992@gmail.com"
              className="text-lg text-white hover:underline"
            >
              satyakibose1992@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center">
            <FaGithub className="text-xl text-blue-500 mr-4" /> {/* GitHub Icon */}
            <a 
              href="https://github.com/type64smg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:underline"
            >
              https://github.com/type64smg/
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center">
            <FaLinkedin className="text-xl text-blue-500 mr-4" /> {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/in/satyaki-bose-32bba7a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

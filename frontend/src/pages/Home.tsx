import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticleBackground from '../components/ParticleBackground';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              MD EKHTIAR UDDIN
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Software Engineer
            </motion.h2>
            
            <motion.div
              className="mb-8 max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-lg">
                Specialized in full-stack development with expertise in React, TypeScript, Python, and database technologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="https://github.com/EkhtiarUddin" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ekhtiar-uddin" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:uddinikhtiar6@gmail.com" className="text-3xl hover:text-blue-400 transition-colors">
                <FaEnvelope />
              </a>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link to="/about" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-white">
                About Me
              </Link>
              <Link to="/projects" className="px-8 py-3 rounded-full bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 transition-colors font-medium text-white">
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
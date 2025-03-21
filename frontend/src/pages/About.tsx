import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUserTie } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">About Me</h1>
          
          <div className="bg-gray-800 rounded-lg p-8 mb-8 shadow-lg">
            <p className="text-lg mb-6">
              I'm a dedicated Software Engineer with expertise in full-stack development. My journey in software development has equipped me with strong skills in Python, PHP, JavaScript, and TypeScript along with frameworks like Next.js, Laravel, and Django.
            </p>
            
            <p className="text-lg mb-6">
              Currently working as a remote Web Backend Engineer at Brand Cloud Inc. Ltd, I'm passionate about building scalable and efficient web applications. I have experience in database management, RESTful API development, and containerization with Docker.
            </p>
            
            <p className="text-lg">
              I'm particularly interested in AI and machine learning applications, having published research on the correlation between climate change and human health at the 2022 International Conference on Computer and Applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="bg-gray-800 rounded-lg p-6 text-center shadow-lg"
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <FaGraduationCap className="text-4xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>BSc. in Computer Science & Engineering from University of Asia Pacific, Dhaka</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg p-6 text-center shadow-lg"
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <FaLaptopCode className="text-4xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p>Python, PHP, JavaScript, TypeScript, Next.js, Laravel, Django, Docker, SQL, RESTful APIs</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg p-6 text-center shadow-lg"
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <FaUserTie className="text-4xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p>Web Backend Engineer with experience in teamwork, multitasking, and full-stack development</p>
            </motion.div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Personal Interests</h2>
            <p className="text-lg mb-6">
              Beyond coding, I'm passionate about researching emerging technologies, particularly in AI and machine learning. I enjoy solving complex problems and creating innovative solutions that can make a positive impact.
            </p>
            <p className="text-lg">
              I'm constantly expanding my knowledge through continuous learning and professional development, staying up-to-date with the latest industry trends and best practices in software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
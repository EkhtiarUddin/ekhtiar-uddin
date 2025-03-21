import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">MD EKHTIAR UDDIN</h3>
            <p className="text-gray-400">Software Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/EkhtiarUddin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/ekhtiar-uddin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:uddinikhtiar6@gmail.com" 
              className="text-xl hover:text-blue-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MD Ekhtiar Uddin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

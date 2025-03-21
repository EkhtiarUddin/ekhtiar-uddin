import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBook, FaMedal, FaCertificate } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "Research Publication",
      description: "A Machine Learning-Based Analysis Between Climate Change and Human Health: A Correlational Study",
      date: "2022",
      details: "Published in International Conference on Computer and Applications (ICCA), Cairo - Egypt",
      link: "https://doi.org/10.1109/ICCA56443.2022.10039484",
      icon: <FaBook className="text-3xl text-yellow-500" />
    },
    {
      id: 2,
      title: "AI Real Time Interactive Browser",
      description: "Developed an innovative browser control system using AI technologies",
      date: "2023",
      details: "Created a system allowing users to control browser sessions via UI with real-time interaction",
      icon: <FaTrophy className="text-3xl text-yellow-500" />
    },
    {
      id: 3,
      title: "Web Backend Engineer",
      description: "Successfully transitioned from intern to full-time engineer at Brand Cloud Inc.",
      date: "2023",
      details: "Demonstrated exceptional skills and work ethic to earn promotion within 3 months",
      icon: <FaMedal className="text-3xl text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Achievements</h1>
          
          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="mr-6 mt-2">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-blue-400">{achievement.title}</h3>
                      <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">{achievement.date}</span>
                    </div>
                    <p className="text-lg mb-2">{achievement.description}</p>
                    <p className="text-gray-400 mb-3">{achievement.details}</p>
                    {achievement.link && (
                      <a 
                        href={achievement.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                      >
                        View Publication <span className="ml-1">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              className="bg-gray-800 rounded-lg p-8 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FaCertificate className="text-5xl text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Academic Excellence</h2>
              <p className="text-lg mb-6">
                Completed BSc. in Computer Science & Engineering from the University of Asia Pacific with a CGPA of 3.05/4.00
              </p>
              <p className="text-gray-300">
                Focused on building practical skills alongside academic knowledge, balancing coursework with real-world projects and self-directed learning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;

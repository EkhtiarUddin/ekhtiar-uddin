import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 4 },
        { name: 'PHP', proficiency: 4 },
        { name: 'JavaScript', proficiency: 4 },
        { name: 'TypeScript', proficiency: 4 },
        { name: 'HTML/CSS', proficiency: 5 },
      ]
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'Next.js', proficiency: 4 },
        { name: 'Laravel', proficiency: 4 },
        { name: 'Django', proficiency: 3 },
        { name: 'React', proficiency: 4 },
        { name: 'FastAPI', proficiency: 3 },
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Docker', proficiency: 3 },
        { name: 'Git', proficiency: 4 },
        { name: 'PostgreSQL', proficiency: 4 },
        { name: 'MySQL', proficiency: 4 },
        { name: 'RESTful API', proficiency: 5 },
        { name: 'Jira', proficiency: 3 },
      ]
    },
    {
      name: 'Soft Skills',
      skills: [
        { name: 'Teamwork', proficiency: 5 },
        { name: 'Multitasking', proficiency: 4 },
        { name: 'Problem Solving', proficiency: 4 },
        { name: 'Communication', proficiency: 3 },
        { name: 'Time Management', proficiency: 4 },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const renderProficiencyBar = (proficiency: number) => {
    const maxProficiency = 5;
    const percentage = (proficiency / maxProficiency) * 100;
    
    return (
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Skills & Proficiencies</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">{category.name}</h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} variants={item}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.proficiency}/5</span>
                      </div>
                      {renderProficiencyBar(skill.proficiency)}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 max-w-5xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Professional Development</h2>
            <p className="text-lg text-center mb-6">
              I'm committed to continuous learning and staying up-to-date with the latest technologies and best practices in software engineering.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Currently exploring</p>
                <p className="text-blue-400 mt-2">AI & Machine Learning</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Focusing on</p>
                <p className="text-blue-400 mt-2">Cloud Technologies</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">Developing expertise in</p>
                <p className="text-blue-400 mt-2">Microservices Architecture</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
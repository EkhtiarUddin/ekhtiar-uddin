import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string | null;
  repoUrl: string | null;
  demoUrl: string | null;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // In a real implementation, fetch from your API
    // For now, using mock data
    const fetchProjects = async () => {
      try {
        // const response = await axios.get('/api/projects');
        // setProjects(response.data);
        
        // Mock data
        setProjects([
          {
            id: 1,
            title: "RAG AI Chatbot",
            description: "An AI-powered chatbot using Retrieval Augmented Generation. The project involved UI design, API development, and integration with OpenAI.",
            technologies: ["React", "TypeScript", "tRPC", "OpenAI", "MCP"],
            imageUrl: null,
            repoUrl: null,
            demoUrl: null
          },
          {
            id: 2,
            title: "Benrimono Project",
            description: "API development and integration project including middleware, authentication & authorization, schema, and database implementation.",
            technologies: ["TypeScript", "Next.js", "PostgreSQL", "RESTful API", "React", "Docker"],
            imageUrl: null,
            repoUrl: null,
            demoUrl: null
          },
          {
            id: 3,
            title: "Suirikyou Project",
            description: "UI design and integration project with focus on frontend development and content management.",
            technologies: ["HTML", "CSS", "React", "TypeScript", "MicroCMS"],
            imageUrl: null,
            repoUrl: null,
            demoUrl: null
          },
          {
            id: 4,
            title: "AI Real Time Interactive Browser",
            description: "A system allowing users to control a browser session via a frontend UI for navigation, clicking, and typing within the browser.",
            technologies: ["Python", "FastAPI", "Playwright", "WebSocket", "Tailwind CSS", "OpenAI"],
            imageUrl: null,
            repoUrl: "https://github.com/EkhtiarUddin",
            demoUrl: null
          },
          {
            id: 5,
            title: "Climate Change and Human Health Analysis",
            description: "Machine learning-based analysis examining the correlation between climate change and human health. Published in the 2022 International Conference on Computer and Applications.",
            technologies: ["Python", "Machine Learning", "Data Analysis"],
            imageUrl: null,
            repoUrl: null,
            demoUrl: "https://doi.org/10.1109/ICCA56443.2022.10039484"
          },
          {
            id: 6,
            title: "Innovation & Startup Social Networking Platform",
            description: "A platform connecting innovators and startups, developed during internship at Brand Cloud Inc.",
            technologies: ["Python", "Django", "MySQL", "HTML", "CSS"],
            imageUrl: null,
            repoUrl: null,
            demoUrl: null
          }
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Get unique technologies for filtering
  const allTechnologies = projects.reduce((acc: string[], project) => {
    project.technologies.forEach(tech => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, []);

  const filteredProjects = filter === 'all'
  ? projects
  : projects.filter(project => project.technologies.includes(filter));

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

if (loading) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-2xl">Loading projects...</div>
    </div>
  );
}

return (
  <div className="min-h-screen bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Projects</h1>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tech 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              variants={item}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      <span>Repository</span>
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </div>
);
};

export default Projects;
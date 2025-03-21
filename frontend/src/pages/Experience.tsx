import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Education & Experience</h1>
          
          <VerticalTimeline lineColor="#3b82f6">
            {/* Work Experience */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#1f2937', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date="September 2023 - Present"
              iconStyle={{ background: '#3b82f6', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">Web Backend Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-400">Brand Cloud Inc. Ltd (Remote)</h4>
              <div className="mt-4">
                <p className="mb-2"><strong>Projects:</strong></p>
                <ul className="list-disc list-inside">
                  <li className="mb-2">
                    <strong>Benrimono Project:</strong> API Development and Integration, Middleware, Authentication & Authorization, Schema, Database using TypeScript, NEXT.js, PostgreSQL, RESTful API, React, Docker
                  </li>
                  <li className="mb-2">
                    <strong>Suirikyou Project:</strong> UI Design and Integration using HTML, CSS, React, TypeScript, MicroCMS
                  </li>
                  <li className="mb-2">
                    <strong>RAG Project (AI Chatbot):</strong> UI Design, API Development and Integration, Research on Model Context Protocol using HTML, CSS, React, TypeScript, tRPC, Open AI, MCP
                  </li>
                </ul>
              </div>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#1f2937', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date="June 2023 - August 2023"
              iconStyle={{ background: '#3b82f6', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">Backend Engineer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle text-blue-400">Brand Cloud Inc. Ltd (Remote)</h4>
              <div className="mt-4">
                <p className="mb-2">Completed a three-month internship:</p>
                <ul className="list-disc list-inside">
                  <li className="mb-2">
                    Web scraping using Python and Selenium
                  </li>
                  <li className="mb-2">
                    Worked on projects using Python, Flask, PostgreSQL, RESTful API
                  </li>
                  <li className="mb-2">
                    Developed Innovation & Startup Social Networking Platform using Python, Django, MySQL, HTML, CSS
                  </li>
                </ul>
              </div>
            </VerticalTimelineElement>
            
            {/* Education */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#1f2937', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date="2018 - 2022"
              iconStyle={{ background: '#8b5cf6', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">BSc. in Computer Science & Engineering</h3>
              <h4 className="vertical-timeline-element-subtitle text-purple-400">University of Asia Pacific, Dhaka, Bangladesh</h4>
              <p className="mt-4">
                CGPA: 3.05 / 4.00
              </p>
              <p className="mt-2">
                Key courses: Data Structures, Algorithms, Database Management Systems, Web Programming, Software Engineering
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

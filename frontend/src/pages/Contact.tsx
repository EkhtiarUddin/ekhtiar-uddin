import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, send to your API
    // For now, simulate a submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // In a real implementation:
    // try {
    //   const response = await axios.post('/api/contact', formData);
    //   setFormStatus({
    //     submitted: true,
    //     success: true,
    //     message: 'Thank you for your message! I will get back to you soon.'
    //   });
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    // } catch (error) {
    //   setFormStatus({
    //     submitted: true,
    //     success: false,
    //     message: 'Something went wrong. Please try again later.'
    //   });
    // }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Contact Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <motion.div
                className="bg-gray-800 rounded-lg p-8 shadow-lg mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                <p className="text-gray-300 mb-6">
                  Feel free to contact me for job opportunities, collaborations, or just to say hello!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-gray-700 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">uddinikhtiar6@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gray-700 p-3 rounded-full mr-4">
                      <FaPhone className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+880-1830986054</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gray-700 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gray-800 rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/EkhtiarUddin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-full text-xl hover:bg-blue-600 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ekhtiar-uddin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-full text-xl hover:bg-blue-600 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-gray-800 rounded-lg p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              
              {formStatus && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

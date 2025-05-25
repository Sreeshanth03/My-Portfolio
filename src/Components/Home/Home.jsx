// src/Components/Home/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div
      className="section-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-white text-glow"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="gradient-text">Hello, I'm Sreeshanth Surukutla</span>
          </motion.h1>
          
          <TypeAnimation
            sequence={[
              'React Developer',
              1500,
              'Frontend Engineer',
              1500,
              'Problem Solver',
              1500,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400 text-glow"
          />
          
          <motion.p 
            className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I'm a passionate software developer who specializes in creating exceptional digital experiences through clean, intuitive design and seamless functionality. With strong expertise in React.js, I build dynamic, responsive web applications that are both visually appealing and highly performant. My development approach focuses on crafting scalable solutions that prioritize user experience while maintaining robust code architecture. I thrive on transforming complex requirements into elegant, maintainable applications that deliver real value to end users. Beyond technical implementation, I'm committed to staying at the forefront of frontend development trends and best practices to ensure my solutions are future-proof and efficient.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
          </motion.div>
          
          <motion.div 
            className="flex gap-6 mt-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="https://github.com/Sreeshanth03?tab=repositories"
              className="social-icon text-gray-400 hover:text-purple-400"
              whileHover={{ 
                y: -5,
                scale: 1.1,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={28} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/sreeshanth-surukutla-2017a331a/"
              className="social-icon text-gray-400 hover:text-purple-400"
              whileHover={{ 
                y: -5,
                scale: 1.1,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            
            <motion.a
              href="mailto:sreeshanthsurukutla03@gmail.com"
              className="social-icon text-gray-400 hover:text-purple-400"
              whileHover={{ 
                y: -5,
                scale: 1.1,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
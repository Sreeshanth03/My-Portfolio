import React, { useState } from "react";
import "./Exp.css";
import { motion } from 'framer-motion';

const Experience = () => {
  const [bouncingCard, setBouncingCard] = useState(null);

  const handleCardClick = (index) => {
    setBouncingCard(index);
    setTimeout(() => setBouncingCard(null), 800);
  };

  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python"],
      icon: "💻"
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "React.js"],
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["MySQL"],
      icon: "🗄️"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub"],
      icon: "🛠️"
    },
    {
      title: "Framework",
      skills: ["Bootstrap"],
      icon: "📦"
    }
  ];

  return (
    <section className="experience-container" id="experience">
      <div className="experience-header">
        <h5 className="experience-subtitle">Explore My</h5>
        <h1 className="experience-title">Experience</h1>
        <h2 className="experience-subtitle">Technical skills</h2>
      </div>
      
      <div className="tech-skills-container">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className={`tech-card shining ${bouncingCard === index ? "bounce" : ""}`}
            onClick={() => handleCardClick(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03,
              transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
          >
            <h1>{category.icon} {category.title}</h1>
            {category.skills.map((skill, skillIndex) => (
              <h2 key={skillIndex}>• {skill}</h2>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
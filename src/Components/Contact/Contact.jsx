import React from 'react';
import "./Contact.css";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope size={28} />,
      title: "Email",
      info:"sreeshanthsurukutla03@gmail.com",
      link: "mailto:sreeshanthsurukutla03@gmail.com",
      color: "text-purple-400",
      
    },
    {
      icon: <FaLinkedin size={28} />,
      title: "LinkedIn",
      info: "Sreeshanth Surukutla",
      link: "https://www.linkedin.com/in/sreeshanth-surukutla-2017a331a/",
      color: "text-blue-400"
    },
    {
      icon: <FaPhone size={28} />,
      title: "Phone",
      info: "+91 6304995592",
      link: "tel:+916304995592",
      color: "text-green-400"
    }
  ];

  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h5 className="contact-subtitle">Get in Touch</h5>
        <h1 className="contact-title">Contact Me</h1>
      </div>

      <div className="contact-cards">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            className="contact-card shining"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
          >
            <motion.div 
              className={`contact-icon ${method.color}`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {method.icon}
            </motion.div>
            <h2>{method.title}</h2>
            <motion.a
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {method.info}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
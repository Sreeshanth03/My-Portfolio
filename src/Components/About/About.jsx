import React from 'react'
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";
import { motion } from 'framer-motion';
import "./About.css"

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
      <h2 
  className="text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D66492] to-[#FF9E7D]"
  style={{ textAlign: "center", marginTop: "40px" }}
>
  Get To Know More
</h2>
<h1 
  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D66492] to-[#FF7EA7]"
  style={{ textAlign: "center" }}
>
  About Me
</h1>

      </motion.div>
      <br />

      {/* Cards Container */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Education Card */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="card-header"  style={{ textAlign: "center" }}>
            <div className="icon-container bg-purple-500/20"  style={{ textAlign: "center" }}>
              <PiStudentBold className="text-purple-400" size={24} />
            </div>
            <h2 className="card-title">Education</h2>
          </div>
          
          <div className="card-content" >
            <h3 className="degree">Bachelor of Technology</h3>
            <p className="field">Information Technology</p>
            
            <motion.button
              className="gpa-badge"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              C.GPA: 7.9
            </motion.button>
          </div>
        </motion.div>

        {/* Internship Card */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <div className="card-header">
            <div className="icon-container bg-blue-500/20">
              <MdOutlineSchool className="text-blue-400" size={24} />
            </div>
            <h2 className="card-title">Internship</h2>
          </div>
          
          <div className="card-content">
            <ul className="certificate-list">
              <li className="certificate-item">
                <span className="bullet-point"></span>
                <span>Received Certificate in Data Analyst from Unified Mentor</span>
              </li>
              <li className="certificate-item">
                <span className="bullet-point"></span>
                <span>Received Certificate in Java Programming from InternPe</span>
              </li>
              <li className="certificate-item">
                <span className="bullet-point"></span>
                <span>Received Certificate in Java from Udemy</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
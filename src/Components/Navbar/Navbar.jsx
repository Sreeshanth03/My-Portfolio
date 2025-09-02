import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css'; // We'll include the CSS in the same file

const links = [
  { name: 'Home', path: '/Home' },
  { name: 'About', path: '/About' },
  { name: 'Experience', path: '/Experience' },
  { name: 'Contact', path: '/Contact' },
];

const welcomeVariants = {
  hidden: { 
    opacity: 0,
    y: -50,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300 }
  }
};

const Navbar = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="welcome-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="welcome-message"
              variants={welcomeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {"Welcome to My Portfolio".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  style={{ display: 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="navbar-gradient sticky top-0 shadow-md z-50"
      >
        <div className="navbar-container">
          <motion.div
            className="navbar-brand gradient-text"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            MyPortfolio
          </motion.div>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
          </button>
          
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            {links.map(({ name, path }) => (
              <motion.li
                key={name}
                whileHover={!isMobile ? { scale: 1.1 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'navbar-link active gradient-text' : 'navbar-link gradient-text'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {name.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      whileHover={!isMobile ? { y: -5 } : {}}
                      transition={{ type: 'spring', stiffness: 500 }}
                      style={{ display: 'inline-block' }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
      
      <style>{`
        /* Navbar gradient and backdrop */
        .navbar-gradient {
          background: linear-gradient(90deg, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.95) 100%);
          backdrop-filter: blur(10px);
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }
        
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
          color: white;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .navbar-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        
        /* Make links always visible on mobile */
        .navbar-links li {
          display: inline-block;
        }
        
        .navbar-link {
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          color: white;
          display: block;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .navbar-link.active {
          font-weight: bold;
        }
        
        .navbar-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
        }
        
        /* Welcome overlay styles */
        .welcome-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(17, 24, 39, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        
        .welcome-message {
          font-size: 3rem;
          font-weight: bold;
          color: white;
          text-align: center;
        }
        
        .welcome-message span {
          display: inline-block;
        }
        
        /* Mobile menu button */
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }
        
        .mobile-menu-button span {
          width: 2rem;
          height: 0.25rem;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }
        
        .mobile-menu-button span:first-child {
          transform: rotate(0);
        }
        
        .mobile-menu-button span:nth-child(2) {
          opacity: 1;
        }
        
        .mobile-menu-button span:nth-child(3) {
          transform: rotate(0);
        }
        
        .mobile-menu-button span.open:first-child {
          transform: rotate(45deg);
        }
        
        .mobile-menu-button span.open:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-menu-button span.open:nth-child(3) {
          transform: rotate(-45deg);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .navbar-container {
            flex-direction: row;
            align-items: center;
            padding: 1rem;
          }
          
          .mobile-menu-button {
            display: flex;
          }
        
          .navbar-links {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: linear-gradient(90deg, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.98) 100%);
            backdrop-filter: blur(10px);
            margin-top: 0;
            gap: 0;
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .navbar-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        
          .navbar-links li {
            width: 100%;
          }
        
          .navbar-link {
            width: 100%;
            text-align: left;
            font-size: 1.2rem;
            padding: 1rem;
            display: block;
          }
          
          .navbar-link span {
            display: inline-block;
          }
        
          .welcome-message {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
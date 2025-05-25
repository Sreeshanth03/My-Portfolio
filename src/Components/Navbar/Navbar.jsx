import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { name: 'Home', path: '/Home' },
  { name: 'About', path: '/About' },
  { name: 'Experience', path: '/Experenice' }, // Fixed typo in path
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Welcome message disappears after 3 seconds

    return () => clearTimeout(timer);
  }, []);

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
          <ul className="navbar-links">
            {links.map(({ name, path }) => (
              <motion.li
                key={name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'navbar-link active gradient-text' : 'navbar-link gradient-text'
                  }
                >
                  {name.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -5 }}
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
      
    </>
  );
};

export default Navbar;
// src/App.js
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experenice from './Components/Experenice/Experenice'
import Contact from './Components/Contact/Contact'
import { AnimatePresence } from 'framer-motion'
import "./App.css"
const App = () => {
  const location = useLocation()

  return (
    <div className="app-dark-bg min-h-screen text-gray-200">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Experenice' element={<Experenice />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App


import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import AboutMe from './components/Pages/AboutMe';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
      </Router>
    </>
  );
}

export default App;

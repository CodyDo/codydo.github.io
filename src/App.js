import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import AboutMe from './components/Pages/AboutMe';
import Projects from './components/Pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        {/* 
        Old Navigation Set-up (Clicking will route to page, not jump to section)
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/projects' component={Projects} />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;

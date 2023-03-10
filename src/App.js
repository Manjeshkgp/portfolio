import React from 'react';
import Navbar from './components/Navbar';
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from './components/Hero';

const App = () => {
  return ( <>
  <Navbar/>
  <Hero/>
  <About/>
  <Education/>
  <Projects/>
  <Contact/>
  </> )
}

export default App
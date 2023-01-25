import React from 'react';
import Navbar from './components/Navbar';
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return ( <>
  <Navbar/>
  <About/>
  <Education/>
  <Projects/>
  <Contact/>
  </> )
}

export default App
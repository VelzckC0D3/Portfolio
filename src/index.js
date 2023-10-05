import React from 'react';
import {
  Route,
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Skills from './components/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster />
    <Router>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" />
        </Routes>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  </React.StrictMode>,
);

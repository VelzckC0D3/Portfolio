import React from 'react';
import {
  Route,
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import AnimatedCursor from 'react-animated-cursor';
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
    <AnimatedCursor
      innerStyle={{
        backgroundColor: 'white',
        mixBlendMode: 'exclusion',
      }}
      innerSize={8}
      outerSize={45}
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        border: '3px solid white',
        mixBlendMode: 'exclusion',
      }}
      clickables={[
        '.skillIcon',
        '.aboutButton',
        '.heroButton',
        'a',
        '.formInput',
        '.submitButton',
        'button',
      ]}
    />
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

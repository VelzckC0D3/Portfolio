import React from 'react';
import {
  Route,
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" />
        </Routes>
        <Hero />
        <About />
      </div>
    </Router>
  </React.StrictMode>,
);

import React from 'react';
import {
  Route,
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
        <Hero />
      </div>
    </Router>
  </React.StrictMode>,
);

import React from 'react';
import '../style/About.css';

const About = () => (
  <>
    <div className="aboutCont" id="about">
      <div className="aboutBG"> </div>
      <div className="about">
        <div className="aboutMain">
          <h2 className="aboutTitle" data-aos="fade-left" data-aos-duration="1000">about me</h2>
          <div className="aboutImg" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="1000"> </div>
        </div>
        <div className="aboutInfo">
          <div className="aboutDesc" data-aos="fade-left" data-aos-delay="550" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusamus autem est
            omnis quod, vitae minus obcaecati sit aspernatur blanditiis
            {' '}
            <span className="aboutSpan">React & Redux</span>
            {', '}
            <span className="aboutSpan">UI/UX Design</span>
            {', '}
            <span className="aboutSpan">CSS Frameworks & Pre-Processors</span>
            {' & '}
            <span className="aboutSpan">API Management</span>

          </div>
        </div>
        <div className="aboutButtonCont" data-aos="fade-left" data-aos-delay="750" data-aos-duration="800">
          <a className="aboutButton" href="#projects">my projects</a>
        </div>
      </div>
    </div>
  </>
);

export default About;

import React from 'react';
import '../style/About.css';

const About = () => (
  <>
    <div className="aboutCont" id="about">
      <div className="aboutBG"> </div>
      <div className="about">
        <div className="aboutMain">
          <h2 className="aboutTitle" data-aos="fade-left" data-aos-duration="1000">about me</h2>
          <div className="aboutImgCont" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
            <div className="aboutImg" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"> </div>
          </div>
        </div>
        <div className="aboutInfo">
          <div className="aboutDesc" data-aos="fade-left" data-aos-delay="550" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusamus autem est
            omnis quod.
            {' '}
            <span className="aboutSpan">React & Redux</span>
            {', '}
            <span className="aboutSpan">CSS Frameworks & Pre-Processors</span>
            {' & '}
            <span className="aboutSpan">API Management</span>

          </div>
        </div>
        <div className="aboutButtonCont">
          <div className="buttonCont" data-aos="fade-left" data-aos-delay="750" data-aos-duration="800">
            <a className="aboutButton" href="#projects">projects</a>
          </div>
          <div className="buttonCont" data-aos="fade-left" data-aos-delay="850" data-aos-duration="800">
            <a className="aboutButton" href="#contact">contact</a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;

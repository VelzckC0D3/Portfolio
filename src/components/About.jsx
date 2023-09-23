import React from 'react';
import '../style/About.css';

const About = () => (
  <>
    <div className="aboutCont" id="about">
      <div className="aboutBG"> </div>
      <div className="about">
        <div className="aboutMain">
          <h2 className="aboutTitle" data-aos="fade-left" data-aos-duration="1000">about me</h2>
          {/* <h3 className="aboutSub" data-aos="fade-left" data-aos-duration="1000">
          full-stack web developer</h3> */}
          <div className="aboutImgCont" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
            <div className="aboutImg" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"> </div>
          </div>
        </div>
        <div className="aboutInfo">
          <div className="aboutDesc" data-aos="fade-left" data-aos-delay="550" data-aos-duration="1000">
            full-stack developer with a strong focus on front-end, Agile
            development environments, emphasizing effective communication and collaboration.
            <br />
            <span className="aboutSpan">React & Redux</span>
            {', '}
            <span className="aboutSpan">Ruby on Rails</span>
            {', '}
            <span className="aboutSpan">Databases</span>
            {' & '}
            <span className="aboutSpan">Testing</span>

          </div>
        </div>
        <div className="aboutButtonCont">
          <div className="buttonCont" data-aos="fade-left" data-aos-delay="750" data-aos-duration="800">
            <a className="aboutButton" href="#experience">experience</a>
          </div>
          <div className="buttonCont" data-aos="fade-left" data-aos-delay="850" data-aos-duration="800">
            <a className="aboutButton" href="#projects">projects</a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;

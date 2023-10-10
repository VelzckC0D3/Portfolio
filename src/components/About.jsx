import React from 'react';
import '../style/About.css';

const About = () => (
  <>
    <div className="aboutCont" id="about">
      <div className="aboutBG"> </div>
      <div className="about">
        <div className="aboutMain">
          <h2 className="aboutTitle" data-aos-once="true" data-aos="fade-left" data-aos-duration="1000">about me</h2>
          <div className="aboutImgCont" data-aos-once="true" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
            <div className="aboutImg" data-aos-once="true" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"> </div>
          </div>
        </div>
        <div className="aboutInfo">
          <div className="aboutDesc" data-aos-once="true" data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000">
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
          <div className="buttonCont" data-aos-once="true" data-aos="fade-left" data-aos-delay="550" data-aos-duration="800">
            <a className="aboutButton" href="#experience">experience</a>
          </div>
          <div className="buttonCont" data-aos-once="true" data-aos="fade-left" data-aos-delay="650" data-aos-duration="800">
            <a className="aboutButton" href="#projects">projects</a>
          </div>
        </div>
        <div data-aos-once="true" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" className="resumeButton">
          <a href="https://drive.google.com/file/d/1kqrOK6Lqj2zYaN1OaJRAt04Nz0lsP-TI/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>
        </div>
      </div>
    </div>
  </>
);

export default About;

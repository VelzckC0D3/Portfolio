import React, { useEffect } from 'react';
import '../style/Hero.css';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');

    const handleScroll = () => {
      AOS.init();
    };

    wrapper.addEventListener('scroll', handleScroll);

    return () => {
      wrapper.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="heroCont" id="home">
      <div className="heroBG"> </div>
      <div className="hero">
        <div className="heroInfo">
          <p className="heroTitle">
            Hi there! My names is
            {' '}
            <span className="heroSpan">Alejandro Velasquez</span>
          </p>
          <p className="heroSubTitle">
            Front-End Web
            {' '}
            <span className="heroSpan">Developer</span>
          </p>
          <a href="#about" className="heroButton" type="button">
            know more
          </a>
          <ul className="heroIcons">
            <li className="heroIconsLi linkedin">
              <a
                href="https://github.com/VelzckC0D3"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <AiOutlineGithub />
                {' '}
              </a>
              {' '}
            </li>
            <li className="heroIconsLi">
              <a
                href="https://www.linkedin.com/in/velzckcode/"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <AiFillLinkedin />
                {' '}
              </a>
              {' '}
            </li>
            <li className="heroIconsLi">
              <a
                href="https://twitter.com/velzck"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <AiFillTwitterCircle />
                {' '}
              </a>
              {' '}
            </li>
            <li className="heroIconsLi">
              <a
                href="mailto:someone@yoursite.com"
                className="mail"
                title="e-mail"
              >
                <GoMail />
                {' '}
              </a>
              {' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
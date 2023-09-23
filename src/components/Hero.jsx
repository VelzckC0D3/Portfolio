import React, { useEffect } from 'react';
import '../style/Hero.css';
import {
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import { GoMail } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');

    const handleScroll = () => {
      AOS.init({ once: true });
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
          <span className="heroTitle">hi there!</span>
          <p className="heroSub">
            my names is
            {' '}
            <span className="heroSpan">Alejandro Velasquez</span>
          </p>
          <p className="heroSubTitle">
            full-stack Web
            {' '}
            <span className="heroSpan">developer</span>
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
                href="mailto:alejandro.velzck@gmail.com"
                className="mail"
                title="e-mail"
              >
                <GoMail />
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

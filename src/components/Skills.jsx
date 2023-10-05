import React from 'react';
import '../style/Skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';

const Skills = () => (
  <div className="skillsCont" id="skills">
    <div className="skills">
      <div className="experienceTitle" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
        <p>skills</p>
      </div>
      <div className="skillsBox">
        <div className="frontEnd skillBox" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
          <h2 className="skillTitle">front-end</h2>
          <p>
            focused on react delivering cross-platform solutions for enhanced user interactions
          </p>
          <div className="skillIcons">
            <div className="iconCont">
              <p>HTML</p>
              <AiFillHtml5 className="skillIcon" />
            </div>
            <div className="iconCont">
              <p>CSS</p>
              <FaCss3Alt className="skillIcon" />
            </div>
            <div className="iconCont">
              <p>JS</p>
              <div className="skillIcon svg" />
            </div>
            <div className="iconCont">
              <p>React</p>
              <FaReact className="skillIcon" />
            </div>
            <div className="iconCont">
              <p>Redux</p>
              <TbBrandRedux className="skillIcon redux" />
            </div>
          </div>
        </div>
      </div>
      {/* <p className="skillsText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aliquid libero earum
        eos quod necessitatibus cum ex, aut tenetur corrupti?
      </p> */}
    </div>
  </div>
);

export default Skills;

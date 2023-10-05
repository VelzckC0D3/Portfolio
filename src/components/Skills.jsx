import React from 'react';
import '../style/Skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';
import { HiOutlineDatabase } from 'react-icons/hi';
import { SiRubyonrails } from 'react-icons/si';
import { DiRubyRough } from 'react-icons/di';
import { BsGit } from 'react-icons/bs';
import { RiTestTubeLine } from 'react-icons/ri';

const Skills = () => (
  <div className="skillsCont" id="skills">
    <div className="skills">
      <div className="experienceTitle" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
        <p>skills</p>
      </div>
      <div className="skillsBoxCont">
        <div className="frontEnd skillBox" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000" data-aos-once="true">
          <div className="skill">
            <h2 className="skillTitle">front-end</h2>
            <p>
              transform design concepts into enhanced, visually appealing and responsive interfaces,
              elevating user experiences through UI/UX solutions.
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
        <div className="backEnd skillBox" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true">
          <div className="skill">
            <h2 className="skillTitle">back-end</h2>
            <p>
              provide software solutions through back-end systems,
              integrating software testing, solid databases & advanced features.
            </p>
            <div className="skillIcons">
              <div className="iconCont">
                <p>Ruby</p>
                <DiRubyRough className="skillIcon" />
              </div>
              <div className="iconCont">
                <p>Rails</p>
                <SiRubyonrails className="skillIcon" />
              </div>
              <div className="iconCont">
                <p>Git</p>
                <BsGit className="skillIcon" />
              </div>
              <div className="iconCont">
                <p>Databases</p>
                <HiOutlineDatabase className="skillIcon" />
              </div>
              <div className="iconCont">
                <p>Testing</p>
                <RiTestTubeLine className="skillIcon redux" />
              </div>
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

import React from 'react';
import '../style/Projects.css';
import projects from '../logic/Projects';

const Projects = () => (
  <>
    <div className="projectsCont" id="projects">
      <div className="projectsDescCont">
        <p className="projectsDesc" data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000"> Here you can check some of my recent projects </p>
      </div>
      <div className="projectCont">
        {projects.map((project) => (
          <div className="project" key={project.id} data-aos="fade-left" data-aos-delay="550" data-aos-duration="1000">
            <div className="projectImg"> </div>
            <h2 className="projectTitle">{project.title}</h2>
            <p className="projectDesc">{project.description}</p>
            <ul className="projectTechs">
              <li className="tech">{project.technologies[0]}</li>
              <li className="tech">{project.technologies[1]}</li>
              <li className="tech">{project.technologies[2]}</li>
              <li className="tech">{project.technologies[3]}</li>
              <li className="tech">{project.technologies[4]}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Projects;

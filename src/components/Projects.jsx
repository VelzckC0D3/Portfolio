import React from 'react';
import '../style/Projects.css';
import { FiLink, FiExternalLink } from 'react-icons/fi';
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
            <div className="projectImg" style={{ backgroundImage: `url(${project.thumbnail})` }}> </div>
            <h2 className="projectTitle">{project.title}</h2>
            <ul className="projectTechs">
              {project.technologies.map((tech) => (
                <li key={tech.id} className="tech">{tech}</li>
              ))}
            </ul>
            <p className="projectDesc">{project.description}</p>
            <ul className="projectLinks">
              <li className="projectLink">
                <a className="link" href={project.repo} target="_blank" rel="noopener noreferrer">
                  <FiLink className="linkIcon" />
                  {' '}
                  repository
                </a>
                <div className="linkBefore"> </div>
              </li>
              <li className="projectLink">
                <a className="link" href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="linkIcon" />
                  {' '}
                  live demo
                </a>
                <div className="linkBefore"> </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Projects;

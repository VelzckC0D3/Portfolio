import React, { useState } from 'react';
import '../style/Projects.css';
import { FiLink, FiExternalLink } from 'react-icons/fi';
import { AiFillPicture } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { RiCloseLine } from 'react-icons/ri';
import projects from '../logic/Portfolio';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function Projects() {
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = (project) => {
    setSelectedProject(project);
    setModal((current) => !current);
    if (!modal) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setTimeout(() => {
            toggleModal();
            document.querySelector('.wrapper').style.overflow = 'auto';
            document.querySelector('.navCont').style.pointerEvents = 'auto';
            document.querySelector('.navCont').style.transform = 'translateY(0)';
          }, 200);
          document.querySelector('.modalCont').classList.add('modalClose');
        }
      });
      document.querySelector('.wrapper').style.overflow = 'hidden';
      document.querySelector('.navCont').style.pointerEvents = 'none';
      document.querySelector('.navCont').style.transform = 'translateY(-5rem)';
    } else {
      document.querySelector('.wrapper').style.overflow = 'auto';
      document.querySelector('.navCont').style.pointerEvents = 'auto';
      document.querySelector('.navCont').style.transform = 'translateY(0)';
    }
  };

  return (
    <>
      <div className="projectsCont" id="projects">
        <div className="projectsDescCont">
          <p className="projectsDesc" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"> most recent projects </p>
        </div>
        <div className="projectCont">
          {projects.map((project) => (
            <div className="project" key={project.id} data-aos-once="true" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1000">
              <div className={`projectSubCont ${project.id}`}>
                <div className="projectImg" style={{ backgroundImage: `url(${project.thumbnail})` }} />
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
                  <li className="projectLink">
                    <a href="#gallery" onClick={() => toggleModal(project)} className="galleryBtn" type="button">
                      <AiFillPicture className="linkIcon" />
                      {' '}
                      gallery
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
          {modal && selectedProject && (
            <div className="modalCont" id="gallery">
              <div className="modal">
                <div className="modalHeader">
                  <h2 className="modalTitle">{selectedProject.title}</h2>
                  <RiCloseLine type="button" className="closeModal" onClick={() => { setTimeout(() => { toggleModal(); }, 200); document.querySelector('.modalCont').classList.add('modalClose'); }} />
                </div>
                <div className="modalTechs">
                  {selectedProject.technologies.map((tech) => (
                    <p className="modalTech" key={tech.id}>{tech}</p>
                  ))}
                </div>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{ clickable: true }}
                  loop="true"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                  {selectedProject.gallery.map((img) => (
                    <SwiperSlide key={img.id}>
                      <img className="modalImg" src={img} alt="gallery" loading="lazy" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <ul className="modalLinks">
                  <li>
                    <a className="modalLink" href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
                      <FiLink className="linkIcon" />
                      {' '}
                      repository
                    </a>
                  </li>
                  <li>
                    <a className="modalLink" href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="linkIcon" />
                      {' '}
                      live demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;

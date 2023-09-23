import React from 'react';
import '../../style/Experience.css';
import ExperienceTimeLine from './ExperienceTimeLine';
import CertificationsTimeLine from './CertificationsTimeLine';

const Experience = () => (
  <div className="experienceCont" id="experience">
    <div className="experienceTitle" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
      <p>experience</p>
    </div>
    <div className="timeLine">
      <ExperienceTimeLine />
    </div>
    <div className="experienceTitle" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
      <p>certifications</p>
    </div>
    <div className="timeLine">
      <CertificationsTimeLine />
    </div>
    <div className="divider" />
  </div>
);

export default Experience;

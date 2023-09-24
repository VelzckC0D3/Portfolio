import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiOpenbadges } from 'react-icons/si';

const CertificationsTimeLine = () => (
  <>
    <VerticalTimeline>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="january 2021 – january 2022"
        iconStyle={{ transform: 'scale(0.9)', backgroundColor: 'rgb(22 22 22)', color: '#fff' }}
        icon={<SiOpenbadges />}
      >
        <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
        <p className="timeline-name">Chicken Wings: The Prince</p>
        <p className="vertical-timeline-element-subtitle">Medellin, Colombia</p>
        <p className="timeline-text">
          JavaScript, React, HTML, CSS, SEO, UI/UX, Frameworks, Git, Web Design, Web Development
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="march 2022 - january 2023"
        iconStyle={{ transform: 'scale(0.9)', backgroundColor: 'rgb(22 22 22)', color: '#fff' }}
        icon={<SiOpenbadges />}
      >
        <h3 className="vertical-timeline-element-title">Technical Assistant</h3>
        <p className="timeline-name">[24]7.ai</p>
        <p className="vertical-timeline-element-subtitle">San Jose, CA (remote)</p>
        <p className="timeline-text">
          Team Leadership, Technical Support, Customer Service,
          Multitasking, Bilingual, Problem Solver
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="march 2023 - present"
        iconStyle={{ transform: 'scale(0.9)', backgroundColor: 'rgb(22 22 22)', color: '#fff' }}
        icon={<SiOpenbadges />}
      >
        <h3 className="vertical-timeline-element-title">Mentor</h3>
        <p className="timeline-name">Microverse</p>
        <p className="vertical-timeline-element-subtitle">San Francisco, CA (remote)</p>
        <p className="timeline-text">
          Team Leadership, Full-Stack Development, Agile Methodologies, Pair Programming, Git
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  </>
);

export default CertificationsTimeLine;

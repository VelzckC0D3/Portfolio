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
        date="january 2018 - march 2023"
        iconStyle={{ transform: 'scale(0.9)', backgroundColor: 'rgb(22 22 22)', color: '#fff' }}
        icon={<SiOpenbadges />}
        position="right"
      >
        <h3 className="vertical-timeline-element-title">Ipsum Amet</h3>
        <p className="timeline-name">Lorem Ipsum</p>
        <p className="vertical-timeline-element-subtitle">San Francisco, CA</p>
        <p className="timeline-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aspernatur
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="january 2018 - march 2023"
        iconStyle={{ transform: 'scale(0.9)', backgroundColor: 'rgb(22 22 22)', color: '#fff' }}
        icon={<SiOpenbadges />}
        position="left"
      >
        <h3 className="vertical-timeline-element-title">Ipsum Amet</h3>
        <p className="timeline-name">Lorem Ipsum</p>
        <p className="vertical-timeline-element-subtitle">San Francisco, CA</p>
        <p className="timeline-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, aspernatur
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ display: 'none' }}
      />

    </VerticalTimeline>
  </>
);

export default CertificationsTimeLine;

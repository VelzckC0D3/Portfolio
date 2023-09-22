import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiOpenbadges } from 'react-icons/si';

const CertificationsTimeLine = () => (
  <>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="2011 - present"
        iconStyle={{ transform: 'scale(0.9)', background: 'rgb(255 143 0)', color: '#fff' }}
        icon={<SiOpenbadges />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        date="2010 - 2011"
        iconStyle={{ transform: 'scale(0.9)', background: 'rgb(255 143 0)', color: '#fff' }}
        icon={<SiOpenbadges />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ transform: 'scale(0.9)', background: 'rgb(39 39 39)', color: '#fff' }}
        icon={<SiOpenbadges />}
      />
    </VerticalTimeline>
  </>
);

export default CertificationsTimeLine;

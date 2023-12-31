import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbCertificate } from 'react-icons/tb';

const CertificationsTimeLine = () => (
  <>
    <VerticalTimeline>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="january 2023 - october 2023"
        iconStyle={{ transform: 'scale(0.9)', backgroundColor: 'rgb(22 22 22)', color: '#fff' }}
        icon={<TbCertificate />}
        position="right"
      >
        <h3 className="vertical-timeline-element-title">Master of Computer Applications</h3>
        <p className="timeline-name">Microverse (1600+ hours)</p>
        <p className="vertical-timeline-element-subtitle">San Francisco, CA (remote)</p>
        <p>
          Full-Stack Development,
          Ruby on Rails,
          React & Redux,
          JavaScript,
          HTML/CSS,
          Database Management,
          Problem Solving,
          integral & unit testing,
          Collaboration and Teamwork,
          Agile Development
        </p>
        <button
          type="button"
          className="timelineLink"
          onClick={() => {
            window.open('https://www.credential.net/profile/josealejandrobenjumeavelasquez978619/wallet', '_blank', 'noreferrer');
          }}
        >
          check all credentials

        </button>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ backgroundColor: 'rgb(39 39 39 / 56%)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="january 2018 - march 2023"
        iconStyle={{ transform: 'scale(0.9)', backgroundColor: 'rgb(22 22 22)', color: '#fff' }}
        icon={<TbCertificate />}
        position="left"
      >
        <h3 className="vertical-timeline-element-title">C1 Advanced English</h3>
        <p className="timeline-name">EF SET</p>
        <p className="vertical-timeline-element-subtitle">Worldwide (online)</p>
        <p>Fully conversational professional english</p>
        <button
          type="button"
          className="timelineLink"
          onClick={() => {
            window.open('https://www.efset.org/cert/3BBYR8', '_blank', 'noreferrer');
          }}
        >
          check credential

        </button>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ display: 'none' }}
      />

    </VerticalTimeline>
  </>
);

export default CertificationsTimeLine;

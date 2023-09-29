import React from 'react';
import '../../style/Contact.css';
import ContactForm from './ContactForm';

const Contact = () => (
  <div className="contactCont">
    <div className="contact" id="contact">
      <div className="contactTitle" data-aos="fade-left" data-aos-delay="0" data-aos-duration="1000" data-aos-once="true">
        <p>contact</p>
      </div>

      <div className="contactFormCont">
        <div className="contactForm" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000" data-aos-once="true">
          <div className="formHeader">
            <p className="contactText">we can develop an amazing product!</p>
            <p>let&rsquo;s get in touch</p>
          </div>
          <ContactForm />
        </div>
      </div>

      <div className="contactTitle">
        <p>2023 | Alejandro Velasquez</p>
      </div>
    </div>
  </div>
);

export default Contact;

import React from 'react';
import '../../style/Contact.css';
import ContactForm from './ContactForm';

const Contact = () => (
  <div className="contactCont">
    <div className="contact" id="contact">
      <div className="contactTitle" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
        <p>contact</p>
      </div>
      <div className="contactFormCont">
        <div className="contactForm" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
          <div className="formHeader">
            <p>let&rsquo;s collaborate</p>
            <p className="contactText">to develop an amazing product!</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;

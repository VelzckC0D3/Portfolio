import React from 'react';
import '../../style/Contact.css';
import ContactForm from './ContactForm';
import Footer from '../Footer';

const Contact = () => (
  <>
    <div className="contactCont">
      <div className="contact" id="contact">
        <div className="contactTitle" data-aos="fade-left" data-aos-delay="0" data-aos-duration="1000" data-aos-once="true">
          <p>contact</p>
        </div>

        <div className="contactFormCont">
          <div className="contactForm" data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000" data-aos-once="true">
            <div className="formHeader">
              <p className="contactText">let&apos;s create something amazing!</p>
              <p>reach out for collaboration, ideas, or more</p>
            </div>
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </>
);

export default Contact;

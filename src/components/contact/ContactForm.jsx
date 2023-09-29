import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b365vfw', 'template_utf004l', form.current, 'ksgEozaWOPc2jZiop')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input className="formInput" type="text" name="from_name" placeholder="name" />
      <input className="formInput" type="email" name="from_email" placeholder="email" />
      <textarea className="formInput" name="message" placeholder="message" />
      <input className="submitButton" type="submit" value="contact" />
    </form>
  );
};

export default ContactForm;

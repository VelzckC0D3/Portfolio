import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoMail } from 'react-icons/go';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b365vfw', 'template_utf004l', form.current, 'ksgEozaWOPc2jZiop')
      .then((result) => {
        form.current.reset();
        alert('Message sent successfully');

        const { status } = result;
        return status;
      }, (error) => {
        const { status } = error;
        return status;
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <input className="formInput" type="text" name="from_name" placeholder="name" required="true" />
      <input className="formInput" type="email" name="from_email" placeholder="email" required="true" />
      <textarea className="formInput" name="message" placeholder="message" required="true" />
      <input className="submitButton" type="submit" value="contact" />
      <ul className="heroIcons">
        <li className="heroIconsLi linkedin">
          <a
            href="https://github.com/VelzckC0D3"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <AiOutlineGithub />
            {' '}
          </a>
          {' '}
        </li>
        <li className="heroIconsLi">
          <a
            href="mailto:alejandro.velzck@gmail.com"
            className="mail"
            title="e-mail"
          >
            <GoMail />
            {' '}
          </a>
          {' '}
        </li>
        <li className="heroIconsLi">
          <a
            href="https://www.linkedin.com/in/velzckcode/"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <AiFillLinkedin />
            {' '}
          </a>
          {' '}
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;

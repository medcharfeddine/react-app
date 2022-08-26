import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {  useRef as UseRef } from "react";
import emailjs from 'emailjs-com'


const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_suwxwu9', 'template_gyohb2g', form.current, 'jPE4QnGot5puwRneZ');

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>medcharfeddine@outlook.com</h5>
            <a href="mailto:medcharfeddine@outlook.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>LinkedIn Profil</h5>
            <a href="https://www.linkedin.com/in/medcharfeddine/" rel="noopener noreferrer" target="_blank">Let's Connect</a>
          </article>
          <article className="contact__option">
            <FaGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5>Github Profil</h5>
            <a href="https://github.com/medcharfeddine" rel="noopener noreferrer" target="_blank">Check out my work</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
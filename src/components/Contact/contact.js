import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3k271xi', 'template_zd8ubtd', form.current, 'JpEPMfGVfhMIVNkzy')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Message sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='contact-us'>
      <h1 className='contact-heading'>Contact Us</h1><br/><br/>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Enter your name here" className='name' name='user_name' /><br/><br/>
          <input type="email" placeholder="Enter your E-mail here" className='email' name='user_email' /><br/><br/>
          <textarea name='message' className='mess' placeholder='Write a message here' rows={10}></textarea><br/><br/>
          <button type="submit" value='Send' className="btn-submit">Submit</button>
        </form>
    </section>
    
  )
}

export default Contact;
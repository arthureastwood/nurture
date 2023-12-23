import React from 'react'
import './about.css';
import aboutImg from '../../assets/IMG-20231103-WA0001.jpg';

const About = () => {
  return (
    <section id='about-us'>
        <h1 className='about-heading'>About Us</h1>
        <p className='about-para'>The Nurture Organization is a community-based organization located in Tororo, Uganda.
Our vision is to end poverty through empowering impoverished communities economically.
We train the youth and women in vocational skills, product-making and financial literacy.
<br/>
        Prior to the pandemic, abject poverty has always been a global issue. However, with the pandemic, things only got worse. The suffering and hopelessness only increased in our community.
Join us in supporting the youth and women in our community to come out of poverty. No amount is too small.
</p>
<img src={aboutImg} className='aboutMagshot' alt='aboutImg' />
    </section>
  )
}

export default About;
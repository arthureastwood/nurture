import React from 'react';
import './impact.css';
import impactImg from '../../assets/IMG-20231103-WA0000.jpg';

const Impact = () => {
  return (
    <section id='impact'>
        <h1 className='impact-heading'>Our Impact</h1>
        <p className='impact-para'>
        We are currently providing training in a few skills
         such as hair dressing, crocheting, and knitting, detergent-making,
          rug-making. However, we hope to commence on the rest of the
         skills gradually as we acquire the needed equipment and instructors.<br/><br/>
        <img src={impactImg} className='ImpactMagshot' alt='ImpactImg' /><br/><br/>
        You are welcome to donate, volunteer and partner with us!
        </p>
    </section>
  )
}

export default Impact;
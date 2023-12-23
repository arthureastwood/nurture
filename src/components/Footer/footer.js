import React from 'react';
import './footer.css';
import inst from '../../assets/instagram.png';
import whats from '../../assets/whatsapp.png';

const Footer = () => {
    console.log(new Date().getFullYear());
  return (
    <footer className='footer'>
        <div className='social-icons'>
            <a href='https://instagram.com/nurture.nfpo?igshid=MzNINGNkZWQ4Mg==' target='_blank' rel="noopener noreferrer" className='instaMag'><img src={inst} alt='Instagram Icon' /> </a>
            <a href='https://wa.me/+256787750506' target='_blank' rel="noopener noreferrer" className='whatsMag'><img src={whats} alt='Whatsapp Icon' /> </a>
        </div>
        <div className='year'>
            &copy;Nurture Organization, {new Date().getFullYear()}. All Rights Reserved.
        </div>
        
    </footer>
  )
}

export default Footer;
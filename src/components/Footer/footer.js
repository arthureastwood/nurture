import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    console.log(new Date().getFullYear());
  return (
    <footer className='footer'>
        <div className='social-icons'>
            <a href="https://instagram.com/nurture.nfpo?igshid=MzNINGNkZWQ4Mg==" className="instagram social" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/+256787750506" className="whatsapp social" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
        </div>
        <div className='year'>
            &copy;Nurture Organization, {new Date().getFullYear()}. All Rights Reserved.
        </div>
        
    </footer>
  )
}

export default Footer;
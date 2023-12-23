import React from 'react';
import './navbar.css';
import logo from '../../assets/nurture_main.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Nurture Logo" className='logo' />
        <div className="Menu">
          <Link activeClass='active' to='about-us' spy={true} smooth={true} offset={-100} duration={500} className='MenuListItem'>About Us</Link>
          <Link activeClass='active' to='plan' spy={true} smooth={true} offset={-50} duration={500} className='MenuListItem'>What We Plan to Do</Link>
          <Link activeClass='active' to='impact' spy={true} smooth={true} offset={-50} duration={500} className='MenuListItem'>Our Impact</Link>
          <Link activeClass='active' to='donate' spy={true} smooth={true} offset={-50} duration={500} className='MenuListItem'>Donate</Link>
          <Link activeClass='active' to='contact-us' spy={true} smooth={true} offset={-50} duration={500} className='MenuListItem'>Contact Us</Link>
        </div>
        <button className="MenuButton">
          <img src="" alt="" className="MenuImg" />Donate</button>
    </nav>
  )
}

export default Navbar;
import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Mohamed Charfeddine</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><FaInstagramSquare/></a>
        <a href="https://linkedin.com"><FaLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mohamed Charfeddine. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer
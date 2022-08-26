import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'


const nav = () => {
  return (
    <nav>
      <a href="#" className='active'><FaHome/></a>
      <a href="#about"><FaUserAlt/></a>
      <a href="#experience"><FaBook/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><AiFillMessage/></a>
    </nav>
  )
}

export default nav
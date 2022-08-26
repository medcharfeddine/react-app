import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe Photoshop</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe XD</p>
            </li>
          </ul>
        </article>
       {/* END OF UI/UX */}
       <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML5</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CSS3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>ReactJs</p>
            </li>
          </ul>
        </article>
       {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default services
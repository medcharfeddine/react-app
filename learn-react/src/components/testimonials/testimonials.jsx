import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique magni molestias veniam laboriosam molestiae cupiditate illum tenetur possimus vero doloremque.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique magni molestias veniam laboriosam molestiae cupiditate illum tenetur possimus vero doloremque.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique magni molestias veniam laboriosam molestiae cupiditate illum tenetur possimus vero doloremque.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique magni molestias veniam laboriosam molestiae cupiditate illum tenetur possimus vero doloremque.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials
import React from 'react'
import ProfilePic from "../Assets/khanhavt.png";
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>what u say</h1>
        <p className='primary-text'>
            blah blah
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt='avatar'/>
        <p>
            blah blah
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>Bao Khanh</h2>
      </div>
    </div>
  )
}

export default Testimonial;

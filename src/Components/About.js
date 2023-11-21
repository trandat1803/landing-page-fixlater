import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="Background"/>
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="backgroundImage"/>
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">
                About
            </p>
            <h1 className="primary-heading">
                About us
            </h1>
            <p className="primary-text">
                blah blah
            </p>
            <p className="primary-text">
                blah blah
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn more</button>
                <button className="watch-video-button">
                    <BsFillPlayCircleFill/>
                    watch video
                </button>
            </div>
        </div>
    </div>
  )
}

export default About

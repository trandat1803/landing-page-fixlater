import React from 'react'
import Navbar from './Navbar';
import bannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div className='home.container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={bannerBackground} alt=""/>
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Khanh hihihaha
          </h1>
          <p className='primary-text'>
            description about the product
          </p>
          <button className='secondary-button'>
            More Info <FiArrowRight/>
          </button>
        </div>
        <div className='home-image-container'>
          <img src ={BannerImage} alt='image'/>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading className='app__header-title' title='Chase the new flavour'/>
        <h1 className='app__header-h1'>Good Food, Good Mood, Every Time!</h1>
        <p className='app__header-text' style={{margin: '2rem 0'}}>Indulge in the ultimate culinary experience with our delectable menu that's designed to tantalize your taste buds. From savory sandwiches to mouthwatering dosas, our wide selection of flavorsome dishes will leave you craving for more.</p>
        <button type='button' className='header__button'>Explore Menu</button>
      </div>
      {/* <div className="app__wrapper_img">
        <img src={images.panini} alt="header_img" />
      </div> */}
      <div className='app__wrapper_img'>
        <Carousel
          showArrows={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000} // Set the interval for autoPlay in milliseconds
          stopOnHover={true}
          swipeable={true}
          renderIndicator={false}
          className='app__header-carousel'
        >
          <div>
            <img src={images.blast} alt="veg cheese blast" />
          </div>
          <div>
            <img src={images.caribbean_panini} alt="caribbbean panini" />
          </div>
          <div>
            <img src={images.bomb_roll} alt="veg cheese bomb roll" />
          </div>
          <div>
            <img src={images.chilli_cheese_gb} alt="chilli cheese garlic bread" />
          </div>
          <div>
            <img src={images.jini} alt="jini dosa" />
          </div>
          <div>
            <img src={images.garlic_bread} alt="cheese garlic bread" />
          </div>
          <div>
            <img src={images.lays_mayo} alt="lays mayo dosa" />
          </div>
          <div>
            <img src={images.pahadi} alt="pahadi grilled sandwich" />
          </div>
        </Carousel>
        </div>
    </div>
    
  )
}

export default Header
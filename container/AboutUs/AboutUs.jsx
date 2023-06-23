import React from 'react'
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='app__aboutus flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay'>
        <img src={images.pizza_dosa} alt='pizza dosa'/>
      </div>
      <div className='app__aboutus-content'>
        <p>Bliss Veg Resto™ offers an array of delicious spicy fast food and snacks, which are just right to end an enjoyable meal. We have been successful in 
            being customer’s number one choice with our different type of dishes. We are 
            committed towards serving quality food using the 
            finest and freshest ingredients. Since its 
            inception, our menu has evolved 
            ensuring that it offers a variety of products to our 
            esteemed customers and encompasses a galore of 
            vegetarian fast food snacks</p>
      </div>
      
    </div>
  )
}

export default AboutUs
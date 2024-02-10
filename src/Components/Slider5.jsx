import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Slider5 = () => {
  return (
    <div>
 <Carousel data-bs-theme="light">
      <Carousel.Item interval={5000}>
        <img 
          className="d-block w-100"
          src="./img/onas.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      
      </Carousel>
    </div>     
  )
}

export default Slider5
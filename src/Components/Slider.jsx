import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'reactjs-popup/dist/index.css';
import '../App.css'

const Slider = () => {
  return (
 
 <Carousel data-bs-theme="dark">
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src="./img/leto1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/leto2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/leto3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
            
        </Carousel.Caption>
      </Carousel.Item>
     <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/osen1.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/osen2.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/osen3.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/vesna1.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/vesna2.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/vesna3.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  
  )
}

export default Slider
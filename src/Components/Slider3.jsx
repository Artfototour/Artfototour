import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Slider3 = () => {
  return (
    <div>
 <Carousel data-bs-theme="dark">
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/selo1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div class="content">
        <h2>Бабугент - название горного села в Кабардино-Балкарии, расположенного на высоте 
            1120 метров над уровнем моря.</h2>
             </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img 
          className="d-block w-100"
          src="./img/selo2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div class="content">
        <h2>Туристов в Верхней Балкарии привлекает сочетание красоты гор,
             реки Черек Балкарский, а также истории — ведь это место считается “колыбелью 
             балкарского народа”.</h2>
             </div>
        </Carousel.Caption>
      </Carousel.Item>
  
      </Carousel>
    </div>     
  )
}

export default Slider3
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Slider2 = () => {
  return (
    <div>
 <Carousel data-bs-theme="dark">
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img/ozero1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div class="content">
        <h1>Голубые озера Кабардино-Балкарии — 
            это группа из пяти карстовых водоемов, расположенных в Черекском районе, недалеко от
             с. Бабугент, на правом берегу реки Черек-Балкарский.</h1> 
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img/ozero2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div class="content">
        <h1>Голубые озера находятся на территории особо охраняемой зоны, 
            площадью 147.6 Га, образованной в 1978 г. с целью сохранения 
            уникальных памятников природы.</h1> 
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="./img/ozero3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    
      </Carousel>
    </div>     
  )
}

export default Slider2
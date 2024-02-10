import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'reactjs-popup/dist/index.css';

const Slider1 = () => {
  return (
    <div>
 <Carousel data-bs-theme="dark">
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img/zima2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>  
        <div class="content">
          <h1>Чегемские водопады зимой – это
      холод и дикая красота природы Кабардино-Балкарии. Вы можете
      увидеть гигантские столбы льда, прозрачные колонны и сталактиты
      замерзшей воды, спускающиеся к самой реке.</h1>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img/zima1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div  class="content">
          <h1>Как люстры с хрустальной
      переливающейся бахромой нависают ледяные свечи над Чегемом. Чегемские водопады вырываются прямо из скал, за это их еще
        называют "Плачущими водопадами", будто сами скалы плачут.</h1> </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img 
          className="d-block w-100"
          src="./img/zima4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <div class="content">
        <h1>Чегемские водопады — впечатляющее творение природы, прекрасное
          своей суровостью и мощью. Горная река Чегем мечется
          в тесном русле, с трудом пробивая путь в извилистых ущельях —
          отсюда и название «Чегем», что значит «земля сломалась».</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>     
  )
}

export default Slider1
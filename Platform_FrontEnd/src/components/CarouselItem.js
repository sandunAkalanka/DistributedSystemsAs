import Carousel from 'react-bootstrap/Carousel';
import './CarouselItem.css';
import sliderImg1 from '../assets/wallpaper1.jpg';
import sliderImg2 from '../assets/wallpaper2.jpg';
import sliderImg3 from '../assets/wallpaper3.jpg';

function CarouselItem() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 transparent-image"
          src={sliderImg1}
          alt="First slide"
          height='450px'
        />
        <Carousel.Caption>
          <h1>Herbal Beverages</h1>
          <h3>Experience the greenish freshness!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 transparent-image"
          src={sliderImg2}
          alt="Second slide"
          height='450px'
        />
        <Carousel.Caption>
          <h1>Healthy Snacks</h1>
          <h3>Taste the deliciousness of natural sugar!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 transparent-image"
          src={sliderImg3}
          alt="Third slide"
          height='450px'
        />
        <Carousel.Caption>
          <h1>Fresh Fruits</h1>
          <h3>Carefully selected fruits of the highest quality!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselItem;
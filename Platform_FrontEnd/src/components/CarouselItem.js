import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../assets/wallpaper1.jpg';
import sliderImg2 from '../assets/wallpaper2.jpg';
import sliderImg3 from '../assets/wallpaper3.jpg';

function CarouselItem() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={sliderImg1}
          alt="First slide"
          height='400px'
          //opacity='60%'
        />
        <Carousel.Caption>
          <h3>Heal with nature</h3>
          <p>Nurture your body, naturally with our herbal remedies!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={sliderImg2}
          alt="Second slide"
          height='400px'
        />
        <Carousel.Caption>
          <h3>Fragrance and Beauty</h3>
          <p>Mother Nature's medicine - discover the power of herbs today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={sliderImg3}
          alt="Third slide"
          height='400px'
        />
        <Carousel.Caption>
          <h3>Herbal healing</h3>
          <p>Herbal healing for a healthier you - try our natural remedies now!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselItem;
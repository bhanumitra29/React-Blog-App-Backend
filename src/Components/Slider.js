import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css"
const SliderComponent = () => {
  
const slides = [
  {
    url:
      'https://beebom.com/wp-content/uploads/2023/09/iPhone-15-Pro-Max-Display.jpg?quality=75&strip=all',
    title: 'Tech',
  },
  {
    url:
      'https://img.etimg.com/thumb/msid-103490511,width-650,height-488,imgsize-52878,,resizemode-75/jawan-features-srk-in-a-dual-role-and-was-shot-in-various-locations-across-india-.jpg',
    title: 'Bolly',
  },
  {
    url:
      'https://m.media-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288.jpg',
    title: 'Holly',
  },
];



    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 2000, 
    };

const sliderRef = React.createRef();

const handleNextSlide = () => {
  sliderRef.current.slickNext();
};

const handlePrevSlide = () => {
  sliderRef.current.slickPrev();
};

  
    return (
      <div>
       
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-item">
              <img
                src={slide.url}
                alt={slide.title}
                className="sliderClass" // Apply the CSS class
              />
              <div className="custom-arrows">
                <div className="arrow-left" onClick={handlePrevSlide}></div>
                <div className="arrow-right" onClick={handleNextSlide}></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  

export default SliderComponent;

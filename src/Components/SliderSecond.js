import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css"
const SliderSecond = () => {

    const slides = [
        {
          url:
            'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfOO_2CUNrBbD6ZqpzaczOc69ZiUc9lmGb-HDMYOCCamtFesr2mt66xYkOa7gj7rML3zHArPoJiRdm1uUX6qGQF6wDhw56bjCzWRrAPf4rOtoVXKzcTXNuph6N5IuG4iP035pbohFGrTQyhtKXDEL30d.jpg?r=409',
          title: 'Tech',
        },
        {
          url:
            'https://beebom.com/wp-content/uploads/2023/09/cyberpunk-2077-phantom-liberty-review-1.jpg?resize=353%2C243&quality=75&strip=all',
        },
        {
          url:
            'https://indiacsr.in/wp-content/uploads/2023/01/physical-fitness-wellness-and-lifestyle.png',
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
      <div className='mainSliderParent'>
       
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-item">
              <img
                src={slide.url}
                alt={slide.title}
                className="sliderClass1" // Apply the CSS class
              />
              <div className="custom-arrows1">
                <div className="arrow-left" onClick={handlePrevSlide}></div>
                <div className="arrow-right" onClick={handleNextSlide}></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
export default SliderSecond

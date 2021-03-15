import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../assets/styles/components/Carousel.scss';

const CarouselComponent = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props?.images.length - 1;

  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };
  return (
    <div className='carousel-img__container'>
      <FaArrowLeft className='arrow-icons left-arrow' onClick={prevSlide} />
      <FaArrowRight className='arrow-icons rigth-arrow' onClick={nextSlide} />
      {
        props?.images.map((img, index) => {
          if (index === current) {
            return (
              <img className='carousel-container__img' key={`${img?.technologie}${index}`} src={img?.src} alt={img?.altText} />
            );
          }
        })
      }
    </div>
  );
};


export default CarouselComponent;

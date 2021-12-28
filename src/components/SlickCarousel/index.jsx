import React from 'react';

import Slider from 'react-slick';

import NextArrow from './NexArrow';
import PrevArrow from './PrevArrow';
const Index = ({ items, children }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="itemSlider">
          <img className="imgSlider" src={item.image} alt={item.description} />
        </div>
      ))}
    </Slider>
  );
};

export default Index;

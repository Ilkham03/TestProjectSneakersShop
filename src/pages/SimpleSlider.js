import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './home.scss';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '50px', // задаем отступы вокруг картинок
};

const SimpleSlider = () => {
  return (
    <Slider {...settings}>
      <div className='simple__card__item'>
        <div className='img'>
          <img src='./img1.jpeg' alt='sneakers'></img>
        </div>

        <div className='simple__card__content'>
          <h4>Lorem ipsum dollar icon let A</h4>
          <span>$34.53</span>
          <div className='add'>
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      {/* Добавляем еще элементы слайдера */}
      <div className='simple__card__item'>
        <div className='img'>
          <img src='./img2.jpeg' alt='sneakers'></img>
        </div>

        <div className='simple__card__content'>
          <h4>Lorem ipsum dollar icon let B</h4>
          <span>$55.99</span>
          <div className='add'>
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      <div className='simple__card__item'>
        <div className='img'>
          <img src='./img3.jpeg' alt='sneakers'></img>
        </div>

        <div className='simple__card__content'>
          <h4>Lorem ipsum dollar icon let C</h4>
          <span>$27.45</span>
          <div className='add'>
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      <div className='simple__card__item'>
        <div className='img'>
          <img src='./img4.jpeg' alt='sneakers'></img>
        </div>

        <div className='simple__card__content'>
          <h4>Lorem ipsum dollar icon let D</h4>
          <span>$40.00</span>
          <div className='add'>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SimpleSlider;

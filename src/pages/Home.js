import React, { Component } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faArrowPointer} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import {faTty} from '@fortawesome/free-solid-svg-icons'
import {faMobileButton} from '@fortawesome/free-solid-svg-icons'


export default class Home extends Component {
  
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: {
        prevArrow: <div className="slick-arrow slick-prev">Previous</div>,
        nextArrow: <div className="slick-arrow slick-next">Next</div>
      }
    }

    return (
      <div>
        <div className='slider'>

          <Slider {...settings}>
                <div>
                <img className='slider__img'  src='./image1.jpeg' alt='sneakers'></img>

                  <h3 className='slider__name'>Nike</h3>
                </div>
                <div>
                  <img className='slider__img'  src='./image1.jpeg' alt='sneakers'></img>
                  <h3 className='slider__name'>Nike</h3> 
                </div>
                <div>
                  <img className='slider__img'  src='./image1.jpeg' alt='sneakers'></img> 
                  <h3 className='slider__name'>Nike</h3>
                </div>
                <div>
                  <img className='slider__img'  src='./image1.jpeg' alt='sneakers'></img>
                  <h3 className='slider__name'>Nike</h3> 
                </div>
                <div>
                  <img className='slider__img'  src='./image1.jpeg' alt='sneakers'></img> 
                  <h3 className='slider__name'>Nike</h3>
                </div>
          </Slider>

        </div>  
        
        <div className='bcc'>
          <div className='moving__content'>
            <div className='container'>
              <h1 className='moving__title'>Welcome to Moving</h1>
              <p className='moving__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore repellendus nam asperiores praesentium possimus voluptates! Assumenda ratione maiores deserunt ex temporibus dignissimos earum debitis beatae eveniet soluta consequatur accusamus quis doloribus doloremque, aspernatur suscipit modi incidunt eos autem obcaecati?</p>
          
            </div>
          </div>

          <div className='slider__simple'>
            <div className='container'>
                  <div className='slider__simple__content'>

                            <div className='simple__card__item'>
                                  <div className='slider__img__simple'>
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
                            <div className='simple__card__item'>
                                  <div className='slider__img__simple'>
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
                            <div className='simple__card__item'>
                                  <div className='slider__img__simple'>
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
                            <div className='simple__card__item'>
                                  <div className='slider__img__simple'>
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
                            <div className='simple__card__item'>
                                  <div className='slider__img__simple'>
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
                            
              </div>
            </div>
          </div>
        
          <div className='cupon'>
            <div className='container'>
              <div className='cupon__inner'>

                <div className='cuppon__left'>
                  <div className='left__block'>
                    <h4 className='left__block__suptitle' >click</h4> 
                    <h4 className='left__block__title'>this block</h4>
                    <FontAwesomeIcon className='pointer__icon' icon={faArrowPointer} />
                  </div>
                  <div className='rigth__block'>
                    get <span>$25.00 BACK</span>
                    <h3 className='cuppon__text'>after your first pursharse</h3>

                  </div>
                  
                </div>

                <div className='cuppon__rigth'>
                  <div className='cuppon__img'>
                    <img src='./image1.jpeg' alt='sneakers'></img> 
                  </div>

                  <div className='cuppon__rigth__block'>
                    <h3 className='rigth__block__title'>browse</h3>
                    <p>lorem lote. ipsum dollar dollar</p>
                    <h4 className='rigth__block__btn'>Shop now</h4>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='information'>
          <div className='container'>
            <div className='info__content'>

              <div className='about__block'>
                <div className='about__title'>
                  <FontAwesomeIcon icon={faAddressCard} />
                  <h3>About us</h3>
                </div>

                <div className='about__text'>
                  <p>Lorem ipsum dolor ventore repellendus  possimus  Assumenda ratione maiores deserunt ex temporibus dignissimos earum debitis beatae eveniet soluta consequatur accusamus quis doloribus doloremque, aspernatur suscipit modi incidunt eos autem obcaecati?</p>
                </div>
              </div>

              <div className='twitter__block'>
                <div className='about__title'>
                  <FontAwesomeIcon icon={faAddressCard} />
                  <h3>Twitter</h3>
                </div>

                <div className='twitter__content'>
                  <div className='twit'>
                    <FontAwesomeIcon className='twit__icon' icon={faQuoteLeft} />
                    <p>Lorem  doloremque, aspernatur suscipit modi incidunt
                      <a className='twit__link'>www.company.com</a>
                      <big>4 days ago</big>
                    </p>
                  </div>
                  <div className='twit'>
                    <FontAwesomeIcon className='twit__icon'  icon={faQuoteLeft} />
                    <p>Lorem  doloremque, aspernatur suscipit modi incidunt
                      <a className='twit__link'>  www.company.com  </a>
                      <big>4 days ago</big>
                    </p>
                  </div>
                </div>
              </div>


              <div className='contact__block'>
                <div className='about__title'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h3>contact us</h3>
                </div>

                <div className='contact__content'>
                  <div className='contact__number'>
                    <FontAwesomeIcon className='contact__icon' icon={faTty} />
                    <div className='number'>
                      <span>+808 0789 98 87</span>
                      <span>+808 0789 98 87</span>
                    </div>

                  </div>
                  <div className='contact__number'>
                    <FontAwesomeIcon className='contact__icon'  icon={faMobileButton} />
                    <div className='number'>
                      <span>+808 0789 98 87</span>
                      <span>+808 0789 98 87</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className='footer__top'>
            <div className='container'>
                <nav>
                  <ul>
                      <li><a href="#">About Us  |</a></li>
                      <li><a href="#">Contact  |</a></li>
                      <li><a href="#">Twitter  |</a></li>
                      <li><a href="#">Menu  |</a></li>
                      <li><a href="#">Product  |</a></li>
                  </ul>
                </nav>
              </div>

          </div>
        </footer>

        <footer>
          <div className='footer__bottom'>
            <div className='container'>

              <div className='footer__bottom__content'>
                <p> ©2023 IITU| This site made by Ilkham</p>
                <div className='footer__select'>
                  <select>
                    <option value="value1">Казахстан</option>
                    <option value="value2">Usa</option>
                  </select>
                  <select>
                    <option value="value1">English</option>
                    <option value="value2">Русский</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
        </footer>


      
      </div>
    )
  }
}



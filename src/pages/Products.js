import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faFileInvoice} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';



import styles from './product.scss';

import './product.scss'

export default class Products extends Component {
  render() {

    const products = [
      {
        id: 1,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 2,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 3,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 4,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 5,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 6,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 7,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 8,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 9,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 10,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 11,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      },
      {
        id: 12,
        imageSrc: './image1.jpeg',
        price: '$43.34',
        isFavorite: false,
        isInCart: false
      }
    ];

    return (
      <div className='wrapper'>
        <div className='container__product'>
          <h1 className='product__title'>Products Page</h1>

          <div className='product__content'>
            <div className='shoose__block'>
            <div className='toning__card__shoose'>
                  <div className='toning__card__item'>
                    <div className='img'>
                      <img src='./image1.jpeg' alt='sneakers'></img> 
                    </div>

                    <div className='card__content'>
                      <div className='cart__title'>
                        <span>$34</span>
                        <FontAwesomeIcon className='star__icon'  icon={faStar} />
                      </div>

                      <div className='dov__tovara'>
                        <span>+</span>
                        Добавить
                      </div>

                      <h3 className='tovar__name'>
                        Adidas
                      </h3>

                    </div>
                  </div>

                  <div className='toning__card__item'>
                    <div className='img'>
                      <img src='./image1.jpeg' alt='sneakers'></img> 
                    </div>

                    <div className='card__content'>
                      <div className='cart__title'>
                        <span>$34</span>
                        <FontAwesomeIcon  className='star__icon'  icon={faStar} />
                      </div>

                      <div className='dov__tovara'>
                        <span>+</span>
                        Добавить
                      </div>

                      <h3 className='tovar__name'>
                        Puma
                      </h3>

                    </div>
                  </div>

                  <div className='toning__card__item'>
                    <div className='img'>
                      <img src='./image1.jpeg' alt='sneakers'></img> 
                    </div>

                    <div className='card__content'>
                      <div className='cart__title'>
                        <span>$34</span>
                        <FontAwesomeIcon className='star__icon' icon={faStar} />
                      </div>

                      <div className='dov__tovara'>
                        <span>+</span>
                        Добавить
                      </div>

                      <h3 className='tovar__name'>
                        Nike
                      </h3>

                    </div>
                  </div>
              </div>

              <div className='page__block'>
                <div className='page__content'> 
                  <div className='icon'>
                    <FontAwesomeIcon  icon={faFileInvoice} />
                  </div>
                  <div className='page__list'>

                    <div className='page__language'>
                      <h6 className='page__text'>Выберити язык</h6>
                      <select>
                        <option value="option1">English</option>
                        <option value="option1">Русский</option>
                        <option value="option1">English</option>
                      </select>
                    </div>

                    <div className='page__language'>
                      <h6 className='page__text'>Kоличество обуви</h6>
                      <select>
                        <option value="option1">1</option>
                        <option value="option1">2</option>
                        <option value="option1">3</option>
                        <option value="option1">4</option>
                        <option value="option1">5</option>
                      </select>
                    </div>
                  
                  </div>

                  <div className='page__num'>
                      <h5>Page 4</h5> <span>&gt;</span>

                  </div>
                </div>

              </div> 

              <div className='catalog__sneakers'>
              {products.map((product) => (
                <div className='catalog__item' key={product.id}>
                  <div className='catalog__content'>
                    <div className='catalog__img'>
                      <img src={product.imageSrc} alt='sneakers'></img> 
                    </div>

                    <div className='star'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className='catalog__pay'>
                      <span>{product.price}</span>
                      <button className='btn__card'>Add to cart</button>
                    </div>
                  </div>
                  <ul className='add__list'>
                    <FontAwesomeIcon icon={faStar} />
                    <li>Add to favorites</li>
                  </ul>
                  <ul className='add__list'>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    <li>Add to cart</li>
                  </ul>
                </div>
              ))}

              </div>
            </div>

            <sitebar className='sitebar'>
                <div className='sitebar__content'>

                  <div className='shop__by'>
                    <h3>Shop By</h3>
                    <h6>Shopping </h6>

                    <h5>Phone</h5>
                    <div className='phone'>
                      <span>8-345-5345-634</span>
                      <span>8-345-5345-634</span>
                    </div>
                    
                    <h5>Country</h5>
                    <div className='phone'>
                      <span>USA</span>
                      <span>Казахстан</span>
                    </div>

                  </div>

                  <div className='compair__product'>
                    <h3>Compair products</h3>
                    <ul className='list__compair'>
                      <li>
                        <input className='input' type="checkbox"></input>
                        Adidas
                      </li>
                      <li><input type="checkbox"></input>Puma</li>
                      <li><input type="checkbox"></input>Nike</li>
                    </ul>

                    <div className='button__block'>
                      <a className='btn--li'>Click</a>
                      <button className='com__btn'>Compare</button>
                    </div>
                    
                  </div>

                  <div className='wishlist'>
                    <div className='wishlist__content'>

                      <div className='wishlist__item'>
                        <img className='img__wish' src='./image1.jpeg' alt='sneakers'></img>

                        <div className='wish__text'>
                          <h3>Nike</h3>
                          <h4>sneakers</h4>
                          <span>$34</span>
                          <button>Add to Cart</button>
                        </div>

                        <div>x</div>


                      </div>

                      <div className='wishlist__item'>
                        <img className='img__wish' src='./image1.jpeg' alt='sneakers'></img>

                        <div className='wish__text'>
                          <h3>Nike</h3>
                          <h4>sneakers</h4>
                          <span>$34</span>
                          <button>Add to Cart</button>
                        </div>

                        <div>x</div>


                      </div>

                    </div>
                  </div>

                  <div className='popular__tags'>
                    <div className='wishlist__content'>
                      <h3  className='popular__tags__title'>Popular Tags</h3>
                      <div className='tags__text'>
                        <p>Line</p>
                        <big>A Brithing App </big>
                        <small>approach</small>
                        <p>custom</p>
                      </div>
                    </div>
                  </div>

                  <div className='cashback'>
                    <div className='cashback__content'>
                      <h4>Get</h4>
                      <h2>$25.00 BACK</h2>
                      <h5>lorem ipsum dollar ipsum dollar</h5>

                    </div>
                  </div>

                  <div className='community'>
                    <div className='community__content'>
                      <h2 className='community__title'>Community Pool</h2>
                      <p>Lorem ipsum dollar jasf  ipsum dollar jasf Lorem ipsum dollar jasf </p>

                      <ul>
                        <li>
                          <input type='checkbox'></input>
                          <p>Lorem ipsum dollar</p>
                        </li>
                        <li>
                          <input type='checkbox'></input>
                          <p>Lorem ipsum dollar</p>
                        </li>
                        <li>
                          <input type='checkbox'></input>
                          <p>Lorem ipsum dollar</p>
                        </li>
                        <li>
                          <input type='checkbox'></input>
                          <p>Lorem ipsum dollar</p>
                        </li>
                        <li>
                          <input type='checkbox'></input>
                          <p>Lorem ipsum dollar</p>
                        </li>
                        <li>
                          <input type='checkbox'></input>
                          <p>Lorem ipsum dollar</p>
                        </li>
                      </ul>

                      <button className='view__btn'>View</button>
                    </div>
                  </div>

                </div>
            </sitebar> 
            

          </div>
        
        </div>
      </div>
      
    )
  }
}
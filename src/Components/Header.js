import React, { Component } from 'react'
import './header.scss';
import './nav.scss';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { faFileInvoice} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


import { Link } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div className='container'>
          
            <div className='header__inner'>

              <div className='header__top'>
              <div className='header__logo'>
                    <h1 className='header__title'>Moving  </h1>
                    <h3 className='header__suptitle'>lorem ipsum dollar let</h3>
                </div>

                <div className='header__content'>

                
                  <div className='header__exit'>
                      <div className='header__item'>
                      <FontAwesomeIcon icon={faUser} />
                        <span>my account</span> 
                      </div>
                      <div className='header__item'>
                        <FontAwesomeIcon icon={faFileInvoice} />
                        <span>my window</span> 
                        
                      </div>
                      <div className='header__item'>
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <span>my account</span> 
                        
                      </div>

                      <Link to="/login">
                        <div className='header__item'>
                            <FontAwesomeIcon icon={faRightToBracket} />
                            login                        
                        </div>  
                    </Link> 

                        

                      
                  </div>

                  <div className='search__text'>welcome, admin admin</div> 

                  <div className='search__cart__block'>
                  
                    <form className='search__block'>
                      <input className='search' placeholder='search'></input>
                      <FontAwesomeIcon className='search__icon' icon={faMagnifyingGlass} />
                    </form>
                    <div className='cart__block'>
                      <span className='cart__count'>0</span>
                      <FontAwesomeIcon className='cart__icon' icon={faShoppingCart} />
                      <p className='cart__text'>My cart</p>
                    </div>

                  </div>


                </div>
              </div>

              <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item"><Link className='nav__link' to="/home">Home</Link></li>
                
                <li className="nav__item"><Link className='nav__link' to="/products">Products</Link></li>

                <li className="nav__item">Woman Shoose</li>
                <li className="nav__item">Men Shoose</li>
                <li className="nav__item">Sale</li>

              </ul>
              </nav>
                

            </div>
          </div>
        </header>
      </div>
    )
  }
}

import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import alexa from '../images/alexa-4.jpg'
import alexa2 from '../images/alexa-3.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

const ProductCard1 = (props) => {
  const {grid} = props
    let location = useLocation();
  return (
    <>
            <div 
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link to=':id' className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                    <img src={wish}  alt='wishlist' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src={alexa} className='img-fluid' alt='product image' />
                    <img src={alexa2} className='img-fluid' alt='product image' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                       Nice and Clear sound Quality with extraordinary properties
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        Lasy to do work, On shows. use the alexa whith good, clear and loud voice work is done just by saying...
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <Link>
                            <img src={addcart} alt='addcart' />
                        </Link>
                        <Link>
                            <img src={view} alt='view' />
                        </Link>
                        <Link>
                            <img src={prodcompare} alt='prodcompare' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
  );
}

export default ProductCard1;

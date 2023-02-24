import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
import wishlist from '../images/wishlist.svg'
import refridge from '../images/refridge-3.jpeg'
import refridge2 from '../images/refridge.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

const ProductCard2 = (props) => {
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
                    <img src={refridge} className='img-fluid' alt='product image' />
                    <img src={refridge2} className='img-fluid' alt='product image' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                         Colorfull watch for kids and smartwatch for adults with different features... </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <Link>
                            <img src={addcart} alt='addcart' />
                        </Link>
                        <Link>
                            <img src={view} alt='viewt' />
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

export default ProductCard2;

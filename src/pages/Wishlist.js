import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title='Wishlist' />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch-4.jpg'
                                    className=' img-fluid w-100'
                                     alt='watch'/>
                                </div>
                                <div className='py-3 px-3'>
                                <h5 className='title'>Havles Rose Gold Watch 42mm/44mm</h5>
                                <h6 className='price'>$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/game-2.jpg'
                                    className=' img-fluid w-100'
                                     alt='watch'/>
                                </div>
                                <div className='py-3 px-3'>
                                <h5 className='title'>Gaming remote with wireless connection</h5>
                                <h6 className='price'>$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/headphone-5.jpg'
                                    className=' img-fluid w-100'
                                     alt='watch'/>
                                </div>
                                <div className='py-3 px-3'>
                                <h5 className='title'>kids headphones bulk 10 pack multi-colored for students</h5>
                                <h6 className='price'>$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/laptop.jpg'
                                    className=' img-fluid w-100'
                                     alt='watch'/>
                                </div>
                                <div className='py-3 px-3'>
                                <h5 className='title'>Asus Brand New laptop with 4 GB RAM, 1TB Storage</h5>
                                <h6 className='price'>$ 500</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;

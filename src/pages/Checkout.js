import React from 'react';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'

const Checkout = () => {
    return (
        <>
            <div className='checkout-wrapper py-5 home-wrapper-2 '>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Devloper</h3>
                                <nav 
                                style={{"--bs-breadcrumb-divider": '>' }}aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                        <Link to='/cart' className='text-dark' href="#">Cart</Link>
                                        </li>
                                        &nbsp;/
                                        <li 
                                        className="breadcrumb-item active" aria-current="page active">Information</li>
                                        &nbsp;/
                                        <li className="breadcrumb-item active">
                                        Shipping
                                        </li>
                                        &nbsp;/
                                        <li 
                                        className="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className='title'>Contact Information</h4>
                                <p className='user-details'>
                                    Varshini G (varshinigolai123@gmail.com) </p>
                                <form 
                                action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='w-100'>
                                        <select 
                                        name='' className='from-control form-select' 
                                        id=''>
                                        </select>
                                        <option value='' selected disabled>Select Country</option>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input 
                                        type='text'
                                        placeholder='First Name' 
                                        className='form-control'></input>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input 
                                        type='text'
                                        placeholder='Last Name'  className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <input 
                                        type='text'
                                        placeholder='Address'  className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <input 
                                        type='text'
                                        placeholder='Appartment, Suite ,etc'  
                                        className='form-control'></input>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input 
                                        type='text'
                                        placeholder='City'
                                         className='form-control'></input>
                                    </div>
                                    <div className='flex-grow-1'>
                                    <select 
                                        name='' className='from-control form-select' 
                                        id=''>
                                        </select>
                                        <option vlaue='' selected disabled>Select State</option>
                                    </div>
                                    <div className='flex-grow-1'>
                                    <input 
                                        type='text' 
                                        placeholder='zipcode'
                                        className='form-control'></input>
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex  justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark'>
                                                <BiArrowBack className='me-2' />Return to cart</Link>
                                            <Link to='/cart' className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;

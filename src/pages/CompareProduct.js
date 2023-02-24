import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Meta from '../components/Meta';

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title='Compare Product' />
      <div className='compare-product-wrapperm py-5 home-wrapper-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='compare-product-card position-relative'>
                <img 
                src='images/cross.svg'
                alt='cross' 
                className='position-absolute cross img-fluid'/>
                <div className='product-card-image'>
                  <img src='images/tab-1.jpg' alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Honor t1 7.0 1 Gb Ram Rom & Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price mb-3 mt-3'>$ 100.00</h6>
                  <div>
                    <div className='product-detail'>
                      <h5>Brand:</h5>
                      <p>Honor</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Type:</h5>
                      <p>Tablet Computer</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Avaliablity:</h5>
                      <p>InStock</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Color</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='compare-product-card position-relative'>
                <img 
                src='images/cross.svg'
                alt='cross' 
                className='position-absolute cross img-fluid'/>
                <div className='product-card-image'>
                  <img src='images/watch-4.jpg' alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Havles Rose Gold Watch 42mm/44mm
                  </h5>
                  <h6 className='price mb-3 mt-3'>$ 100.00</h6>
                  <div>
                    <div className='product-detail'>
                      <h5>Brand:</h5>
                      <p>Halves</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Type:</h5>
                      <p>watch</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Avaliablity:</h5>
                      <p>InStock</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Color</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>M</p>
                        <p>XL</p>
                        <p>XXL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='compare-product-card position-relative'>
                <img 
                src='images/cross.svg'
                alt='cross' 
                className='position-absolute cross img-fluid'/>
                <div className='product-card-image'>
                  <img src='images/laptop-01.jpg' alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Asus Brand New laptop with 4 GB RAM, 1TB Storage 
                  </h5>
                  <h6 className='price mb-3 mt-3'>$ 100.00</h6>
                  <div>
                    <div className='product-detail'>
                      <h5>Brand:</h5>
                      <p>Asus</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Type:</h5>
                      <p>Laptop</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Avaliablity:</h5>
                      <p>InStock</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Color</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='compare-product-card position-relative'>
                <img 
                src='images/cross.svg'
                alt='cross' 
                className='position-absolute cross img-fluid'/>
                <div className='product-card-image'>
                  <img src='images/alexa-3.jpg' alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Beoplay A1 Portav=ble Bluetooth Speaker with microphone
                  </h5>
                  <h6 className='price mb-3 mt-3'>$ 100.00</h6>
                  <div>
                    <div className='product-detail'>
                      <h5>Brand:</h5>
                      <p>Bajaj</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Type:</h5>
                      <p>Speaker</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Avaliablity:</h5>
                      <p>InStock</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Color</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5>Size:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;


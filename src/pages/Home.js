import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import ProductCard1 from '../components/ProductCard1';
import ProductCard2 from '../components/ProductCard2';
import ProductCard3 from '../components/ProductCard3';
import BlogCard3 from '../components/BlogCard3';
import BlogCard1 from '../components/BlogCard1';
import BlogCard2 from '../components/BlogCard2';
import SpecialProduct3 from '../components/SpecialProduct3';
import SpecialProduct2 from '../components/SpecialProduct2';
import SpecialProduct1 from '../components/SpecialProduct1';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner p-3 position-realative'>
                <img
                  src="images/main-banner-1.jpg"
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHANGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.oo or $41.62/mo</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-01.jpg'
                    className='img-fluid rounded-2'
                    alt='small-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $999.00 or <br />$41.62/mo</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-02.jpg'
                    className='img-fluid rounded-2'
                    alt='small-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>From $999.oo or <br />$41.62/mo</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-03.jpg'
                    className='img-fluid rounded-2'
                    alt='small-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>From $999.oo or <br /> $41.62/mo</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg'
                    className='img-fluid rounded-2'
                    alt='small-banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>From $999.oo or <br /> $41.62/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Supries Offers</h6>
                    <p className='mb-0'>Saves upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an export</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl '>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='cameras' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/game-1.jpg' alt='cameras' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='smart tv' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Head Phones</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='smart hwatches' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/alexa-3.jpg' alt='cameras' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Watchs</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/watch-8.jpg' alt='cameras' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Phones</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/phone-8.jpg' alt='smart tv' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Electronics</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/washing.jpg' alt='smart hwatches' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='feature-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collections</h3>
            </div>
            <ProductCard />
            <ProductCard1 />
            <ProductCard2 />
            <ProductCard3 />
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/watch-6.jpg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>smart Watch Series 7</h6>
                  <p>From $399 or <br />$16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/laptop-5.jpg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>STUDIO DISPLAY</h5>
                  <h6>600 nits of <br />brightness</h6>
                  <p>27-inch 5k retained display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/phone-4.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>SmartPhone</h5>
                  <h6>Smartphone <br />13Pro.</h6>
                  <p>From $999.00 or <br />$14.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/alexa-2.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>HOME SPEAKER</h5>
                  <h6>Room-filling Sound.</h6>
                  <p>From $699 or <br />$116.58/mo. for 12mo*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct1 />
            <SpecialProduct2 />
            <SpecialProduct3 />
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'> Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard1 />
            <ProductCard2 />
            <ProductCard3 />
            </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>

          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard3 />
            </div>
            <div className='col-3'>
              <BlogCard2 />
            </div>
            <div className='col-3'>
              <BlogCard1 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

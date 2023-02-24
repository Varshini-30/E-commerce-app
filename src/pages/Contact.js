import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact us"} />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61092.319279994204!2d75.66693015698185!3d16.862535321334715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6ff44d23057fd%3A0xd089a6ffa44316f1!2sKarnataka%20586103!5e0!3m2!1sen!2sin!4v1676958297385!5m2!1sen!2sin"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact </h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input
                        type="text"
                        className='form-control'
                        placeholder='Name' />
                    </div>
                    <div>
                      <input
                        type="email"
                        className='form-control'
                        placeholder='Email' />
                    </div>
                    <div>
                      <input
                        type="telS"
                        className='form-control'
                        placeholder='Mobile No' />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className='w-100 form-control'
                        cols='30'
                        rows='4'
                        placeholder='Comments'>
                      </textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>
                    Get in Touch with Us
                  </h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 lign-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Near RailwayStation behind maduvan Hotel, Vijayapura, Karnatak  </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 lign-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:+91 7689230172'>+91 7689230172</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 lign-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto:navdeep30@mail.com'>navdeep30@mail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 lign-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday - Friday 10Am - 8PM</p>
                      </li>
                    </ul>
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

export default Contact;

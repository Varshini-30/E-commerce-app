import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom';
import {HiArrowNarrowLeft} from 'react-icons/hi'
import blog from '../images/blog-1.jpg'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title='Dynamic Blog Name' />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                    <HiArrowNarrowLeft  className='fs-5'/>
                                     Go back to Blogs</Link>
                                <h3 className='title'>
                                    A Beautiful Sunday Morning Reneissance
                                </h3>
                                <img src={blog} className='img-fluid w-100 my-4' alt='blog'/>
                                <p>
                                    You're only as good as your last collection, which is an enormous pressure. I think there is somthing about luxury-- it's not something people need., but it's what they want. It really pulls at their heart. I have a fantastic relationship with money. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleBlog;

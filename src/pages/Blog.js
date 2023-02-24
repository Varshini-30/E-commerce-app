import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard'
import BlogCard1 from '../components/BlogCard1';
import BlogCard2 from '../components/BlogCard2';
import BlogCard3 from '../components/BlogCard3';

const Blog = () => {
    return (
        <>
            <Meta title={"Blog"} />
            <BreadCrumb title='blogs' />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                        <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Find By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='row'>
                                <div className='col-6 mb-3'>
                                <BlogCard />
                                </div>
                                <div className='col-6 mb-3'>
                                <BlogCard1 />
                                </div>
                                <div className='col-6 mb-3'>
                                <BlogCard2 />
                                </div>
                                <div className='col-6 mb-3'>
                                <BlogCard3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;

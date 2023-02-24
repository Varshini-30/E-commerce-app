import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const TermsAndCondition = () => {
    return (
        <>
            <Meta title={"Terms And Conditon"} />
            <BreadCrumb title='Terms And Conditon' />
            <section className='policy-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-12'>
                            <div className='policy'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TermsAndCondition;

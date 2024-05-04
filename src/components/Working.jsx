import React from 'react'
import Comnheading from '../common/Comnheading'
import idea from '../assets/images/svg/idea.svg'
import plan from '../assets/images/svg/plan.svg'
import triangle from '../assets/images/svg/triangle.svg'
import develop from '../assets/images/svg/develop.svg'
import launch from '../assets/images/svg/launch.svg'


function Working() {
    return (
        <>
            <div className="container-2 mt-63">
                <div className="d-flex align-items-center flex-column">
                    <Comnheading text="WORKING PROCESS" />
                    <h2 className=' ff-urbanist fw-bold text-40 lh-43 mb-0 mt-3'>How does we works</h2>
                </div>

                <div className="d-flex mt-98 justify-content-around justify-content-lg-between flex-wrap">
                    <div className="max-w-203">
                        <div className="outer-circle d-flex justify-content-center align-items-center">
                            <div className="inner-circle d-flex justify-content-center align-items-center">
                                <img src={idea} alt="idea" />
                            </div>
                        </div>
                        <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 mt-34'>Idea</p>
                        <p className=' ff-urbanist fw-normal text-16 lh-23 mb-0 mt-2'>Out team understand the product you want to create
                        </p>
                    </div>
                    <div className=" max-w-203  max-w-lg-157 mt-48">
                        <div className="outer-circle d-flex justify-content-center align-items-center">
                            <div className="inner-circle d-flex justify-content-center align-items-center">
                                <img src={plan} alt="plan" />
                            </div>
                        </div>
                        <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 mt-34'>Plan</p>
                        <p className=' ff-urbanist fw-normal text-16 lh-23 mb-0 mt-2'>Our experts create a roadmap for the development product
                        </p>
                    </div>
                    <div className=" max-w-203  max-w-lg-193 margin-top-48">
                        <div className="outer-circle d-flex justify-content-center align-items-center">
                            <div className="inner-circle d-flex justify-content-center align-items-center">
                                <img src={triangle} alt="triangle" />
                            </div>
                        </div>
                        <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 mt-34'>Design</p>
                        <p className=' ff-urbanist fw-normal text-16 lh-23 mb-0 mt-2'>Our designers work on the user experience and user interface
                        </p>
                    </div>
                    <div className="max-w-203 margin-48">
                        <div className="outer-circle d-flex justify-content-center align-items-center">
                            <div className="inner-circle d-flex justify-content-center align-items-center">
                                <img src={develop} alt="develop" />
                            </div>
                        </div>
                        <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 mt-34'>Develop</p>
                        <p className=' ff-urbanist fw-normal text-16 lh-23 mb-0 mt-2'>Our engineers code, test and certify the product
                        </p>
                    </div>
                    <div className="max-w-203 mt-5 mt-lg-0">
                        <div className="outer-circle d-flex justify-content-center align-items-center">
                            <div className="inner-circle d-flex justify-content-center align-items-center">
                                <img src={launch} alt="launch" />
                            </div>
                        </div>
                        <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 mt-34'>Launch</p>
                        <p className=' ff-urbanist fw-normal text-16 lh-23 mb-0 mt-2'>Our engineers bring the product to the market
                        </p>
                    </div>
                </div>
                <div className="line-trnsfrm d-none d-xl-block">
                    <div className="ylw-line"></div>
                </div>
            </div>
        </>
    )
}

export default Working
import React from 'react'
import bulb from '../assets/images/svg/bulb.svg'
import design from '../assets/images/svg/design.svg'
import enger from '../assets/images/svg/enger.svg'

function Services() {
    return (
        <>
            <div className="bg-service">
                <div className="container-2 py-services">
                    <p className=' mb-0'>SERVICES</p>
                    <h2 className=' ff-urbanist fw-bold text-40 lh-43 mb-0 max-w-526 mt-21'>We run all kinds of services in <span className=' color-yellow'>form of software</span></h2>
                    <p className=' ff-urbanist fw-normal text-20 lh-26 text-black op-70 mt-2'>We build great software, from ideas to market.
                    </p>
                    <div className="d-flex gap-20 mt-52">
                        <div className="servics-box d-flex justify-content-center">
                            <div className="">
                                <div className="d-flex justify-content-center"><img src={bulb} alt="bulb" /></div>
                                <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 text-center mt-27'>Product Strategy</p>
                                <p className=' ff-urbanist fw-normal text-20 lh-26 text-center max-w-292 mt-16'>Product Vision, Value Proposition and Roadmap
                                </p>
                            </div>
                        </div>
                        <div className="servics-box d-flex justify-content-center">
                            <div className="">
                                <div className="d-flex justify-content-center"><img src={design} alt="bulb" /></div>
                                <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 text-center mt-27'>Design
                                </p>
                                <p className=' ff-urbanist fw-normal text-20 lh-26 text-center max-w-292 mt-16'>Brand Identity, User Experience and User Interface
                                </p>
                            </div>
                        </div>
                        <div className="servics-box d-flex justify-content-center">
                            <div className="">
                                <div className="d-flex justify-content-center"><img src={enger} alt="bulb" /></div>
                                <p className=' ff-urbanist fw-bold text-24 lh-264 mb-0 text-center mt-27'>Engineering</p>
                                <p className=' ff-urbanist fw-normal text-20 lh-26 text-center max-w-214 mt-16'>Software Development and Deployments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
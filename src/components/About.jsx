import React from "react";
import about_sec from "../assets/images/png/about.png";

function About() {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row py_47">
            <div className="col-md-6  d-flex align-items-center  align-items-lg-start">
              <div className="">
                <img
                  className=" w-100 max_w_463"
                  src={about_sec}
                  alt="about_sec"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-end pt-4  pt-md-0">
              <div className="">
                <h6 className=" mb-0  ff-urbanist fw-normal text-20 lh-21 text-black">
                  ABOUT US
                </h6>
                <h3 className=" mb-0 ff-urbanist fw-bold text-40 lh-43 text-black mt_9 max_w_519_heading">
                  We build digital products, from{" "}
                  <span className=" color-yellow ">idea to market</span>
                </h3>
                <p className=" mb-0 ff-urbanist  fw-normal text-20 lh-26  text-black op-70 mt-md-2 mt-lg-4 mt-sm-3 mt-2">
                  We build digital products, from idea to market
                </p>
                <p className=" mb-0 ff-urbanist  mx_w_521 fw-normal text-20 lh-26  text-black op-70 mt-sm-2 mt-md-1 mt-lg-2 mt-1">
                  Since 2012, Abacus has been on a mission to transform people's
                  ideas into digital products.
                </p>
                <p className=" mb-0 ff-urbanist  mx_w_521 fw-normal text-20 lh-26  text-black op-70 mt-sm-2 mt-md-1 mt-lg-2 mt-1">
                  By combining strategy, design and engineering, we provide a
                  360 degree approach to digital product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

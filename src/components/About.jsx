import React from "react";
import about_sec from "../assets/images/png/about.png";

function About() {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="row py_47">
            <div className="col-6">
              <img
                className=" w-100 max_w_463"
                src={about_sec}
                alt="about_sec"
              />
            </div>
            <div className="col-6">
              <h6 className=" mb-0  ff-urbanist fw-normal text-20 lh-21 text-black">
                ABOUT US
              </h6>
              <h3 className=" mb-0 ff-urbanist fw-bold text-40 lh-43 text-black max_w_519_heading">
                We build digital products, from{" "}
                <span className=" color-yellow mt-21">idea to market</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

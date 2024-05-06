import React, { useRef } from "react";
import Comnheading from "../common/Comnheading";
import leftarrow from "../assets/images/svg/left-arrow.svg";
import rightarrow from "../assets/images/svg/right-arrow.svg";
import dotts from "../assets/images/svg/top-dots.svg";
import Slider from "react-slick";

function Testinomial() {
  const slider = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-2 pt-testinomial" id="testinomial">
        <Comnheading text="TESTIMONIALS" />
        <div className="row">
          <div className="col-6 border-right2">
            <p className=" ff-urbanist fw-bold text-40 lh-43 mb-0 mt-3">
              Clients feedback
            </p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="d-flex gap-3">
              <div
                onClick={() => slider?.current?.slickPrev()}
                className="swiper-arrow d-flex justify-content-center align-items-center cursor_pointer prev"
              >
                <img src={leftarrow} alt="leftarrow" />
              </div>
              <div
                onClick={() => slider?.current?.slickNext()}
                className="swiper-arrow d-flex justify-content-center align-items-center cursor_pointer next"
              >
                <img src={rightarrow} alt="rightarrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-top"></div>
        <div className="row">
          <Slider ref={slider} {...settings}>
            <div className="col-6 border-right">
              <div className="d-flex gap-39 mt-49">
                <div className="slider-circle d-flex justify-content-center align-items-center position-relative">
                  <p className=" mb-0 ff-urbanist fw-bold text-42 lh-69">W</p>
                  <div className="position-absolute dots-pos">
                    <div className="top-circle d-flex justify-content-center align-items-center">
                      <img src={dotts} alt="dotts" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className=" ff-urbanist fw-normal text-16 lh-25 mb-0 max-w-359">
                    Curabitur bibendum a lacus eu luctus. Morbi sodales at diam
                    vel pretium. Curabitur fermentum erat a eleifend pharetra.
                    Suspendisse facilisis sagittis nibh vitae
                  </p>
                  <div className="d-flex align-items-baseline gap-2">
                    <div className="text-line mt-34"></div>
                    <div className="">
                      <p className=" ff-urbanist fw-bold text-16 lh-25 mb-0">
                        Wade Warren
                      </p>
                      <p className=" ff-ff-urbanist fw-normal text-16 lh-25 mb-0 op-70">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-39 mt-49 pl-21">
                <div className="slider-circle d-flex justify-content-center align-items-center position-relative">
                  <p className=" mb-0 ff-urbanist fw-bold text-42 lh-69">A</p>
                  <div className="position-absolute dots-pos">
                    <div className="top-circle d-flex justify-content-center align-items-center">
                      <img src={dotts} alt="dotts" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className=" ff-urbanist fw-normal text-16 lh-25 mb-0 max-w-359">
                    Curabitur bibendum a lacus eu luctus. Morbi sodales at diam
                    vel pretium. Curabitur fermentum erat a eleifend pharetra.
                    Suspendisse facilisis sagittis nibh vitae
                  </p>
                  <div className="d-flex align-items-baseline gap-2">
                    <div className="text-line mt-34"></div>
                    <div className="">
                      <p className=" ff-urbanist fw-bold text-16 lh-25 mb-0">
                        Albert Flores
                      </p>
                      <p className=" ff-ff-urbanist fw-normal text-16 lh-25 mb-0 op-70">
                        Dog Trainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testinomial;

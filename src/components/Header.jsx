import React from "react";
import Nav from "./Nav";
import Commonbtn from "../common/Commonbtn";
import header_sec from "../assets/images/png/abacus_header.webp";
import MyVerticallyCenteredModal from "../common/MyVerticallyCenteredModal";
import Button from "react-bootstrap/Button";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="header_bg_img " id="home">
        <Nav />
        <div className="container ">
          <div className="row pt_48">
            <div className="col-md-6 col-12">
              <h2 className=" mb-0 ff-urbanist fw-bold  text-64 lh-69  text-white">
                We build software with{" "}
                <span className=" color-yellow">your business</span> in mind.
              </h2>
              <p className=" mb-0 ff-poppins  fw-normal text-20  lh-26 color-grey mt_11">
                We are a software development company leading the digital
                transformation of our worldwide clients through custom software
                development services.
              </p>
              <Button
                className="mb-0 mt_26 ff-urbanist fw-bold text-16 lh-19 text-white text-uppercase cmn_btn_2"
                onClick={() => setModalShow(true)}
              >
                GET STARTED
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="col-md-6 col-12 pt-5 pt-sm-4 pt-md-0 d-flex justify-content-md-end justify-content-center">
              <div className="">
                <img
                  className=" w-100 max_w_396"
                  src={header_sec}
                  alt="header_sec"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

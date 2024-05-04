import React, { useState } from "react";
import navlogo from "../assets/images/svg/Navlogo.svg";
import Commonbtn from "../common/Commonbtn";

function Nav() {
  const [show, setfirst] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <nav className=" nav_box d-flex align-items-center">
        <div className="container">
          <div className="  d-flex align-items-center justify-content-between">
            <img className=" cursor_pointer" src={navlogo} alt="navlogo" />
            <ul
              className={` ${
                show ? "end-0" : "right_100"
              } mb-0 d-flex ff-urbanist mobile-view  fw-normal text-16  gap-4  lh-19 `}
            >
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" text-black"
                  href="#home"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" text-black"
                  href="#about"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" text-black"
                  href="#servies"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" text-black"
                  href="#process"
                >
                  PROCESS
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setfirst(!show);
                  }}
                  className=" text-black"
                  href="#testinomial"
                >
                  TESTIMONIALS
                </a>
              </li>
              <li className=" d-sm-none">
                {" "}
                <Commonbtn text="GET STARTED" />
              </li>
            </ul>
            <div className=" d-flex align-items-center gap-5">
              <div className="  d-none d-sm-block ">
                <Commonbtn text="GET STARTED" />
              </div>
              <div
                onClick={() => {
                  setfirst(!show);
                }}
                class="menu d-block d-lg-none z_9  "
              >
                <span></span>
                <span class="my-2"></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

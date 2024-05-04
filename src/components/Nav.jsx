import React from "react";
import navlogo from "../assets/images/svg/Navlogo.svg";
import Commonbtn from "../common/Commonbtn";

function Nav() {
  return (
    <>
      <nav className=" nav_box d-flex align-items-center">
        <div className="container">
          <div className="  d-flex align-items-center justify-content-between">
            <img className=" cursor_pointer" src={navlogo} alt="navlogo" />
            <ul className=" mb-0 d-flex ff-urbanist fw-normal text-16  gap-4  lh-19 ">
              <li>
                <a className=" text-black" href="#home">
                  HOME
                </a>
              </li>
              <li>
                <a className=" text-black" href="#about">
                  ABOUT US
                </a>
              </li>
              <li>
                <a className=" text-black" href="#servies">
                  SERVICES
                </a>
              </li>
              <li>
                <a className=" text-black" href="#process">
                  PROCESS
                </a>
              </li>
              <li>
                <a className=" text-black" href="#testinomial">
                  TESTIMONIALS
                </a>
              </li>
            </ul>
            <Commonbtn text="GET STARTED" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

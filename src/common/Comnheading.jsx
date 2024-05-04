import React from "react";
import commonsvg from "../assets/images/svg/common_heading_svg.svg";

function Comnheading(props) {
  return (
    <div className=" d-flex align-items-center gap-2">
      <img src={commonsvg} alt="commonsvg" />
      <h2 className=" mb-0 ff-urbanist fw-normal text-20  lh-21 text-black">
        {props.text}
      </h2>
    </div>
  );
}

export default Comnheading;

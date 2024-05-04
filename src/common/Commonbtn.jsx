import React from "react";

function Commonbtn(props) {
  return (
    <button className=" mb-0  ff-urbanist fw-bold text-16 lh-19 text-white text-uppercase cmn_btn">
      {props.text}
    </button>
  );
}

export default Commonbtn;

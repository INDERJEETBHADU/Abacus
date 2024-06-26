import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Commonbtn from "./Commonbtn";

function Comnform() {
  const [inputvalue, setValue] = useState({
    first: "",
    second: "",
    third: "",
    four: "",
    five: "",
  });

  const addvalue = (e) => {
    setValue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  function fromsubmit(e) {
    e.preventDefault();
    setValue({ first: "", second: "", third: "", four: "", five: "" });
    
    Swal.fire({
      title: "Done!",
      text: "Your Mail Has Been Sended!",
      icon: "success",
    });

    const serviceID = "service_cown3sg";
    const templateID = "template_ww98bbd";
    const userID = "_1XTPe6CahrlkVPya";
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
      },
      (error) => {
        console.error("Email failed to send!", error.text);
      }
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="heaving_card">
        <form onSubmit={fromsubmit}>
          <div className="  d-flex flex-sm-row flex-column gap-3">
            <div className=" input_parent">
              <label className=" text-black mb-0 ff-urbanist fw-normal text-16 lh-25  ">
                Name*
              </label>
              <input
                className=" name_input"
                required
                type="text"
                value={inputvalue.first}
                name="first"
                onChange={addvalue}
              />
            </div>
            <div className=" input_parent">
              <label className=" text-black  ff-urbanist fw-normal text-16 lh-25  ">
                Email address*
              </label>
              <input
                className=" name_input"
                required
                type="email"
                value={inputvalue.second}
                name="second"
                onChange={addvalue}
              />
            </div>
          </div>
          <div className="  d-flex flex-sm-row flex-column gap-3">
            <div className=" input_parent">
              <label className=" text-black ff-urbanist fw-normal text-16 lh-25  ">
                Phone number
              </label>
              <input
                className=" name_input"
                required
                type="number"
                value={inputvalue.third}
                name="third"
                onChange={addvalue}
              />
            </div>{" "}
            <div className=" input_parent">
              <label className=" text-black ff-urbanist fw-normal text-16 lh-25  ">
                Company*
              </label>
              <input
                className=" name_input"
                required
                type="text"
                value={inputvalue.four}
                name="four"
                onChange={addvalue}
              />
            </div>
          </div>

          <div className=" input_parent">
            <label className=" text-black ff-urbanist fw-normal text-16 lh-25  ">
              Message*
            </label>
            <input
              className=" pt-30 name_input"
              required
              type="text"
              value={inputvalue.five}
              name="five"
              onChange={addvalue}
            />
          </div>
          <div className=" mt-5">
            <Commonbtn
              text="GET IN TOUCH"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comnform;

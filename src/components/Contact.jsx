import React from "react";
import Comnform from "../common/Comnform";
import upper_contact from "../assets/images/svg/contact_upr_bg_bg_img.svg";
import contact_ellipse from "../assets/images/svg/contact_right_ellipse.svg";
import Comnheading from "../common/Comnheading";

const Contact = () => {
  return (
    <>
      <img src={upper_contact} alt="upr_layer" className=" w-100" />
      <section className="contect_bg_color position-relative">
        {/* ellipse */}
        <div className=" d-none d-xl-block contact_ellipse position-absolute">
          <img src={contact_ellipse} alt="contact_ellipse" />
        </div>
        <div className="container pb-133 pt-4">
          <div className=" d-flex justify-content-center">
            <Comnheading text="CONTACT US" />
          </div>

          <h2
            className=" fw-bold ff-urbanist text-40 lh-43 text-center mt-1 mb-48 text-blacknpm start
          "
          >
            Having any question?
          </h2>
          <Comnform />
        </div>
      </section>
    </>
  );
};

export default Contact;

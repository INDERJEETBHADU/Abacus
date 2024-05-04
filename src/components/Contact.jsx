// import React from "react";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";

// const Contact = () => {
//   const [inputvalue, setValue] = useState({
//     first: "",
//     second: "",
//     third: "",
//     four: "",
//     five: "",
//   });

//   const addvalue = (e) => {
//     setValue({ ...inputvalue, [e.target.name]: e.target.value });
//   };
//   function fromsubmit(e) {
//     e.preventDefault();
//     setValue({ first: "", second: "", third: "", four: "", five: "" });
//     Swal.fire({
//       title: "Good job!",
//       text: "Your task has been added !",
//       icon: "success",
//     });

//     const serviceID = "service_cown3sg";
//     const templateID = "template_ww98bbd";
//     const userID = "_1XTPe6CahrlkVPya";
//     emailjs.sendForm(serviceID, templateID, e.target, userID).then(
//       (result) => {
//         console.log("Email successfully sent!", result.text);
//       },
//       (error) => {
//         console.error("Email failed to send!", error.text);
//       }
//     );
//   }

//   return (
//     <>
//       <section className="contect_bg_color">
//         <div className="container pb-133 pt-4">
//           <h4 className=" text-20 lh-21 mb-0   ff-urbanist fw-normal text-black text-center ">
//             CONTACT US
//           </h4>

//           <h2 className=" fw-bold ff-urbanist text-40 lh-43 text-center mt-1 mb-48 text-blacknpm start
//           ">Having any question?</h2>

//           <div className="d-flex justify-content-center">
//             <div className="heaving_card">
//               <form onSubmit={fromsubmit}>
//                 <div className="  d-flex flex-sm-row flex-column gap-3">
//                   <div className=" input_parent">
//                     <label className=" text-black  ">Name*</label>
//                     <input
//                       className=" name_input"
//                       required
//                       type="text"
//                       value={inputvalue.first}
//                       name="first"
//                       onChange={addvalue}
//                     />
//                   </div>
//                   <div className=" input_parent">
//                     <label className=" text-black  ">Email address*</label>
//                     <input
//                       className=" name_input"
//                       required
//                       type="email"
//                       value={inputvalue.second}
//                       name="second"
//                       onChange={addvalue}
//                     />
//                   </div>
//                 </div>
//                 <div className="  d-flex flex-sm-row flex-column gap-3">
//                   <div className=" input_parent">
//                     <label className=" text-black  ">Phone number</label>
//                     <input
//                       className=" name_input"
//                       required
//                       type="number"
//                       value={inputvalue.third}
//                       name="third"
//                       onChange={addvalue}
//                     />
//                   </div>{" "}
//                   <div className=" input_parent">
//                     <label className=" text-black  ">Company*</label>
//                     <input
//                       className=" name_input"
//                       required
//                       type="text"
//                       value={inputvalue.four}
//                       name="four"
//                       onChange={addvalue}
//                     />
//                   </div>
//                 </div>

//                 <div className=" input_parent">
//                   <label className=" text-black  ">Message*</label>
//                   <input
//                     className=" pt-30 name_input"
//                     required
//                     type="text"
//                     value={inputvalue.five}
//                     name="five"
//                     onChange={addvalue}
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

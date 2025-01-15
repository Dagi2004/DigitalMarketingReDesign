import React from "react";
import Navigation from "../Resuable/Navigation";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import contact from "../../assets/contact.png";
import contactform from "../../assets/contactform.png";
import { Footer } from "../Resuable/Footer";
import { Submit } from "../Resuable/Submit";
const ContactUs = () => {
  return (
    <>
      <Navigation />
      <div className="my-20 mx-auto max-w-4xl py-6">
        <p className="bg-Yellowish max-w-[83px] px-2 m-2 text-[12px] text-center mx-auto rounded-md text-foundationblack z-10">
          Contact Us
        </p>
        <h1 className="text-[35px] text-center mx-auto mb-6 font-medium leading-[50px] capitalize text-foundationblack z-10">
          We’d Love to Hear From You!
        </h1>

        {/* Image Section */}
        <div className=" flex flex-col md:flex-row justify-center   items-center gap-12">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-r from-[#5EFCE8] to-[#736EFE] filter blur-[92px]"></div>
          <img
            src={email}
            alt="email"
            className="rounded-lg md:w-[531px] md:h-[331px] w-[360px] h-[210px]"
          />
          <img
            src={phone}
            alt="phone"
            className="rounded-lg md:w-[531px] md:h-[331px] w-[360px] h-[210px]"
          />
          <img
            src={contact}
            alt="contact"
            className="rounded-lg md:w-[531px] md:h-[331px] w-[360px] h-[210px]"
          />
        </div>

        {/* Form Section */}
        <div className="bg-white text-gray-800 mt-16 mx-auto flex flex-col-reverse md:flex-row rounded-lg md:max-w-4xl max-w-sm p-6 items-center justify-between shadow-2xl z-10">
          {/* Form */}
          <div className="w-full md:w-1/2 p-4">
            <div className="text-center mb-6">
              <p className="bg-Yellowish max-w-[83px] px-2 text-[12px] rounded-md text-foundationblack mx-auto">
                Contact Us
              </p>
              <h1 className="text-[28px] font-medium leading-[40px] text-foundationblack">
                Get in Touch With Us Today!
              </h1>
              <p className="text-[13px] font-[400] leading-7 text-parablack mt-2">
                Have questions or feedback? We’re here to help. Send us a
                message, and we’ll respond within 24 hours.
              </p>
            </div>
            <form>
              {/* First Name */}
              <label
                htmlFor="firstName"
                className="text-sm text-lightBlue block mt-4"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                className=" bg-lightgray text-black rounded-md p-2 w-full mt-2"
              />

              {/* Last Name */}
              <label
                htmlFor="lastName"
                className="text-sm text-lightBlue block mt-4"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                className=" bg-lightgray text-black rounded-md p-2 w-full mt-2"
              />

              {/* Email */}
              <label
                htmlFor="email"
                className="text-sm text-lightBlue block mt-4"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className=" bg-lightgray text-black rounded-md p-2 w-full mt-2"
              />
              <label
                htmlFor="textarea"
                id="textarea"
                name="textarea"
                className=" text-black rounded-md p-2 w-full mb-7  "
              >
                Message
              </label>
              <textarea
                id="textarea"
                name="textarea"
                rows="5"
                cols="33"
                placeholder="Leave Us a Message"
                className=" bg-lightgray text-black rounded-md p-2 mt-4 w-full"
              >
                Leave Us a Message
              </textarea>
              <div className="mt-4 mx-auto">
                <Submit />
              </div>
            </form>
          </div>

          {/* Image and Contact Details */}
          <div className="w-full md:w-1/2 mt-6 md:ml-10 md:mt-0">
            <img
              src={contactform}
              alt="Form Illustration"
              className="rounded-lg md:w-[541px] md:h-[341px] w-[420px] h-[260px]"
            />
            <div className="flex flex-col gap-5 mt-6">
              <div className="bg-lightgray rounded-lg px-4 py-3 shadow-md">
                <h3 className="font-bold">Email</h3>
                <p className="text-foundationblack text-[13px]">
                  DagmarosDigital@Dagim.com
                </p>
              </div>
              <div className="bg-lightgray rounded-lg px-4 py-3 shadow-md">
                <h3 className="font-bold">Phone</h3>
                <p className="text-foundationblack text-[13px]">
                  +123 456 7890
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

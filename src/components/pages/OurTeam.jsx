import React from "react";
import Navigation from "../Resuable/Navigation";
import bigsara from "../../assets/bigsara.png";
import bigmike from "../../assets/bigmike.png";
import abel from "../../assets/abel.png";
import { ReadMore } from "../Resuable/Readmore";
import { Footer } from "../Resuable/Footer";
import award from "../../assets/award.png";
import global from "../../assets/global.png";
import hand from "../../assets/hand.png";
import project from "../../assets/project.png";

import approach from "../../assets/collaApp.png";
import world from "../../assets/world.png";
import record from "../../assets/record.png";
const OurTeam = () => {
  return (
    <>
      <Navigation />
      <div className="my-20 mx-auto max-w-4xl py-6">
        <p className=" bg-Yellowish max-w-[43px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack ">
          Team
        </p>
        <h1 className="md:text-[37px] text-[28px] font-medium leading-[50px] text-center capitalize text-foundationblack">
          Our Excellent Team Members
        </h1>
        <div className="flex md:flex-row flex-col mt-2 mx-auto justify-center items-center gap-16 space-x-6">
          <div className="leading-6 flex flex-col mx-auto justify-center items-center">
            <img src={bigsara} alt="sara" className="w-[220px] h-[260px]" />
            <h3 className="mt-8 font-semibold text-foundationblack opacity-80 text-[22px]">
              Sara Bekele
            </h3>
            <p className="text-[15px]  opacity-80 font-[400] leading-7 text-foundationblack">
              Digital Marketing Manager
            </p>
          </div>

          <div className="leading-6 flex flex-col mx-auto justify-center items-center">
            <img src={bigmike} alt="bigmike" className="w-[300px] h-[360px]" />
            <h3 className="mt-8 font-semibold text-foundationblack opacity-80 text-[22px]">
              Michael Tesfaye
            </h3>
            <p className="text-[15px]  opacity-80 font-[400] leading-7 text-foundationblack">
              {" "}
              Creative Director
            </p>
          </div>
          <div className="leading-6 flex flex-col mx-auto justify-center items-center">
            <img src={abel} alt="abel" className="w-[220px] h-[260px]" />
            <h3 className="mt-8 font-semibold text-foundationblack opacity-80 text-[22px]">
              Abel Girma
            </h3>
            <p className="text-[15px]  opacity-80 font-[400] leading-7 text-foundationblack">
              {" "}
              SEO Specialist
            </p>
          </div>
        </div>
        <div className="py-7 mt-4">
          <p className=" bg-Yellowish max-w-[85px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack ">
            Achivements
          </p>
          <h1 className="md:text-[35px] text-[29px] mt-2 font-medium leading-[50px] capitalize text-center text-foundationblack">
            What Our Team Acomplished
          </h1>

          <div className="flex flex-col md:flex-row gap-14  mx-auto items-center justify-center mt-6">
            <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg  flex flex-col items-center justify-start">
              <img src={award} alt="award" className="w-[109px] h-[111px]" />

              <h3 className="text-[22px] font-semibold mt-4 text-center">
                Award-Winning Excellence
              </h3>
              <p className="text-[14px] max-w-md leading-7 text-parablack mt-2 text-center">
                Proud winners of Best Digital Marketing Agency 2024,' celebrated
                for crafting innovative solutions
              </p>
            </div>

            <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg  flex flex-col items-center  justify-start">
              <div className="flex flex-col mt-1">
                <img src={hand} alt="hand" className="w-[78px] h-[82px]" />
                <img src={project} alt="hand" className="w-[78px] h-[82px]" />
              </div>

              <h3 className="text-[20px] font-semibold  text-center">
                500+ Successful Projects
              </h3>
              <p className="text-[14px] max-w-md leading-7 text-parablack mt-2 text-center">
                we’ve delivered over 500 tailored campaigns that drive
                measurable success
              </p>
            </div>

            <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg  flex flex-col items-center justify-start">
              <img src={global} alt="global" className="w-[78px] h-[82px]" />

              <h3 className="text-[22px] font-semibold mt-4 text-center">
                100+ Satisfied Clients Globally
              </h3>
              <p className="text-[14px] max-w-md leading-7 text-parablack mt-2 text-center">
                Trusted by 100+ clients worldwide, we deliver exceptional
                service and measurable results
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 mx-auto">
          {/* Blog Header Section */}
          <div className="relative flex flex-col items-center justify-center mb-10">
            <div className="absolute w-[364px] h-[184px] opacity-50 bg-gradient-to-br from-[#5EFCE8] to-[#736EFE] blur-[200px]"></div>
            <p className=" bg-Yellowish max-w-[85px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack ">
              Unique
            </p>
            <h1 className="md:text-[35px] text-[29px] mt-2 font-medium leading-[50px] capitalize text-center text-foundationblack">
              What Sets Us Apart
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 mb-10">
            {/* Blog Image */}
            <img
              src={approach}
              alt="approach"
              className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 lg:mb-0"
            />

            {/* Blog Content */}
            <div className="flex flex-col justify-center md:justify-start space-y-4 space-x-5 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left font-semibold leading-tight">
                1. Collaborative Approach
              </h1>
              <p className="md:text-[14px] text-[12px] leading-6 text-center md:text-left text-gray-600">
                Our team brings a wealth of experience from various industries,
                including technology, healthcare, retail, and more.
                <span className="font-light">
                  This diverse background enables us to tackle challenges with
                  fresh perspectives and craft innovative, tailored solutions
                  that resonate with your audience and meet your goals
                </span>
              </p>
              <ReadMore />
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-8 mt-9">
            <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left  font-semibold leading-tight">
                2. Expertise Across Industries
              </h1>
              <p className="md:text-[14px] text-[12px] leading-6 text-center md:text-left text-gray-600">
                Our team brings a wealth of experience from various industries,
                including technology, healthcare, retail, and more. This diverse
                <span className="font-light">
                  background enables us to tackle challenges with fresh
                  perspectives and craft innovative, tailored solutions that
                  resonate with your audience and meet your goals
                </span>
              </p>
              <ReadMore />
            </div>
            {/* Blog Image */}
            <img
              src={world}
              alt="world"
              className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 mt-3 lg:mb-0"
            />

            {/* Blog Content */}
          </div>
          <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-10">
            {/* Blog Image */}
            <img
              src={record}
              alt="record"
              className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 lg:mb-0"
            />

            {/* Blog Content */}
            <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left font-semibold leading-tight">
                3. Proven Track Record
              </h1>
              <p className="md:text-[14px] text-[12px] leading-6 text-center md:text-left text-gray-600">
                With countless successful campaigns under our belt and a growing
                list of satisfied clients, our results speak volumes. From
                boosting
                <span className="font-light">
                  brand awareness to driving tangible business growth, we have
                  consistently delivered measurable success that builds trust
                  and long-term partnerships
                </span>
              </p>
              <ReadMore />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OurTeam;

import React from "react";
import Navigation from "../Resuable/Navigation";
import { Footer } from "../Resuable/Footer";
import Home from "./Home";
import homehero from "../../assets/about-hero.png";
import innovation from "../../assets/innovation.png";
import integrity from "../../assets/integrity.png";
import growth from "../../assets/Growthh.png";
import journey from "../../assets/growthjourney.png";

import startegy from "../../assets/strategies.png";
import data from "../../assets/datadriven.png";
import collaboration from "../../assets/collaboration.png";
import FAQ from "../FAQ";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="my-20 mx-auto max-w-4xl py-3">
        <div className="flex flex-col mx-auto justify-center items-center">
          <p className=" bg-Yellowish max-w-[83px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack ">
            About Us
          </p>
          <h1 className="text-[35px] font-medium leading-[50px] capitalize text-foundationblack">
            Empowering Brands, Digitally.
          </h1>
          <p className="text-[14px] max-w-md  font-[400] leading-7 text-parablack">
            We are a digital marketing agency committed to helping businesses
            thrive in the online world. With innovative strategies and creative
            solutions, we ensure your brand makes a lasting impact.
          </p>
          <img
            src={homehero}
            alt="Home"
            className="w-[630px] h-[544px] md:-mt-20 -mt-10"
          />
        </div>
        <div className="py-3">
          <p className=" bg-Yellowish max-w-[68px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack ">
            Principals
          </p>
          <h1 className="text-[35px] font-medium leading-[50px] capitalize text-center text-foundationblack">
            And These are our core Principals
          </h1>

          <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-6">
            <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
              <img
                src={innovation}
                alt="creativity"
                className="w-[109px] h-[111px]"
              />

              <h3 className="text-[22px] font-semibold mt-4">Innovation</h3>
              <p className="text-[14px] max-w-md leading-7 text-parablack mt-2">
                We embrace creativity and forward-thinking solutions to keep
                your business ahead in the digital world.
              </p>
            </div>

            <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
              <img
                src={integrity}
                alt="creativity"
                className="w-[109px] h-[111px]"
              />

              <h3 className="text-[22px] font-semibold mt-4">Integrity</h3>
              <p className="text-[14px] max-w-md leading-7 text-parablack mt-2">
                Our team crafts engaging content and visuals that bring your
                brand to life
              </p>
            </div>

            <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
              <img
                src={growth}
                alt="creativity"
                className="w-[109px] h-[111px]"
              />

              <h3 className="text-[22px] font-semibold mt-4">Growth</h3>
              <p className="text-[14px] max-w-md leading-7 text-parablack mt-2">
                Our mission is to drive sustainable success for your business
                through tailored strategies
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 mx-auto text-center">
          <p className=" bg-Yellowish max-w-[83px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack ">
            Journey
          </p>
          <h1 className="text-[35px] font-medium leading-[50px] capitalize text-center text-foundationblack">
            Our Growth Journey
          </h1>
          <div className="flex justify-center md:flex-nowrap flex-wrap items-center">
            <img
              src={journey}
              alt="journey"
              className="md:w-[405px] md:h-[465px] w-[320px] h-[415px]"
            />
            <div className="flex flex-col    gap-2 space-x-7 ">
              <h1 className="text-[28px] font-medium">
                500+ Projects Delivered
              </h1>
              <p className="text-[14px] md:max-w-md max-w-sm leading-7">
                Successfully completing over 500 diverse projects, we’ve proven
                our expertise in delivering outstanding results.
              </p>

              <h1 className="text-[28px] font-medium">
                100+ Satisfied Clients
              </h1>
              <p className="text-[14px] md:max-w-md max-w-sm leading-7">
                With over 100 happy clients worldwide, we prioritize building
                lasting relationships through excellent service.
              </p>

              <h1 className="text-[28px] font-medium">5 Years of Experience</h1>
              <p className="text-[14px] md:max-w-md max-w- leading-6">
                For half a decade, we’ve helped businesses navigate and excel in
                the ever-evolving digital world.
              </p>
            </div>
          </div>

          <div className="mt-9">
            <p className=" bg-Yellowish max-w-[63px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack ">
              Features
            </p>
            <h1 className="text-[35px] font-medium leading-[50px] capitalize text-center text-foundationblack">
              Our Primary Features
            </h1>

            <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-6">
              <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
                <img
                  src={startegy}
                  alt="startegy"
                  className="w-[109px] h-[111px]"
                />

                <h3 className="text-[22px] font-semibold mt-4">
                  Customized Strategies
                </h3>
                <p className="text-[14px]  leading-7 text-parablack mt-2">
                  We tailor every marketing campaign to your unique business
                  needs, ensuring maximum impact and results.
                </p>
              </div>

              <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
                <img src={data} alt="data" className="w-[109px] h-[111px]" />

                <h3 className="text-[22px] font-semibold mt-4">
                  Data-Driven Decisions
                </h3>
                <p className="text-[14px] max-w-md leading-7 text-parablack mt-2">
                  Our approach leverages analytics and insights to craft
                  strategies that deliver measurable growth.
                </p>
              </div>

              <div className="w-[320px] h-[350px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
                <img
                  src={collaboration}
                  alt="collaboration"
                  className="w-[109px] h-[111px]"
                />

                <h3 className="text-[22px] font-semibold mt-4">
                  Seamless Collaboration
                </h3>
                <p className="text-[14px] max-w-md leading-7 text-parablack mt-2">
                  We work hand-in-hand with you, keeping communication open and
                  ensuring your vision drives the process.
                </p>
              </div>
            </div>
          </div>
          <FAQ />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;

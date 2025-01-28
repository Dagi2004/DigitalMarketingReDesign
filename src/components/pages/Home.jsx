import React from "react";
import { Button } from "../Resuable/Button";
import hero from "../../assets/Hero-img.png";
import cyrus from "../../assets/cyrus.png";
import jambo from "../../assets/jambo.png";
import kadu from "../../assets/kadu.png";
import vario from "../../assets/vario.png";
import prism from "../../assets/prism.png";
import aspect from "../../assets/aspect.png";
import creative from "../../assets/creativity.png";
import strategy from "../../assets/startegy.png";
import growth from "../../assets/growth.png";
import blog from "../../assets/blog.png";
import michael from "../../assets/michael.png";
import priya from "../../assets/priya.png";
import emily from "../../assets/emily.png";
import sarah from "../../assets/sarah.png";
import david from "../../assets/david.png";
import fikir from "../../assets/fikir.png";
import blog1 from "../../assets/blog-1.png";
import blog2 from "../../assets/blog-2.png";
import blog3 from "../../assets/blog-3.png";
import { ReadMore } from "../Resuable/Readmore";
import { Footer } from "../Resuable/Footer";
import Navigation from "../Resuable/Navigation";

const Testimonials = [
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Michael Reynolds",
    image: michael,
    comment:
      "Their innovative approach completely transformed our online presence. We’ve seen incredible growth since partnering with them!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Priya Sharma",
    image: priya,
    comment:
      "From strategy to execution, they exceeded our expectations. Their results-driven approach made all the difference!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Emily Carter",
    image: emily,
    comment:
      "Their innovative approach completely transformed our online presence. We’ve seen incredible growth since partnering with them!",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Sarah Martinez",
    image: sarah,
    comment:
      "The team’s creativity and dedication are unmatched. They understood our vision and turned it into an amazing digital campaign.",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "David Chen",
    image: david,
    comment:
      "Working with them was a game-changer for our business. Their strategies helped us reach a broader audience and boost sales.",
  },
  {
    star: "⭐⭐⭐⭐⭐",
    Name: "Fikir Niguse",
    image: fikir,
    comment:
      "They truly understood our needs and delivered exceptional results. Our engagement rates have never been higher!",
  },
];

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="my-20 mx-auto max-w-4xl py-6">
        <div className=" px-10 flex flex-col md:flex-row md:justify-start md:items-start justify-center  items-center gap-8">
          <div className="md:w-1/2 mt-13 mx-auto ">
            <p className=" bg-Yellowish max-w-[143px] px-1 m-2 text-[12px] rounded-md  text-foundationblack ">
              Branding Done Right
            </p>
            <h1 className="text-[35px] font-medium leading-[50px] capitalize text-foundationblack">
              Shaping the Future of Your Brand
            </h1>
            <p className="text-[13px]  font-[400] leading-7 text-parablack">
              We help you stand out in the ever-evolving digital landscape by
              crafting strategies that drive measurable results. Let’s turn your
              goals into achievements with innovative marketing solutions
              tailored just for you.
            </p>
            <div className="mt-4 max-w-[1/2]   ">
              <Button />
            </div>
          </div>
          <div className="relative md:w-1/2 ml-10 mt-5 md:mt-10 flex ">
            <img
              src={hero}
              alt="hero"
              className="rounded-lg  md:w-[541px] md:h-[341px] w-[420px] h-[260px]"
            />

            {/* Gradient Blur Effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-r from-[#5EFCE8] to-[#736EFE] filter blur-[102px]"></div>
          </div>
        </div>
        <div className="flex border-solid border-2 mt-12 divide-x-2 border-lightgray px-8 py-12 justify-evenly gap-5 rounded-[88px]">
          <div className="flex flex-col items-center flex-grow">
            <p className="uppercase mb-2 bg-Yellowish max-w-[140px] text-[11px] rounded-md px-1 text-foundationblack">
              Client Retention
            </p>
            <h3 className="font-bold text-[22px]">5.2M</h3>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <p className="uppercase mb-2 bg-Yellowish max-w-[135px] text-[11px] rounded-md px-1 text-foundationblack">
              Emails Per Month
            </p>
            <h3 className="font-bold text-[22px]">+330k</h3>
          </div>
          <div className="flex flex-col items-center flex-grow">
            <p className="uppercase mb-2 bg-Yellowish max-w-[140px] text-[11px] rounded-md px-1 text-foundationblack">
              Monthly Campaigns
            </p>
            <h3 className="font-bold text-[22px]">+44,5K</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 my-14">
          <p className=" mb-2 bg-Yellowish max-w-[140px] text-[11px] rounded-md px-1 text-foundationblack">
            Trusted
          </p>
          <h2 className="text-[30px] font-medium leading-[45px]">
            Companies That Trust Us
          </h2>
          <div className="flex flex-row  justify space-x-8 items-center gap-3">
            <img src={cyrus} alt="" className="max-w-[150px] w-full" />
            <img src={jambo} alt="" className="max-w-[150px] w-full" />
            <img src={kadu} alt="" className="max-w-[150px] w-full" />
            <img src={vario} alt="" className="max-w-[150px] w-full" />
            <img src={prism} alt="" className="max-w-[150px] w-full" />
            <img src={aspect} alt="" className="max-w-[150px] w-full" />
          </div>
        </div>
        <div className="my-8 mx-auto text-center">
          {/* Section Title */}
          <p className=" mb-2 mx-auto bg-Yellowish max-w-[110px] text-[11px] rounded-md px-1 text-foundationblack">
            Deliver
          </p>
          <h2 className="text-[30px] font-medium leading-[39px]">
            What We Deliver
          </h2>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-6">
            {/* Card 1 */}
            <div className="w-[300px] h-[380px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
              <div className="w-full h-[200px] rounded-[16px] bg-gradient-to-br from-[#7EFFF5] via-[#7a47e7] to-[#FFF385] flex items-center justify-center">
                <img
                  src={creative}
                  alt="creativity"
                  className="w-[109px] h-[111px]"
                />
              </div>
              <h3 className="text-[20px] font-semibold mt-4">Creativity</h3>
              <p className="text-[14px] text-parablack mt-2 leading-6">
                Our team crafts engaging content and visuals that bring your
                brand to life.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-[300px] h-[380px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
              <div className="w-full h-[200px] rounded-[16px] bg-gradient-to-br from-[#7EFFF5] via-[#A981FF] to-[#FFF385] flex items-center justify-center">
                <img
                  src={strategy}
                  alt="strategy"
                  className="w-[109px] h-[111px]"
                />
              </div>
              <h3 className="text-[20px] font-semibold mt-4">Strategy</h3>
              <p className="text-[14px] text-parablack mt-2 leading-6">
                We create tailored digital marketing strategies that align with
                your goals for impactful results.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-[300px] h-[380px] p-6 rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-start">
              <div className="w-full h-[200px] rounded-[16px] opacity-50 bg-gradient-to-br from-[#7EFFF5] via-[#FF8BC1] to-[#FFF385] flex items-center justify-center">
                <img
                  src={growth}
                  alt="growth"
                  className="w-[109px] h-[111px]"
                />
              </div>
              <h3 className="text-[20px] font-semibold mt-4">Growth</h3>
              <p className="text-[14px] text-parablack mt-2 leading-6">
                We deliver data-driven solutions to boost traffic, conversions,
                and measurable success.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 mx-auto">
          <p className="mb-2 mx-auto bg-Yellowish max-w-[103px] text-[11px] rounded-md px-1 text-foundationblack">
            What they say
          </p>
          <h2 className="text-[30px] font-medium leading-[45px] text-center">
            Testimonials
          </h2>
          <div className=" mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12  justify-center">
            {Testimonials.map((testimony, index) => (
              <div
                key={index}
                className="py-4 px-8  rounded-[32px] border border-[#C2C2C2] text-center max-w-[400px] w-full"
              >
                <p className="text-yellow">{testimony.star}</p>
                <img
                  src={testimony.image}
                  alt={testimony.Name}
                  className="w-[80px] h-[80px] rounded-full mx-auto my-4"
                />
                <h3 className="text-[20px] font-semibold text-foundationblack">
                  {testimony.Name}
                </h3>
                <p className="text-[12px] font-[500] leading-6 max-w-lg text-gray mt-2">
                  {testimony.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 mx-auto">
          {/* Blog Header Section */}
          <div className="relative flex flex-col items-center justify-center mb-10">
            <div className="absolute w-[364px] h-[184px] opacity-50 bg-gradient-to-br from-[#5EFCE8] to-[#736EFE] blur-[200px]"></div>
            <img src={blog} alt="blog" className="w-[212px] h-[136px] mb-4" />
            <h2 className="text-3xl font-bold">Blog</h2>
          </div>

          {/* Blog Post 1 */}
          <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-5 mb-10">
            {/* Blog Image */}
            <img
              src={blog1}
              alt="blog"
              className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 lg:mb-0"
            />

            {/* Blog Content */}
            <div className="flex flex-col justify-center md:justify-start space-y-4 space-x-5 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left font-semibold leading-tight">
                The Power of Social Media Marketing: Why Your Business Needs It
              </h1>
              <p className="md:text-[14px] text-[12px] leading-6 text-center md:text-left text-gray-600">
                Social media is more than just a platform—it's a powerful tool
                for connecting with your audience. Learn how to use platforms
                like{" "}
                <span className="font-light">
                  Instagram, Facebook, and LinkedIn to build brand loyalty,
                  increase engagement, and drive sales. Don’t miss out on these
                  tips to make the most of your social presence!
                </span>
              </p>
              <ReadMore />
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-8 mt-9">
            <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left  font-semibold leading-tight">
                5 Proven Strategies to Boost Your Brand's Online Presence
              </h1>
              <p className="md:text-[14px] text-[12px] leading-6 text-center md:text-left text-gray-600">
                In today’s competitive digital landscape, standing out is
                crucial. Discover five actionable strategies that will help your
                brand increase visibility, drive traffic, and engage your
                audience.{" "}
                <span className="font-light">
                  From leveraging SEO to crafting compelling content, these tips
                  will set your business on the path to success...
                </span>
              </p>
              <ReadMore />
            </div>
            {/* Blog Image */}
            <img
              src={blog2}
              alt="blog"
              className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 mt-3 lg:mb-0"
            />

            {/* Blog Content */}
          </div>
          <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-10">
            {/* Blog Image */}
            <img
              src={blog3}
              alt="blog"
              className="w-full lg:w-[480px] max-w-[380px] h-[347px] rounded-[32px] object-cover mb-5 lg:mb-0"
            />

            {/* Blog Content */}
            <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left font-semibold leading-tight">
                Why Digital Content Marketing is the Secret to Sustainable
                Growth
              </h1>
              <p className="md:text-[14px] text-[12px] leading-6 text-center md:text-left text-gray-600">
                Content marketing isn’t just a buzzword; it’s a proven strategy
                for long-term success. This blog dives into the importance of
                creating{" "}
                <span className="font-light">
                  valuable, audience-focused content and how it helps build
                  trust, authority, and brand loyalty. Start crafting content
                  that resonates with your audience and drives results today.
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

export default Home;

import React from "react";
import Navigation from "../Resuable/Navigation";
import { GetStarted } from "../Resuable/GetStarted";
import { Footer } from "../Resuable/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      description:
        "Ideal for small businesses or startups looking to build an online presence.",
      price: "$499/month",
      features: [
        "Manage 2 social platforms",
        "4 custom posts/month",
        "Basic SEO optimization",
        "Monthly performance report",
        "Email support",
      ],
    },
    {
      name: "Growth Plan",
      description:
        "Perfect for growing businesses aiming to scale their online presence.",
      price: "$799/month",
      features: [
        "Manage 5 social platforms",
        "8 custom posts/month",
        "2 ad campaigns/month",
        "Google Ads setup",
        "Advanced SEO optimization",
        "Bi-weekly performance report",
        "Priority email support",
      ],
      recommended: true, // Mark as the featured plan
    },
    {
      name: "Premium Plan ",
      description:
        "Best for large enterprises needing comprehensive digital marketing.",
      price: "$1,499/month",
      features: [
        "Manage unlimited platforms",
        "Unlimited custom posts",
        "Comprehensive SEO strategy",
        "Weekly performance report",
        "24/7 dedicated support",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="my-20 mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <p className="bg-Yellowish max-w-[83px] text-[12px] rounded-md mx-auto text-foundationblack">
          Right Plan
        </p>
        <h1 className="md:text-[37px] text-[28px] font-medium leading-[50px] text-center capitalize text-foundationblack">
          Choose your right plan!
        </h1>
        <p className="mb-6 text-[14px] text-center mx-auto max-w-xl leading-7 text-foundationblack">
          Our pricing plans are designed to cater to businesses of all sizes,
          from startups to established enterprises. Whether you’re looking to
          build your online presence or drive serious growth, we have a plan
          that fits your needs and budget.
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`w-[310px] md:w-[340px] p-6 mt-12 rounded-3xl shadow-lg flex flex-col justify-between transition-all duration-300 ${
                plan.recommended
                  ? "bg-gradient-to-br from-[#5EFCE8] to-[#736EFE] text-white scale-105"
                  : "bg-white text-foundationblack"
              }`}
            >
              {/* Header Section */}
              {plan.recommended ? (
                <div className="flex md:gap-20 gap-14">
                  <h3 className="font-bold text-[18px]">{plan.name}</h3>
                  <div className="flex justify-end">
                    <p className="bg-Yellowish max-w-[97px] w-full text-[11px] rounded-md mx-auto text-foundationblack">
                      Recommended
                    </p>
                  </div>
                </div>
              ) : (
                <h3 className="font-bold text-[18px]">{plan.name}</h3>
              )}

              {/* Content Section */}

              <p className="text-[14px] mb-4 leading-7">{plan.description}</p>
              <h2 className="font-bold text-[24px] mb-4">{plan.price}</h2>
              <hr className="opacity-90 mb-4" />
              <ul className="list-none space-y-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="relative pl-6 before:content-['✔'] before:absolute before:left-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button Section */}
              <div className="mt-6">
                <GetStarted />
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;

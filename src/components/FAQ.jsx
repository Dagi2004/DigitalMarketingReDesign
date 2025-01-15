import React from "react";
import { useState } from "react";
const FAQ = () => {
  const [active, setActive] = useState(false);
  const toggleAcordion = (index) => {
    setActive(active === index ? "null" : index);
  };
  const FAQ = [
    {
      question: "How does your digital marketing process work? ",
      answer:
        "Our process starts with understanding your goals and audience. We then create a tailored strategy, implement campaigns using the latest tools, and continuously optimize them based on performance insights. ",
    },

    {
      question: "How do you measure marketing success? ",
      answer:
        " We measure success through key metrics like ROI, website traffic, conversions, engagement, and brand awareness based on campaign goals.",
    },
    {
      question: "Do you offer customized marketing solutions?",
      answer:
        " Yes, we tailor strategies to meet each client’s unique needs and objectives.",
    },
    {
      question: " How long does it take to see results?",
      answer:
        " Results vary by strategy, but typically, SEO takes 3–6 months, while paid ads and social campaigns can yield quicker results within weeks.",
    },
  ];
  return (
    <div className="mt-7 py-5">
      {/* FAQ Header */}
      <p className="bg-Yellowish max-w-[45px] px-1 m-2 text-[12px] rounded-md mx-auto text-foundationblack">
        FAQ
      </p>
      <h1 className="text-[35px] font-medium leading-[50px] capitalize text-center text-black">
        Frequently Asked Questions
      </h1>

      {/* Accordion Section */}
      <div className="w-full mx-auto p-5">
        <div className="space-y-4">
          {FAQ.map((faq, index) => (
            <div key={index} className="p-4 bg-gray  rounded-lg ">
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-[22px] font-medium  flex-1">
                  {faq.question}
                </h1>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleAcordion(index)}
                  className=" rounded-full p-2 w-8 h-8 flex items-center justify-center text-[26px]"
                >
                  {active === index ? "-" : "+"}
                </button>
              </div>

              {/* Answer (conditionally rendered) */}
              {active === index && (
                <div className="mt-3 text-[16px] font-light">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

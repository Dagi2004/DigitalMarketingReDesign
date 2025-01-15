import React from "react";

export const Button = () => {
  return (
    <div className="py-3 px-8 rounded-[32px] transition-all duration-300 md:max-w-[180px] max-w-[220px] w-full bg-white text-foundationblack md:bg-foundationblack md:text-white">
      <p>
        Try It Out <span className="font-size:100px;">&#8594;</span>
      </p>
    </div>
  );
};

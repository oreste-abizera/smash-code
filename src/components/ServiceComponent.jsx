import React from "react";

const ServiceComponent = ({ title, description, icon }) => {
  return (
    <div className="w-full lg:w-[48%] relative bg-[rgba(40,40,40,.9882352941176471)] min-h-[200px] rounded-[24px] p-[32px]">
      <div
        className="-mt-[88px] rounded-[24px] w-[112px] h-[112px] mb-[1rem] border-[2px] border-[#1aaca2] flex items-center justify-center text-white"
        style={{ background: "radial-gradient(circle,#121212 0,#2e2e2e 100%)" }}
      >
        {icon}
      </div>
      <h1 className="text-white font-medium text-[1.7rem] leading-[1.333]">
        {title}
      </h1>
      <p className="text-[#a0a0a0] text-[1.2rem] mt-[1rem]">{description}</p>
    </div>
  );
};

export default ServiceComponent;

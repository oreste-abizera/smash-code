import React from "react";

const ServiceComponent = ({ title, description, icon }) => {
  return (
    <div className="w-full lg:w-[48%] relative bg-[rgba(54,57,63,.9882352941176471)] min-h-[200px] rounded-[24px] p-[32px]">
      <div
        className="-mt-[88px] rounded-[24px] w-[112px] h-[112px] mb-[1rem] border-[2px] border-[#008B9A] flex items-center justify-center text-white"
        style={{ background: "radial-gradient(circle,#2e2e2e 0,#363947 100%)" }}
      >
        {icon}
      </div>
      <h1 className="text-white font-medium text-[1.7rem] leading-[1.333]">
        {title}
      </h1>
      <p className="text-gray-400 text-[1.2rem] mt-[1rem]">{description}</p>
    </div>
  );
};

export default ServiceComponent;

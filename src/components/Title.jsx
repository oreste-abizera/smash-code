import React from "react";

const Title = ({ title = "", subtitle = "" }) => {
  return (
    <div className="text-white">
      <h1 className="text-[1.5rem]">{title}</h1>
      <h1 className="text-[4rem] mb-[20px]" style={{ width: "max-content" }}>
        {subtitle}
        <div className="mt-[15px] h-[0.7px] w-[85%] bg-[#008B9A]"></div>
      </h1>
    </div>
  );
};

export default Title;

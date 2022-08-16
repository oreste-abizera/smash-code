import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "../assets/images/web/hero1.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap py-[8rem]">
      <div className="w-full lg:w-2/3">
        <div className="text-white text-[4rem]">
          <p>What You Can Think</p>
          <p>We Can Develop It</p>
          <p>For You</p>
        </div>
        <div className="h-[0.7px] w-[30%] bg-[#1aaca2] my-[15px]"></div>
        <p className="text-[1.2rem] text-white my-[30px] max-w-[90%]">
          We create future-ready websites &amp; web apps via innovative digital
          solutions so that you can focus on your core business.
        </p>
        <button className="primary-btn" onClick={() => navigate("/contact")}>
          Let's talk
        </button>
      </div>
      <div className="w-full lg:w-1/3 pt-[4rem] flex items-center justify-center">
        <img src={heroImage1} alt="" className="w-full"></img>
      </div>
    </div>
  );
};

export default Hero;

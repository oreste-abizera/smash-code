import React from "react";
import Title from "./Title";
import client1 from "../assets/images/clients/1.png";

const HomeFeedback = () => {
  return (
    <div className="mb-[8rem] w-full">
      <Title title="Clients" subtitle="Feedback" />
      <div className="mt-[4rem] w-full flex flex-col lg:flex-row border-r-[2px] border-dashed border-r-[#1aaca2]">
        <div className="w-full lg:w-[20%]"></div>
        <div className="w-full lg:w-[60%]">
          <p className="text-[1.7rem] text-[#1aaca2] leading-[5rem] flex justify-start mb-[1rem]">
            <span className="flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden mr-[15px]">
              <img
                src={
                  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/7a076cd6d5302d76a0d29771ee8d5b97-1581266436493/06cc1535-0d5a-4fad-bda5-e957a63713be.jpg"
                }
                alt="Hyperdad"
                className="w-full object-cover text-center"
              ></img>
            </span>
            Hyperdad
          </p>
          <blockquote className="blockquote text-white max-w-[492px] text-[1.25rem] mb-[1rem]">
            <p className="mb-0 text-[1.7rem]">
              “SupermAn , my super hero , outstanding , elegant , very fast ,
              very patient , what could I possibly desire if I have Ismail we
              love you a lot , and highly recommend”
            </p>
            <footer className="blockquote-footer mt-2 text-[#6c757d] text-[0.875em]">
              <a
                href="https://www.fiverr.com/ismail_muhammad"
                target="_blank"
                className="a-simple text-pri text-[#1aaca2]"
                rel="noreferrer"
              >
                Posted on &nbsp;{" "}
                <span title="Source Title">
                  Fiverr &nbsp; ---&gt; &nbsp; view
                </span>
              </a>
            </footer>
          </blockquote>
        </div>
        <div className="w-full lg:w-[20%]"></div>
      </div>
    </div>
  );
};

export default HomeFeedback;

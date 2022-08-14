import React from "react";
import { FaEye } from "react-icons/fa";

const FeaturedBlogs = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-y-[4rem]">
      <div className="w-full lg:w-[70%] h-[470px] lg:pr-[4rem]">
        <div className="w-full h-full relative bg-gray-500 rounded-[1rem]">
          <img
            className="w-full h-full object-cover rounded-[1rem]"
            src="https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F%20abiTJvHUgYWarren-Buffet%2C-A-legendary-Investor-and-Philanthropist-who-can-Teach-You-the-Art-of%C2%A0Living.jpg?alt=media&token=003be5ff-8700-4b6c-9e62-2f8a7e12cfde"
            alt=""
          ></img>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 cursor-pointer rounded-[1rem]"></div>
          <div className="absolute bottom-0 left-0 w-full bg-opacity-90 bg-black p-[1rem] rounded-b-[1rem] cursor-pointer">
            <h1 className="text-white text-[1.5rem] leading-[1.333] mb-[0.5rem]">
              Warren Buffet, A legendary Investor and Philanthropist ...
            </h1>
            <p className="text-[1rem] leading-[1.5] tracking-[0.00938em] text-white">
              Warren Buffet is a legendry investor whose quotes and life story
              can teach you the art of living
            </p>

            <button className="flex items-center gap-[0.5rem] absolute -top-[2.5rem] right-0 bg-[#1aaca2] text-white rounded-l-[8px] py-[4px] px-[8px] text-lg">
              <FaEye />
              <p>17 views</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[30%] flex flex-col h-[450px] gap-y-[1rem]">
        <div className="w-full h-1/2 relative rounded-[1rem] bg-gray-500">
          <img
            className="w-full h-full object-cover rounded-[1rem]"
            src="https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F%20stiwp4ydZmHow-Bill-Gates's-Success-Story-Makes-Us-a-Better-Human-Being%20(1).jpg?alt=media&token=bb2f7572-03e8-47f1-975b-a3ed32443805"
            alt=""
          ></img>
          <div className="absolute h-full w-full bg-opacity-40 top-0 left-0 bg-black rounded-[1rem] text-white flex flex-col justify-end p-4 cursor-pointer">
            <h1 className="mb-[0.35em] text-[1.5rem] leading-[1.334]">
              How Bill Gates's Success ...
            </h1>
            <p className="text-[0.875rem] leading-[1.43] tracking-[0.01071em]">
              Know about Bill Gates's success story and services for humanity
              and get inspired.
            </p>
          </div>
        </div>
        <div className="w-full h-1/2 relative rounded-[1rem] bg-gray-500">
          <img
            className="w-full h-full object-cover rounded-[1rem]"
            src="https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2FHow-Jack-Ma-Success-Story-Helps-Us-Become-successful-in-the-21st%C2%A0Century.jpg%20tppzFrxUSZ?alt=media&token=01d5ea4a-5464-4fee-ba6e-3ac3dd18e74a"
            alt=""
          ></img>
          <div className="absolute h-full w-full bg-opacity-40 top-0 left-0 bg-black rounded-[1rem] text-white flex flex-col justify-end p-4 cursor-pointer">
            <h1 className="mb-[0.35em] text-[1.5rem] leading-[1.334]">
              How Jack Ma Success Story...
            </h1>
            <p className="text-[0.875rem] leading-[1.43] tracking-[0.01071em]">
              Jack Ma's success story can help us become successful in the 21st
              Century
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

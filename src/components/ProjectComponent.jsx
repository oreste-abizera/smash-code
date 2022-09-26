import React from "react";

const ProjectComponent = ({
  title,
  description,
  image,
  video,
  gradient,
  url,
  top = false,
}) => {
  return (
    <div
      className={
        (top ? "lg:-mt-[8.5rem] lg:mb-0" : "lg:mt-0 lg:-mb-[8.5rem]") +
        " w-full lg:w-[48%] text-[#e0e0e0] hover:text-white min-h-[500px] rounded-[24px] p-[32px] overflow-hidden project-container"
      }
      style={{
        background: gradient,
      }}
    >
      <div className="pb-[30px]">
        <h1 className="text-[2rem] font-medium mb-[0.5rem] leading-[1.2]">
          {title}
        </h1>
        <p className="text-[1.2rem] mb-[1rem]">{description}</p>

        {image && (
          <div className="pt-[20px] lg:pt-[38px] w-full min-w-[196px] relative rounded-full flex items-center justify-center overflow-hidden transition-all img-container">
            <img
              loading="lazy"
              decoding="async"
              alt="smash code"
              src={image}
              className="rounded-full w-full"
              style={{
                boxShadow: "5px 5px 35px rgb(80 80 80 / 19%)",
              }}
            ></img>
          </div>
        )}
        {video && (
          <video src={video} className="w-full min-w-[196px]" controls></video>
        )}
      </div>

      <div className="my-[5px] mx-auto">
        <a className="font-bold text-[1.2rem] rounded-[50px] flex items-center justify-center text-center py-[6px] px-[16px] text-[#1aaca2] cursor-pointer">
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;

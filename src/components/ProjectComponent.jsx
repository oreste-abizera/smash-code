import React from "react";

const ProjectComponent = ({
  title,
  description,
  image,
  gradient,
  url,
  top = false,
}) => {
  return (
    <div
      className="w-full lg:w-[48%] text-[#e0e0e0] hover:text-white min-h-[500px] rounded-[24px] p-[32px] overflow-hidden"
      style={{ background: gradient, marginTop: top ? "-8.5rem" : 0 }}
    >
      <div className="pb-[30px]">
        <h1 className="text-[2rem] font-medium mb-[0.5rem] leading-[1.2]">
          {title}
        </h1>
        <p className="text-[1.2rem] mb-[1rem]">{description}</p>

        <div className="pt-[20px] lg:pt-[38px] w-full min-w-[196px] relative rounded-full flex items-center justify-center overflow-hidden transition-all">
          <img
            loading="lazy"
            decoding="async"
            alt="smash code"
            src={image}
            className="rounded-full w-full"
            style={{
              zIndex: -1,
              boxShadow: "5px 5px 35px rgb(80 80 80 / 19%)",
            }}
          ></img>
        </div>
      </div>

      <div class="my-[5px] mx-auto">
        <a
          class="font-bold text-[1.2rem] rounded-[50px] flex items-center justify-center text-center py-[6px] px-[16px] text-[#1aaca2]"
          href={url}
          target="_blank"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;

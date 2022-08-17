import React from "react";

const TeamMember = ({ name, position, isExpanded, image }) => {
  return (
    <div className="team-member w-[200px] h-[200px] rounded-full border-[3px] border-[#1aaca2] relative flex items-center justify-center my-0 mx-auto mt-[3rem]">
      <div className="w-full h-full p-[15px] rounded-full flex flex-col items-center justify-center overflow-hidden text-center before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:border-[3px] before:border-[#17cae2]">
        <h2 className="text-[1.4rem] pt-[20px] font-medium mb-[0.5rem]">
          {name}
        </h2>
        <p className="font-semibold text-[0.9rem] text-[#1aaca2]">{position}</p>
      </div>
      <div
        className={
          "absolute left-0 w-full h-full overflow-hidden p-[3px] " +
          (isExpanded ? "-top-[85%]" : "top-0")
        }
        style={{
          transition: "all 0.3s linear",
          zIndex: 111,
          backgroundColor: "rgb(32 32 32)",
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full"
        ></img>
      </div>
    </div>
  );
};

export default TeamMember;

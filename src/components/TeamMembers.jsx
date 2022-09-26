import React from "react";
import TeamMember from "./TeamMember";

const TeamMembers = (props) => {
  const members = [
    {
      name: "Nate fuller",
      position: "CEO & Founder",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200028/4e6b2743-8b87-4d35-a995-ebbe689510a0_ux3bvv.jpg",
      isExpanded: true,
    },
    {
      name: "NTWALI OSEE",
      position: "Software Engineer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200247/ce5acdf1-4ea5-4a4c-9082-ce521ca464e5_d9zqqt.jpg",
    },
    {
      name: "ABIZERA Oreste",
      position: "Fullstack Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200797/T5E22CTMW-U03V01LLPT4-3415dd4eeb48-512_i8bjtn.jpg",
      hideAfter: true,
    },
    {
      name: "valens NIYONSENGA",
      position: "Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201177/c97d82cf-ba90-4f9d-9dd6-6db045734f63_mthzec.jpg",
      showBefore: true,
    },
    {
      name: "NTWALI OSEE",
      position: "Software Engineer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200237/467033c5-d094-40f0-993e-3d538d3f13e8_un1pce.jpg",
    },
    {
      name: "ABIZERA Oreste",
      position: "Fullstack Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201107/T043BG5SCR5-U043KF5598E-5aa2a6f547b8-512_sl65kg.png",
      hideAfter: true,
    },
    {
      name: "valens NIYONSENGA",
      position: "Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201177/c97d82cf-ba90-4f9d-9dd6-6db045734f63_mthzec.jpg",

      showBefore: true,
    },
    {
      name: "NTWALI OSEE",
      position: "Software Engineer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200247/ce5acdf1-4ea5-4a4c-9082-ce521ca464e5_d9zqqt.jpg",
    },
    {
      name: "ABIZERA Oreste",
      position: "Fullstack Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200797/T5E22CTMW-U03V01LLPT4-3415dd4eeb48-512_i8bjtn.jpg",
      hideAfter: true,
    },
  ];
  return (
    <div className="w-full flex justify-center flex-wrap text-white mt-[10rem]">
      {members.map((member, index) => {
        return (
          <div className="w-full md:w-[33.333333%]" key={index}>
            <TeamMember {...member} />
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;

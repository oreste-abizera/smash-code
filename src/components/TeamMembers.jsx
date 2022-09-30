import React from "react";
import TeamMember from "./TeamMember";

const TeamMembers = (props) => {
  const members = [
    {
      name: "Nate Fuller",
      position: "CEO & Founder",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200028/4e6b2743-8b87-4d35-a995-ebbe689510a0_ux3bvv.jpg",
      isExpanded: true,
    },
    {
      name: "Ntwali Osee",
      position: "Software Engineer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200247/ce5acdf1-4ea5-4a4c-9082-ce521ca464e5_d9zqqt.jpg",
    },
    {
      name: "Oreste Abizera",
      position: "Full stack Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200797/T5E22CTMW-U03V01LLPT4-3415dd4eeb48-512_i8bjtn.jpg",
      hideAfter: true,
    },
    {
      name: "Valens Niyonsenga",
      position: "Frontend Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201177/c97d82cf-ba90-4f9d-9dd6-6db045734f63_mthzec.jpg",
      showBefore: true,
    },
    {
      name: "Wilson Kamali",
      position: "Software Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664220626/7caece85-ebf2-45a3-9e02-7c15461c6c07_shzsgm.jpg",
    },
    {
      name: "Hubert Munezero",
      position: "Frontend developer and UI IX designer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664220642/f7b50543-a582-4c8a-843b-79054bb3474b_wjtcbz.jpg",
      hideAfter: true,
    },
    {
      name: "Aslam Rwabutaguza",
      position: "Backend Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664223897/de261456-88ff-4c19-85b3-24608c9c5ef7_bkmjge.jpg",

      showBefore: true,
    },
    {
      name: "Byishimo Eric",
      position: "Software Engineer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664383409/d6842921-7e48-4d66-b5b6-b0a93d2b8573_nsbn8u.jpg",
    },
    {
      name: "Oreste Abizera",
      position: "Full stack Developer",
      image:
        "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201107/T043BG5SCR5-U043KF5598E-5aa2a6f547b8-512_sl65kg.png",
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

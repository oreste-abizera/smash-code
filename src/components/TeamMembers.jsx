import React from "react";
import TeamMember from "./TeamMember";

const TeamMembers = (props) => {
  const members = [
    {
      name: "Muhammad Ismail",
      position: "CEO & Founder",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2F209397729_1201098033685868_1434788942201818518_n.jpg%20ugPadwvN?alt=media&amp;token=5d0b72ce-b59f-4116-a60b-c48b30cb8571",
      isExpanded: true,
    },
    {
      name: "Muhammad Talha Khan",
      position: "Frontend Web Developer",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2Ftalha.jpg%20QqQxquYH?alt=media&token=7f2f3d6a-0346-4b5c-8743-01d90e5933e9",
    },
    {
      name: "Muhammad Waqas",
      position: "Blockchain Developer",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2FWhatsApp%20Image%202021-08-02%20at%205.10.40%20PM.jpeg%20e6dAbanZ?alt=media&token=48a88807-1fc2-4e15-865d-38765d7c4e8e",
      hideAfter: true,
    },
    {
      name: "Muhammad Sufyan",
      position: "Mern Stack Developer",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2FSufyan1.jpg%20SAUPKaaJ?alt=media&token=206bc672-c36a-4128-bb79-5fdd2a886686",

      showBefore: true,
    },
    {
      name: "Danish Sajjad",
      position: "Graphic Designer & Video Editor",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2FNDF_8540.png%20LC5usmkL?alt=media&token=f714250c-526a-41d1-a305-fc033e92853c",
    },
    {
      name: "Sundas Saeed",
      position: "Digital Marketer",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2FReal%20flower%20Unique%20A%20to%20Z%20Alphabet%20dp%20pics%20for%20Whatsapp%20Facebook%20(19).jpeg%20xaGn0yYa?alt=media&token=94758d0b-04f6-4ddb-a82e-dcda37b5ef8a",
      hideAfter: true,
    },
    {
      name: "Nadir Mahmood",
      position: "Content Writer",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2FContent%20Writer.png%20rSYrPUND?alt=media&token=347a29e6-1a2d-4157-a1f6-493f26d64dad",

      showBefore: true,
    },
    {
      name: "Shahid Mahmood",
      position: "Web App Developer & Manager",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2Fshahid%20mahmood.jpg%20K5KCgVY9?alt=media&token=fb47e110-03f2-49d7-b691-4bc362c0246f",
    },
    {
      name: "Zeeshan Mubarak",
      position: "Web App Developer & Manager",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2FAI_Image.jpg%20WADXpQtY?alt=media&token=4f3cd73e-fcfe-4d0e-a117-918fbaeb4292",
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

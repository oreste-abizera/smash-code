import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectComponent from "./ProjectComponent";
import Title from "./Title";

const HomeProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Docterio",
      description:
        "This is a web app, developed in ReactJs by using Bootstrap framework. This web app is a complete remote hospital and it is compatible to use in mobile, tablets and in desktop.",
      image: "https://smashcode.dev/static/media/graphProj.8729c74a.png",
      gradient: "linear-gradient(180deg,#255FBC,#121212)",
      url: "https://docterio.netlify.app/",
    },
    {
      title: "Trippy Frens",
      description:
        "This is a full stack nft minting website. We converted figma design in to ReactJs website. Integrated Smart Contract and Connect wallet with Metamask.",
      image:
        "https://smashcode-trippyfrens.netlify.app/static/media/logo-colour.1c5979e0.svg",
      gradient: "linear-gradient(180deg,#FFA5A1,#121212)",
      url: "https://smashcode-trippyfrens.netlify.app/",
    },
    {
      title: "Pocktor",
      description:
        "This is a logo for a Software company, created in illustrator.",
      gradient: "linear-gradient(180deg,#008B9A,#121212)",
      url: "https://smashcode.dev/projects",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2F15-min.jpg?alt=media&token=5c6f8575-edf0-4c43-bc6e-874a10997c6a",
    },
    {
      title: "Background Change",
      description:
        "In this project, we have changed the whole background of the picture by using a beautiful structure. We created the image in Photoshop.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2Fbackchange.png?alt=media&token=46359ac6-b5f2-4a4b-bc37-1d8b9be9f5ab",
      gradient: "linear-gradient(180deg,#FFA5A1,#121212)",
      url: "https://smashcode-theme.netlify.app/public/whitepaper/",
    },
  ];
  return (
    <div className="mb-[8rem]">
      <Title title="Explore our done" subtitle="Projects" />
      <p className="text-white text-[1.2rem] mb-[1rem] max-w-[622px] py-[1rem]">
        Here are some samples of our done projects delivered to our great
        clients.
      </p>
      <ul className="text-white list-disc text-[1.2rem] leading-[1.5] pl-[1rem]">
        <li>Custom Web Design &amp; Development</li>
        <li>Blockchain Web Apps</li>
        <li>Graphic Designing</li>
        <li>Content &amp; Copy Writing</li>
      </ul>

      <div className="flex flex-wrap gap-x-[4%] gap-y-[13rem] mt-[12rem]">
        {projects.map((project, index) => {
          return (
            <ProjectComponent
              {...project}
              key={index}
              top={(index + 1) % 2 === 0}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-[8rem]">
        <button
          className="primary-btn mt-[8rem]"
          onClick={() => navigate("/projects")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default HomeProjects;

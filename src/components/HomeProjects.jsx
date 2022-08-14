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
      image: "https://smashcode.dev/static/media/webProj.10d46a28.jpeg",
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
      gradient: "linear-gradient(180deg,#1aaca2,#121212)",
      url: "https://smashcode.dev/projects",
      image: "https://smashcode.dev/static/media/graphProj.f2e62b97.png",
    },
    {
      title:
        "Ego: Your Biggest Enemy That holds you back From becoming successful",
      description:
        "In this blog, the writer elaborates how ego is preventing us from living our dream life? How can we get rid of ego to get financially independent? How ego comes in different guises?",
      image: "https://smashcode.dev/static/media/contentWriting.4d46e7f8.jpeg",
      gradient: "linear-gradient(180deg,#7E478B,#121212)",
      url: "https://medium.com/illumination/ego-your-biggest-enemy-that-holds-you-back-from-becoming-successful-b98c87222530",
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

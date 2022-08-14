import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectComponent from "../components/ProjectComponent";
import Title from "../components/Title";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Kitab",
      description:
        "This website is developed in HTML, CSS, and JavaScript. This landing page design is created for purchasing E-Books. It can be used on both Android and iOS. Readers can conveniently read e-books on their mobiles, tablets, and desktops because of adjustable screens according to their devices.",
      video:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fvideos%2FKitab.m4v?alt=media&token=fc5df2ac-983d-4f40-8c91-a0de190e5f20",
      isVideo: true,
      gradient: "linear-gradient(180deg,#255FBC,#121212)",
      url: "https://smashcode-theme.netlify.app/public/kitab/",
    },
    {
      title: "Rhenyz",
      description:
        "This landing page was created for a company called Rhenyz. This web app was developed in HTML, CSS, and JavaScript. It contains beautiful animations with a hovering effect. It is compatible with mobile, tablets, and desktops.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2F18-min.jpg?alt=media&token=1a2abd98-d44e-4c28-ae49-e26644e1255c",
      gradient: "linear-gradient(180deg,#50B2BE,#121212)",
      url: "https://smashcode-rhenyx.netlify.app/",
    },
    {
      title: "S2 Market",
      description:
        "This is a Landing page of a business website containing cool animations with smooth scrolling. It is created in Html, CSS and JavaScript.",
      gradient: "linear-gradient(180deg,#7E478B,#121212)",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2Fs2-market.jpg?alt=media&token=5d2d5514-8c46-4a7d-9474-0d992994b6c7",
      url: "https://smashcode-s2market.netlify.app/",
    },
    {
      title: "2584 Design",
      description:
        "This website developed in HTML, CSS, and JavaScript. This landing page created for a company called 2584 Designs. It works on both Android and iOS. Users can conveniently use the program on mobile, tablets, and desktops.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2F15-min.jpg?alt=media&token=5c6f8575-edf0-4c43-bc6e-874a10997c6a",
      gradient: "linear-gradient(180deg,#FFA5A1,#121212)",
      url: "https://smashcode-2584.netlify.app/",
    },
    {
      title: "Sebrapage",
      description:
        "This landing page developed in HTML, CSS, and JavaScript with beautiful animations and hovering effects. It works on both Android and iOS. Users can conveniently use the program on mobiles, tablets, and desktops.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2Fweb%20(38).jpg?alt=media&token=abefe10a-f3db-4977-bab5-5e2d87dadf31",
      url: "https://smashcode-sebrapage.netlify.app/",
      gradient: "linear-gradient(180deg,#FFCA28,#121212)",
    },
    {
      title: "EBookLP",
      description:
        "This website is developed in HTML, CSS, and JavaScript. The design of the landing page is created for E-Books with white paper. It can be used on both Android and iOS. Readers can conveniently read e-books on their mobiles, tablets, and desktops because of adjustable screens according to their devices.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/projects-images%2Fimages%2Fweb%20(3).jpg?alt=media&token=f688330f-924a-400b-b502-c3cc859901b3",
      url: "https://smashcode-theme.netlify.app/public/whitepaper/",
      gradient: "linear-gradient(180deg,#FFA5A1,#121212)",
    },
  ];
  return (
    <>
      <Navbar active={2} />
      <main className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-[6rem] py-[10rem]">
        <Title title="Explore our done" subtitle="Projects" />
        <p className="text-white text-[1.2rem] mb-[1rem] max-w-[622px] py-[1rem]">
          Here are some samples of our done projects delivered to our great
          clients.
        </p>

        <h1
          className="text-center text-white py-[1rem] font-medium mb-[0.5rem]"
          style={{ fontSize: "calc(1.3rem + 0.6vw)" }}
        >
          All Projects
        </h1>
        <div className="flex justify-center items-center flex-wrap py-[12px] px-[5px]">
          <button className="rounded-[50px] py-[12px] px-[16px] my-[5px] mx-[4px] text-white bg-[#1aaca2]">
            Web Development
          </button>
          <button className="bg-transparent border-[1px] border-[#1aaca2] rounded-[50px] py-[12px] px-[16px] my-[5px] mx-[4px] text-white hover:bg-[#1aaca2] transition-all">
            Graphic Design
          </button>
          <button className="bg-transparent border-[1px] border-[#1aaca2] rounded-[50px] py-[12px] px-[16px] my-[5px] mx-[4px] text-white hover:bg-[#1aaca2] transition-all">
            Content Writing
          </button>
          <button className="bg-transparent border-[1px] border-[#1aaca2] rounded-[50px] py-[12px] px-[16px] my-[5px] mx-[4px] text-white hover:bg-[#1aaca2] transition-all">
            Blockchain
          </button>
        </div>

        <div className="flex items-center justify-center text-white">
          <button className="py-[5px] px-[8px] my-[8px] mx-[1px] outline-none text-white bg-[#1aaca2] rounded-l-[8px]">
            Landing Page
          </button>
          <button className="py-[5px] px-[8px] my-[8px] mx-[1px] outline-none bg-white text-[#1aaca2] hover:text-white hover:bg-[#1aaca2]">
            Frontend
          </button>
          <button className="py-[5px] px-[8px] my-[8px] mx-[1px] outline-none bg-white text-[#1aaca2] hover:text-white hover:bg-[#1aaca2]">
            Functionality
          </button>
          <button className="py-[5px] px-[8px] my-[8px] mx-[1px] outline-none bg-white text-[#1aaca2] hover:text-white hover:bg-[#1aaca2] rounded-r-[8px]">
            Fullstack
          </button>
        </div>

        <div className="flex flex-wrap gap-x-[4%] gap-y-[13rem] my-[12rem]">
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
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
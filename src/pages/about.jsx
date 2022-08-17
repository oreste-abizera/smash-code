import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamMembers from "../components/TeamMembers";
import Title from "../components/Title";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar active={5} />
      <main className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-[6rem] py-[10rem]">
        <div className="w-full flex flex-col lg:flex-row border-r-[2px] border-dashed border-r-[#1aaca2]">
          <div className="w-full lg:w-1/2">
            <Title title={"Who we"} subtitle="Are?"></Title>
            <p className="text-white py-[15px] px-[4px] text-[1.2rem] mb-[1rem]">
              Smash Code is a team of skilled Developers, Graphic Designers, and
              Copy Writers committed to fulfilling the needs of our clients to
              their satisfaction level. We work hard to keep up with innovative
              solutions. We focus on unique designs and robust development from
              start to finish so that you remain focused on your core business.
            </p>
            <button
              className="primary-btn"
              onClick={() => navigate("/contact")}
            >
              Ask a Question
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="https://smashcode.dev/static/media/unique.4217a688.png"
              alt=""
              className="w-3/4 rotate-animation"
            ></img>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row border-l-[2px] border-dashed border-l-[#1aaca2] pl-[2rem] my-[4rem]">
          <div className="w-full lg:w-1/2">
            <Title title={"Our"} subtitle="Missions"></Title>
            <p className="text-white py-[50px] px-[4px] text-[1.2rem] mb-[1rem]">
              Smash Code aims to provide depth and breadth services to our
              valuable customers with free support all the time. Our team is
              committed to going the extra mile to take your business to the
              next level.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-center">
            <img
              src="https://smashcode.dev/static/media/heroSvg2.3abbf7ab.svg"
              alt=""
              className="w-3/4"
            ></img>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row border-r-[2px] border-dashed border-r-[#1aaca2] pr-[2rem] mb-[4rem]">
          <div className="w-full lg:w-1/2">
            <Title title={"Technologies We"} subtitle="Use"></Title>
            <img
              src="https://smashcode.dev/static/media/responsive.3997ce39.png"
              alt=""
              className="w-3/4 ml-[4rem]"
            ></img>
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-center">
            <p className="text-white py-[50px] px-[4px] text-[1.2rem] mb-[1rem]">
              To create robust and responsive websites, web apps, and full-stack
              web apps, we use next-generation programming languages such as
              HTML, CSS, JS, ReactJs and Firebase, and for graphic designing we
              use Adobe Illustrator &amp; Photoshop.
            </p>
          </div>
        </div>
        <div className="w-full border-r-[2px] border-dashed border-r-[#1aaca2] pr-[2rem] my-[4rem]">
          <Title title={"Meet our"} subtitle="Team"></Title>
          <TeamMembers />
        </div>

        <div className="w-full flex flex-col lg:flex-row border-l-[2px] border-dashed border-l-[#1aaca2] pl-[2rem]">
          <div className="w-full lg:w-1/2">
            <Title title={"Our"} subtitle="Story"></Title>
            <p className="text-white py-[70px] px-[4px] text-[1.2rem] mb-[1rem]">
              Smash Code is a Web Design &amp; Development Company based in
              Faisalabad, Pakistan founded in 2019 Our team consists of skilled
              Web Designers &amp; Developers, Graphic Designers, and Copy
              Writes. We offer quality services of unique web designs &amp;
              robust developments, professional business logo &amp; poster
              design, and engaging content for web pages. We have worked with
              great clients worldwide, ranging from startups to large firms.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-center">
            <img
              src="https://smashcode.dev/static/media/heroSvg.2ad897b3.svg"
              alt=""
              className="w-3/4"
            ></img>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;

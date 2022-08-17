import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
        <div className="w-full flex flex-col lg:flex-row border-r-[2px] border-dashed border-r-[#1aaca2] pr-[2rem] my-[4rem]">
          <Title title={"Meet our"} subtitle="Team"></Title>
          <div className="w-full flex justify-center flex-wrap text-white mt-[10rem]">
            <div className="w-[33.333333]">
              <div className="team-member w-[200px] h-[200px] rounded-full border-[3px] border-[#1aaca2] relative flex items-center justify-center my-0 mx-auto mt-[3rem]">
                <div className="w-full h-full p-[15px] rounded-full flex flex-col items-center justify-center overflow-hidden text-center before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:border-[3px] before:border-[#17cae2]">
                  <h2 className="text-[1.4rem] pt-[20px] font-medium mb-[0.5rem]">
                    Muhammad Ismail
                  </h2>
                  <p className="font-semibold text-[0.9rem] text-[#1aaca2]">
                    CEO &amp; Founder
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full overflow-hidden p-[3px]"
                  style={{
                    transition: "all 0.3s linear",
                    zIndex: 111,
                    backgroundColor: "rgb(32 32 32)",
                  }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2F209397729_1201098033685868_1434788942201818518_n.jpg%20ugPadwvN?alt=media&amp;token=5d0b72ce-b59f-4116-a60b-c48b30cb8571"
                    alt="Muhammad Ismail"
                    className="w-full h-full rounded-full"
                  ></img>
                </div>
              </div>
            </div>
          </div>
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

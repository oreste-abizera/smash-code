import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import svg from "../assets/svg/contact.svg";
import namesvg from "../assets/svg/name.svg";
import emailsvg from "../assets/svg/email.svg";

const ContactPage = () => {
  return (
    <>
      <Navbar active={9} />
      <main className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-[6rem] py-[12rem] pb-[8rem] text-white">
        <h1
          className="text-white text-center mb-[1.5rem] font-medium leading-[1.2]"
          style={{ fontSize: "calc(1.375rem + 1.5vw)" }}
        >
          Talk to Us
        </h1>
        <h6 className="text-center text-[1.25rem] font-semibold leading-[1.6] tracking-[0.0075em]">
          Let's discuss your project. Feel free to send us your queries and
          details.
        </h6>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-[6rem] gap-y-[4rem]">
          <div className="w-full lg:w-1/2 text-center ">
            <img src={svg} alt=""></img>
          </div>
          <div className="w-full lg:w-1/2 text-center ">
            <form className="p-[15px] pl-[40px]">
              <div
                className="bg-[#f2f6f8] h-[4rem] my-[15px] py-[0.3rem] focus:h-[4.5rem] hover:h-[4.5rem] px-[2.5rem] rounded-[2rem] border-none flex items-center gap-[1rem]"
                style={{
                  boxShadow: "0 0 0 1.5pt #1aaca2",
                  transition: "all 1s",
                }}
              >
                <img src={namesvg} className="h-1/2"></img>
                <input
                  className="flex-1 outline-none bg-transparent h-full text-[1.3rem] text-[#838788] placeholder:text-[1.3rem] placeholder:text-[#838788] font-semibold placeholder:font-semibold"
                  placeholder="Name"
                ></input>
              </div>
              <div
                className="bg-[#f2f6f8] h-[4rem] my-[15px] py-[0.3rem] focus:h-[4.5rem] hover:h-[4.5rem] px-[2.5rem] rounded-[2rem] border-none flex items-center gap-[1rem]"
                style={{
                  boxShadow: "0 0 0 1.5pt #1aaca2",
                  transition: "all 1s",
                }}
              >
                <img src={emailsvg} className="h-1/2"></img>
                <input
                  type={"email"}
                  className="flex-1 outline-none bg-transparent h-full text-[1.3rem] text-[#838788] placeholder:text-[1.3rem] placeholder:text-[#838788] font-semibold placeholder:font-semibold"
                  placeholder="Email"
                ></input>
              </div>
              <div
                className="bg-[#f2f6f8] h-[14rem] my-[15px] py-[0.3rem] focus:h-[14.5rem] hover:h-[14.5rem] px-[2.5rem] rounded-[2rem] border-none flex items-center gap-[1rem]"
                style={{
                  boxShadow: "0 0 0 1.5pt #1aaca2",
                  transition: "all 1s",
                }}
              >
                <textarea
                  className="flex-1 outline-none bg-transparent h-full text-[1.3rem] text-[#838788] placeholder:text-[1.3rem] placeholder:text-[#838788] font-semibold placeholder:font-semibold resize-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="font-bold h-[2.9rem] leading-[2.9rem] px-[3rem] rounded-[3rem] mt-[2rem] text-[1.3rem]"
                style={{
                  backgroundSize: "300% 100%",
                  transition: "all 0.3s",
                  backgroundImage:
                    "linear-gradient(131deg,#40e0d6,#1aaca2,#40e0d6,#136e68)",
                }}
              >
                Send a message
              </button>
            </form>

            <div className="mt-[1.5rem]">
              <p className="text-[1.2rem] mb-[1rem]">
                <span className="text-[#1aaca2]">Note:</span> If you find any
                issue with our website, let us know about your valuable feedback
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

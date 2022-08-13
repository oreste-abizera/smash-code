import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBook,
  FaServicestack,
  FaTwitter,
  FaWhatsapp,
  FaGoogle,
} from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
// import { GiBlackBook } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
// import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import logo from "../assets/images/web/logopng.png";

const Footer = (props) => {
  const links = [
    { title: "Home", path: "/", icon: <FaHome /> },
    { title: "About", path: "/about", icon: <FaUser /> },
    { title: "Contact", path: "/contact", icon: <FaPhone /> },
    { title: "Services", path: "/services", icon: <FaServicestack /> },
    { title: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { title: "Blogs", path: "/blog", icon: <FaBook /> },
  ];
  return (
    <footer className="w-full">
      <div className="w-full px-4 lg:px-8 bg-[#151414] py-10">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-y-[2rem] border-b-[1px] border-b-[#373636] pb-[3rem]">
          <div className="flex gap-4">
            <div>
              <FaMapMarkerAlt size={60} color="1aaca2" />
            </div>
            <div className="">
              <p className="text-white text-xl">Location</p>
              <p className="text-[#757575] text-lg">Pakistan</p>
            </div>
          </div>

          {/* whatsapp */}
          <div className="flex gap-4">
            <div>
              <BsPhone size={60} color="1aaca2" />
            </div>
            <div className="">
              <p className="text-white text-xl">Contact (whatsapp)</p>
              <p className="text-[#757575] text-lg">+92 3071991737</p>
            </div>
          </div>

          {/* email */}
          <div className="flex gap-4">
            <div>
              <BsEnvelope size={60} color="1aaca2" />
            </div>
            <div className="">
              <p className="text-white text-xl">Email</p>
              <p className="text-[#757575] text-lg">smashcode.dev@gmail.com</p>
            </div>
          </div>
        </div>

        {/* next section */}
        <div className="flex flex-col lg:flex-row lg:justify-between py-[3rem] gap-y-[2rem]">
          <div className="w-full lg:w-1/3">
            <img src={logo} alt="" className="max-w-[120px]"></img>
            <p className="text-[#7e7e7e] m-4">
              Smash Code is a Web Design &amp; Development Company based in
              Pakistan, founded in 2019. We are a team of skilled Web Designers
              &amp; Developers, Graphic Designers, and Content &amp; Copy
              Writers.
            </p>
          </div>

          <div className="w-full lg:w-1/3 px-4">
            <h1 className="text-white text-[20px]">Quick - Links</h1>
            <div className="mb-[40px] mt-[15px] h-[2px] w-[50px] bg-[#1aaca2]"></div>
            <div className="flex flex-wrap gap-y-[1rem]">
              {links.map((link, index) => {
                return (
                  <div
                    className="w-1/2 flex items-center gap-[0.5rem] cursor-pointer text-[#878787] text-[1em]"
                    key={index}
                  >
                    {link.icon}
                    <p className="text-[#878787] capitalize">{link.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h1 className="text-white text-[20px]">Social - Links</h1>
            <div className="mb-[40px] mt-[15px] h-[2px] w-[50px] bg-[#1aaca2]"></div>
            <div className="flex flex-wrap gap-[2rem]">
              <FaFacebookF className="bg-[#3b5998] text-white w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
              <FaTwitter className="bg-[#55acee] text-white w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
              <FaGithub className="bg-[#fff] text-black w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
              <FaLinkedin className="bg-[#0e76a8] text-white w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
              <FaInstagram className="bg-[#E1306C] text-white w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
              <FaYoutube className="bg-[#990412] text-white w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
              <FaWhatsapp className="bg-[#25D366] text-white w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
              <FaGoogle className="bg-[#ff5e14] text-white w-[44px] h-[44px] p-[7px] rounded-full text-[15px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#202020] flex items-center justify-center py-[24px]">
        <p className="text-[#6c757d]">
          Copyright &copy; 2022, All Right Reserved{" "}
          <span className="text-[#1aaca2] cursor-pointer">Smash Code</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

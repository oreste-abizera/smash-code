import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/web/logopng.png";

const Navbar = () => {
  const links = [
    { title: "Home", path: "/", active: true },
    { title: "Projects", path: "/projects" },
    { title: "Services", path: "/services" },
    { title: "Blogs", path: "/blog" },
    { title: "About", path: "/about" },
  ];
  return (
    <div className="fixed top-0 left-0 p-2 lg:p-4 w-full">
      <div className="w-full flex justify-between items-center bg-[#141414] border-[2px] border-[#1aaca2] rounded-[14px] p-2 px-4 lg:px-10">
        <img src={logo} alt="" className="w-[70px] lg:w-[90px]"></img>

        <div className="hidden lg:flex gap-[2rem]">
          {links.map((link) => (
            <Link key={link.title} to={link.path}>
              <div className="parent">
                <p
                  className={`${
                    link.active ? "text-[#1aaca2]" : "text-white"
                  } text-xl hover:text-[#1aaca2]`}
                >
                  {link.title}
                </p>
                <div
                  className={`${
                    link.active ? "" : "hidden-child"
                  } bg-[#1aaca2] h-[1px] w-[20px] mt-[10px] mx-auto`}
                ></div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div className="lg:hidden">
            <FaBars className="text-[#1aaca2]" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

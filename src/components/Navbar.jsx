import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/web/logopng.png";

const Navbar = ({ active = 1 }) => {
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/", active: active === 1 },
    { title: "Projects", path: "/projects", active: active === 2 },
    { title: "Services", path: "/services", active: active === 3 },
    { title: "Blogs", path: "/blogs", active: active === 4 },
    { title: "About", path: "/about", active: active === 5 },
  ];

  const [navShown, setnavShown] = useState(false);
  const toggleNavShown = () => {
    setnavShown(!navShown);
  };
  return (
    <>
      {navShown && (
        <div
          className="fixed w-screen h-screen top-0 left-0 lg:hidden"
          style={{ zIndex: 1000000 }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              filter: "blur(4px)",
              background: "rgba(0,0,0,.404)",
            }}
            onClick={toggleNavShown}
          ></div>

          <nav
            className="absolute top-0 left-0 bg-[#141414] overflow-x-hidden overflow-y-auto border-r-[2px] border-r-[#1aaca2] flex flex-col h-full w-[70%]"
            style={{
              transition: "left .4s cubic-bezier(.645,.045,.355,1)",
            }}
          >
            <div
              className="pt-[12px] pb-[15px] w-full flex items-center justify-center"
              style={{
                borderBottom: "1px solid hsla(0,0%,100%,.418)",
              }}
            >
              <Link to={"/"}>
                <img src={logo} alt="" className="w-[100px] mx-[75px]"></img>
              </Link>
            </div>

            <ul className="py-[25px]">
              {links.map((link, index) => {
                return (
                  <li
                    className="w-full "
                    key={index}
                    style={{
                      borderBottom:
                        ".3px solid hsla(0,0%,76.1%,.054901960784313725)",
                    }}
                  >
                    <p
                      className={`${
                        link.active ? "text-[#1aaca2]" : "text-white"
                      } text-[1rem] py-[15px] pr-[10px] pl-[16px] text-center uppercase cursor-pointer`}
                      onClick={() => {
                        navigate(link.path);
                      }}
                    >
                      {link.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      <div
        className="fixed top-0 left-0 p-2 lg:p-4 w-full"
        style={{ zIndex: 99999 }}
      >
        <div className="w-full flex justify-between items-center bg-[#141414] border-[2px] border-[#1aaca2] rounded-[14px] p-2 px-4 lg:px-10">
          <img
            src={logo}
            alt=""
            className="w-[70px] lg:w-[90px] cursor-pointer"
            onClick={() => navigate("/")}
          ></img>

          <div className="hidden lg:flex gap-[2rem]">
            {links.map((link) => (
              <Link key={link.title} to={link.path}>
                <div className="parent">
                  <p
                    className={`${
                      link.active ? "text-[#1aaca2]" : "text-white"
                    } text-xl hover:text-[#1aaca2] uppercase`}
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
              {navShown ? (
                <div
                  className="border-[2px] border-[#1aaca2] rounded-full p-2 cursor-pointer"
                  onClick={toggleNavShown}
                >
                  <FaTimes className="text-[#1aaca2]" size={22} />
                </div>
              ) : (
                <FaBars
                  className="text-[#1aaca2]"
                  size={30}
                  onClick={toggleNavShown}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

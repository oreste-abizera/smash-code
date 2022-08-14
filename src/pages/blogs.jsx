import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BlogsPage = () => {
  return (
    <>
      <Navbar active={4} />
      <main className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-[6rem] py-[10rem]"></main>
      <Footer />
    </>
  );
};

export default BlogsPage;

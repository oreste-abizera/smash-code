import React from "react";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecentBlogs from "../components/RecentBlogs";

const BlogsPage = () => {
  const categories = [
    "Technology",
    "Freelancing",
    "Cryptocurrency",
    "Digital Marketing",
    "Programming Languages",
    "Success Stories",
  ];
  return (
    <>
      <Navbar active={4} />
      <main className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-[6rem] py-[10rem]">
        <FeaturedBlogs />
        <h1 className="mt-[4rem] text-white text-[1.75rem] tracking-[0.00735em] leading-[1.235] mb-[1rem]">
          All Categories
        </h1>
        <div className="flex flex-wrap mb-[4rem]">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-transparent border-[1px] border-[rgba(255, 255, 255, 0.23)] text-white h-[32px] text-[0.8125rem] rounded-[16px] m-[0.5rem] px-[12px] truncate hover:px-[16px]"
              style={{
                transition: "all 0.3s",
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <RecentBlogs />
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;

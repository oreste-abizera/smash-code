import React from "react";
import Title from "./Title";

const RecentBlogs = () => {
  const blogs = [
    {
      title: "Jeff Bezos Can Teach You Priceless Business Lesson...",
      subtitle:
        "Jeff Bezos, the founder of Amezon.com, teaches us invaluable business lessons.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F%200Sf8vavzWBJeff-Bezos-Can-Teach-You-Priceless-Business%C2%A0Lessons.jpg?alt=media&token=fbbfd679-d24f-48de-a36e-6502fa5d2ad4",
      views: 8,
    },
    {
      title: "Warren Buffet, A legendary Investor and Philanthro...",
      subtitle:
        " Warren Buffet is a legendry investor whose quotes and  life story can teach you  the art of living",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F%20abiTJvHUgYWarren-Buffet%2C-A-legendary-Investor-and-Philanthropist-who-can-Teach-You-the-Art-of%C2%A0Living.jpg?alt=media&token=003be5ff-8700-4b6c-9e62-2f8a7e12cfde",
      views: 17,
    },
    {
      title: "How Bill Gates's Success Story Makes Us a Better H...",
      subtitle:
        "Know about Bill Gates's success story and services for humanity and get inspired.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F%20stiwp4ydZmHow-Bill-Gates's-Success-Story-Makes-Us-a-Better-Human-Being%20(1).jpg?alt=media&token=bb2f7572-03e8-47f1-975b-a3ed32443805",
      views: 12,
    },
    {
      title: "How Jack Ma Success Story Helps Us Become successf...",
      subtitle:
        "Jack Ma's success story can help us become successful in the 21st Century",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2FHow-Jack-Ma-Success-Story-Helps-Us-Become-successful-in-the-21st%C2%A0Century.jpg%20tppzFrxUSZ?alt=media&token=01d5ea4a-5464-4fee-ba6e-3ac3dd18e74a",
      views: 14,
    },
    {
      title: "Most In-Demand 15 Skills of 2025...",
      subtitle:
        "Discover 15 most in-demand future skills of 2025 released by the World Economic Forum ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2FMost-In-Demand-15-skills-of%C2%A02025(5).jpg%20b1hPcxiheH?alt=media&token=f7433cad-6006-4410-9157-026a8d40095d",
      views: 17,
    },
    {
      title: "The Top 7 Freelancing Tips For Developers in 2022...",
      subtitle:
        "This blog is for developers who want to grow as a freelancer and make serious money ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2FThe-Top-7-Freelancing-Tips-For-Developers-in%C2%A02022-1.jpg%20YtdjMjuEQj?alt=media&token=9d535917-ec74-4377-87e7-d1d909c8c6d8",
      views: 17,
    },
    {
      title: "7 Steps to be an SEO Expert in 2022...",
      subtitle:
        "This blog will help you be an SEO expert in 2022 so that you can make serious money.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F7%20Steps%20to%20be%20an%20SEO%20Expert%20in%C2%A02022.jpg%20L5j4EuOeEA?alt=media&token=6ee136ec-587a-4b3d-b53d-7e0008c88da9",
      views: 16,
    },
    {
      title: "7 Steps to Become a Digital Marketing Expert in 20...",
      subtitle:
        "A comprehensive guide to digital marketing that can make you an expert digital marketer in 2022",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F7-Steps-to-Become-a-Digital-Marketing-Expert-in%C2%A02022.jpg%209h0pYMfvyz?alt=media&token=8acb0518-fa15-41ea-9b5a-88786d035852",
      views: 6,
    },
    {
      title: "How to become an expert Graphic Designer and make ...",
      subtitle:
        "This is a complete guide for those who want to become expert graphic designers in 2022",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2FHow-to-become-an-expert-Graphic-Designer-and-make%C2%A0money.jpg%20JLtF1xvZXm?alt=media&token=d5854e5c-dd5f-4bcd-a85c-1570bacb0cc7",
      views: 6,
    },
    {
      title: "6 Facts You Need to Know After Elon Musk Bought Tw...",
      subtitle:
        "This blog will tell you how Elon Musk is going to change Twitter after he has bought it for $44 billion. ",
      image:
        "https://firebasestorage.googleapis.com/v0/b/blogs-smash-code.appspot.com/o/blogs-images%2F6-Facts-You-Need-to-Know-After-Elon-Musk-Bought%C2%A0Twitter.jpg%207adGFu6CPU?alt=media&token=678d546f-c85e-4913-83c1-1c0a40db14b7",
      views: 14,
    },
  ];
  return (
    <div className="text-white">
      <Title title="Recent" subtitle="Blogs" />
      <div className="flex flex-wrap justify-between">
        {blogs.map((blog, index) => {
          return (
            <div
              key={index}
              className="w-[49%] lg:w-[32%] rounded-[8px] mt-[4px] mb-[8px] overflow-hidden"
              style={{
                border: "1px solid rgba(96,200,193,.14901960784313725)",
                boxShadow: "2px 2px 15px rgb(0 0 0 / 16%)",
                background: "rgba(0,0,0,.13)",
                transition: "all 0.3s",
                height: "max-content",
              }}
            >
              <div className="w-full bg-gray-100">
                <img
                  className="w-full h-full object-fill scale-img"
                  src={blog.image}
                  alt=""
                ></img>
              </div>

              <div className="min-h-[170px] pt-[15px] px-[12px] pb-[6px]">
                <h1 className="text-white text-[18px] lg:text-[22px] font-bold line-clamp-2">
                  {blog.title}
                </h1>
                <p className="mt-[4px] text-[14px] lg:text-[16px] line-clamp-3">
                  {blog.subtitle}
                </p>
              </div>

              <div
                className="py-[7px] px-[12px] flex items-center justify-between"
                style={{
                  borderTop: "1px solid rgba(96,200,193,.3568627450980392)",
                }}
              >
                <div
                  className="w-[34px] h-[34px] rounded-full cursor-pointer flex items-center justify-center"
                  style={{
                    background: "rgba(0,255,255,.123)",
                    transition: "all 0.3s",
                  }}
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 1024 1024"
                    fill="#1aaca2"
                  >
                    <path d="M768 853.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM256 597.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM768 170.667c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333zM768 597.333c-52.437 0-98.688 24.107-130.005 61.312l-213.675-123.392c1.067-7.637 2.347-15.275 2.347-23.253 0-4.779-1.024-9.259-1.408-13.909l218.283-126.037c31.104 33.408 75.179 54.613 124.459 54.613 94.251 0 170.667-76.416 170.667-170.667s-76.416-170.667-170.667-170.667c-94.251 0-170.667 76.416-170.667 170.667 0 14.208 2.261 27.819 5.504 41.003l-205.867 118.912c-30.763-45.013-82.389-74.581-140.971-74.581-94.251 0-170.667 76.416-170.667 170.667s76.416 170.667 170.667 170.667c55.467 0 104.235-26.88 135.424-67.84l209.195 120.747c-2.048 10.539-3.285 21.333-3.285 32.427 0 94.251 76.416 170.667 170.667 170.667s170.667-76.416 170.667-170.667c0-94.251-76.416-170.667-170.667-170.667z"></path>
                  </svg>
                </div>

                <div className="flex gap-[0.5rem] items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    class="views-icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                  </svg>
                  <p className="text-[#1aaca2] text-[16px]">
                    {blog.views} views
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-[4rem] flex items-center justify-center">
        <button className="primary-btn">Load more</button>
      </div>
    </div>
  );
};

export default RecentBlogs;

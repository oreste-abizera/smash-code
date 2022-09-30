import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectComponent from "../components/ProjectComponent";
import Title from "../components/Title";
import projects from "../assets/data/projects.json";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = React.useState(1);
  const [activeSubCategory, setActiveSubCategory] = React.useState(1);

  const categories = [
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "Blockchain",
  ];
  const subCategories =
    activeCategory === 1
      ? ["Landing Page", "Frontend", "Functionality", "Fullstack"]
      : activeCategory === 2
      ? ["CV Design", "Photo Editing", "Logo Design"]
      : activeCategory === 3
      ? ["Copy Writing", "Blog Writing"]
      : ["NFT Landing Page", "NFT Minting"];

  useEffect(() => {
    setActiveSubCategory(1);
  }, [activeCategory]);

  const displayProjects = projects.filter(
    (project) =>
      project.category === activeCategory &&
      project.subCategory === activeSubCategory
  );

  return (
    <>
      <Navbar active={2} />
      <main className="bg-[#363947] w-full min-h-screen px-4 lg:px-[6rem] py-[10rem]">
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
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index + 1)}
              className={
                activeCategory === index + 1
                  ? "rounded-[50px] py-[12px] px-[16px] my-[5px] mx-[4px] text-white bg-[#008B9A]"
                  : "bg-transparent border-[1px] border-[#008B9A] rounded-[50px] py-[12px] px-[16px] my-[5px] mx-[4px] text-white hover:bg-[#008B9A] transition-all"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center justify-center text-white">
          {subCategories.map((subCategory, index) => (
            <button
              onClick={() => setActiveSubCategory(index + 1)}
              className={
                (index === 0 ? "rounded-l-[8px] " : "") +
                (activeSubCategory === index + 1
                  ? "py-[5px] px-[8px] my-[8px] mx-[1px] outline-none text-white bg-[#008B9A]"
                  : "py-[5px] px-[8px] my-[8px] mx-[1px] outline-none bg-white text-[#008B9A] hover:text-white hover:bg-[#008B9A]")
              }
              key={index}
            >
              {subCategory}
            </button>
          ))}
        </div>

        <div className="w-full lg:hidden relative text-white pt-[2rem]">
          <div className="absolute h-full w-[3px] bg-[#008B9A] left-0 right-0 mx-auto"></div>
          {subCategories.map((subCategory, index) =>
            index % 2 === 0 ? (
              <div
                className="w-[51%] flex items-center justify-between py-[0.2rem] pt-[2.5rem]"
                style={{ marginRight: "100px" }}
              >
                <button
                  className={
                    "py-[5px] px-[8px] my-[8px] mx-[1px] outline- rounded-l-[8px] " +
                    (activeSubCategory === index + 1
                      ? "text-white bg-[#008B9A]"
                      : "bg-white text-[#008B9A] hover:text-white hover:bg-[#008B9A]")
                  }
                  onClick={() => setActiveSubCategory(index + 1)}
                >
                  {subCategory}
                </button>
                <div className="h-[12px] w-[12px] bg-[#008B9A] rounded-full"></div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="w-[51%] flex items-center justify-between py-[0.2rem]">
                  <div className="h-[12px] w-[12px] bg-[#008B9A] rounded-full"></div>
                  <button
                    className={
                      "py-[5px] px-[8px] my-[8px] mx-[1px] outline-none rounded-r-[8px] " +
                      (activeSubCategory === index + 1
                        ? "text-white bg-[#008B9A]"
                        : "bg-white text-[#008B9A] hover:text-white hover:bg-[#008B9A]")
                    }
                    onClick={() => setActiveSubCategory(index + 1)}
                  >
                    {subCategory}
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-wrap gap-x-[4%] gap-y-[13rem] my-[12rem]">
          {displayProjects.map((project, index) => {
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

import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeFeedback from "../components/HomeFeedback";
import HomeProjects from "../components/HomeProjects";
import HomeServices from "../components/HomeServices";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#363947] w-full min-h-screen px-4 lg:px-[6rem] py-10">
        <Hero />
        <HomeProjects />
        <HomeServices />
        <HomeFeedback />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

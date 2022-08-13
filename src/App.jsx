import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeFeedback from "./components/HomeFeedback";
import HomeProjects from "./components/HomeProjects";
import HomeServices from "./components/HomeServices";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-[6rem] py-10">
        <Hero />
        <HomeProjects />
        <HomeServices />
        <HomeFeedback />
      </main>
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-8 py-10">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;

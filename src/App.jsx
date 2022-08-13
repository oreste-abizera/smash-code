import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[rgb(31,31,31)] w-full min-h-screen"></div>
      <Footer />
    </>
  );
}

export default App;

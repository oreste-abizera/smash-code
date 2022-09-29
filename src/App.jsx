import { Route, Routes } from "react-router-dom";
import "./App.css";
import FloatingChat from "./components/FloatingChat";
import AboutPage from "./pages/about";
import BlogsPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import ServicesPage from "./pages/services";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <FloatingChat />
    </>
  );
}

export default App;

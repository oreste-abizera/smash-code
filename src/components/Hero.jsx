import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage1 from "../assets/images/web/hero1.png";
import heroImage2 from "../assets/images/web/hero2.png";
import heroImage3 from "../assets/images/web/hero3.png";

const Hero = () => {
  let x;
  const images = [heroImage3, heroImage2, heroImage1];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage) => {
      let newImage = currentImage >= images.length - 1 ? 0 : currentImage + 1;
      return newImage;
    });
    if (x) x.refresh();
  };

  useEffect(() => {
    x = setInterval(nextImage, 5000);
    return () => clearInterval(x);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap py-[8rem]">
      <div className="w-full lg:w-2/3">
        <div className="text-white text-[4rem]">
          <p>What You Can Think</p>
          <p>We Can Develop It</p>
          <p>For You</p>
        </div>
        <div className="h-[0.7px] w-[30%] bg-[#1aaca2] my-[15px]"></div>
        <p className="text-[1.2rem] text-white my-[30px] max-w-[90%]">
          We create future-ready websites &amp; web apps via innovative digital
          solutions so that you can focus on your core business.
        </p>
        <button className="primary-btn" onClick={() => navigate("/contact")}>
          Let's talk
        </button>
      </div>
      <div className="w-full lg:w-1/3 pt-[4rem] flex items-center justify-center">
        {images.map((image, index) => (
          <img
            src={image}
            alt=""
            className={"w-full hero-image hidden"}
            onClick={nextImage}
            key={images[currentImage]}
          ></img>
        ))}
        <img
          src={images[currentImage]}
          alt=""
          className="w-full hero-image"
          key={images[currentImage]}
        ></img>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Title from "./Title";

const HomeServices = () => {
  return (
    <div className="mb-[8rem]">
      <Title title="Services we" subtitle="Offered" />
      <p className="text-white text-[1.2rem] mb-[1rem] max-w-[622px] py-[1rem]">
        Responsive Websites &amp; Web Apps, and Full Stack Web Apps Development
      </p>

      <ul className="text-white list-disc text-[1.2rem] leading-[1.5] pl-[1rem]">
        <li>
          Custom Websites &amp; Apps Development ( HTML, CSS, JS, ReactJs,
          Firebase)
        </li>
        <li>
          Blockchain Web Apps (Minting, Wallet Connectivity, Smart Contract
          Integration)
        </li>
        <li>
          Graphic Designing (Professional Business Logo Design, Poster Design,
          CV Design, Photo Editing)
        </li>
        <li>
          Content and Copy Writing (Engaging Web Pages, Sales Copy, Product
          Description, Blogs &amp; Articles)
        </li>
      </ul>
    </div>
  );
};

export default HomeServices;

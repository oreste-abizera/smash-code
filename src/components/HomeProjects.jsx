import React from "react";
import Title from "./Title";

const HomeProjects = () => {
  return (
    <div className="mb-[8rem]">
      <Title title="Explore our done" subtitle="Projects" />
      <p className="text-white text-[1.2rem] mb-[1rem] max-w-[622px] py-[1rem]">
        Here are some samples of our done projects delivered to our great
        clients.
      </p>
      <ul className="text-white list-disc text-[1.2rem] leading-[1.5] pl-[1rem]">
        <li>Custom Web Design &amp; Development</li>
        <li>Blockchain Web Apps</li>
        <li>Graphic Designing</li>
        <li>Content &amp; Copy Writing</li>
      </ul>
    </div>
  );
};

export default HomeProjects;

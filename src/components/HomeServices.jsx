import React from "react";
import ServiceComponent from "./ServiceComponent";
import Title from "./Title";

const HomeServices = () => {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "We focus on creating unique full-stack Web Apps & Responsive Websites via HTML, CSS, JS, ReactJs, and Firebase. We use next-generation programming languages and app-development platforms on the Google Cloud Platform.",
      icon: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"></path>
        </svg>
      ),
    },
    {
      title: "Blockchain Web Apps",
      description:
        "We do frontend of NFT & blockchain websites and apps and do smart contract integration using web3.js, Alchemy, Moralis, and other 3rd party libraries or tokens like ERC-20, ERC-720, and ERC-1155. In addition, we do wallet integration. These wallets include Metamask, Polygon, Coinbase, etc",
      icon: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
        </svg>
      ),
    },
    {
      title: "Graphics Designing",
      description:
        "We work hard to provide you professional business logo designs, poster designs, CV designs, and photo editing. We have skilled graphic designers who use prominent photo editing and manipulation software such as Adobe Photoshop, Illustrator, and Canva.",
      icon: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path>
        </svg>
      ),
    },
    {
      title: "Content Writing",
      description:
        "Our skilled content & copywriter produces quality content on Medium. Also, He helps businesses to build a prominent online presence by creating high-conversion web pages, sales copies, and blogs and articles. He has produced plenty of attention-grabbing content for different niches such as Businesses, SEO, Information Technology, Programming Languages, Civic Tech, Self-Improvement, Health, etc.",
      icon: (
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
        </svg>
      ),
    },
  ];
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

      <div className="flex flex-wrap gap-x-[4%] gap-y-[8rem] mt-[8rem]">
        {services.map((service, index) => {
          return <ServiceComponent {...service} key={index} />;
        })}
      </div>

      <div className="flex items-center justify-center">
        <button className="primary-btn mt-[8rem]">View More</button>
      </div>
    </div>
  );
};

export default HomeServices;

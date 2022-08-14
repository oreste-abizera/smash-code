import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceComponent from "../components/ServiceComponent";
import Title from "../components/Title";

const ServicesPage = () => {
  const services = [
    {
      title: "Custom Web App",
      description:
        "We focus on creating a modern, flexible, secure, cross-platform, and user-friendly web app so that it can meet spikes in demand and handle complex scenarios",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path>
        </svg>
      ),
    },
    {
      title: "Contract Integration / Minting",
      description:
        "We do smart Contract integration in which includes functionalities minting, whitelist, get data from Blockchain and update on it, buy tokens and etc",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z"
            opacity=".3"
          ></path>
          <path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"></path>
        </svg>
      ),
    },
    {
      title: "Wallet Connectivity",
      description:
        "We do wallet integration in Blockchain. These wallets include Metamask, Coinbase, Trust, Sollana, etc. We also connect these wallets with the front end",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
        </svg>
      ),
    },
    {
      title: "Landing Pages",
      description:
        "We pay special attention to create attention-grabbing landing pages that convince your users to take the required action. We use a combination of eye-catching backgrounds and images to make each section stand out.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"></path>
        </svg>
      ),
    },
    {
      title: "NFT Landing Pages",
      description:
        "We design unique NFT landing pages with awesome animations and themes. These landing pages have 5 to 7 sections that include, engaging content, Art slider, Roadmap, Team, Faq, etc.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M4 9h10.5v3.5H4zM4 14.5h10.5V18H4zM16.5 9H20v9h-3.5z"
            opacity=".3"
          ></path>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5.5 14H4v-3.5h10.5V18zm0-5.5H4V9h10.5v3.5zM20 18h-3.5V9H20v9z"></path>
        </svg>
      ),
    },
    {
      title: "Responsive websites",
      description:
        "We create responsive websites via CSS and JavaScript plugins. Our design has a flexible layout and images that work on various devices: mobile, desktop, tablet, etc. We create websites that efficiently deal with different media queries, screen sizes, resolutions, color capabilities, and resolutions.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path>
        </svg>
      ),
    },
    {
      title: "Full Stack Web Apps",
      description:
        "We develop full-stack Web Apps for both the front-end and back-end project directories. Apart from using HTML and CSS, we also use JavaScript, ReactJs, and Firebase to create full-stack web apps.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
        </svg>
      ),
    },
    {
      title: "Copy writing",
      description:
        "We create engaging web pages, landing pages, and sales copies to increase brand awareness that persuades users to take the required action.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path>
        </svg>
      ),
    },
    {
      title: "Blog & Artical writing",
      description:
        "When writing blogs, we focus on creating appealing graphics, magnetic headlines & subheadings, powerful calls to action, relevant internal links, and concise Meta descriptions so that our content engages readers to take the required action.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path>
        </svg>
      ),
    },
    {
      title: "Logo Design",
      description:
        "We create professional, distinctive, and simple in form business logo design so that it conveys your intended message to your potential customers.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22 9L12 2 2 9h9v13h2V9z"></path>
          <path d="M4.14 12l-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"></path>
        </svg>
      ),
    },
    {
      title: "Photo Editing",
      description:
        "Our skilled graphic designer aims to take a quality shot, choose relevant filters, adjust the Lux setting and create professional and eye-catching photos.",
      icon: (
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 15h2v2h-2v-2zm0-4h2v2h-2v-2zm2 8h-2v2c1 0 2-1 2-2zM13 3h2v2h-2V3zm8 4h2v2h-2V7zm0-4v2h2c0-1-1-2-2-2zM1 7h2v2H1V7zm16-4h2v2h-2V3zm0 16h2v2h-2v-2zM3 3C2 3 1 4 1 5h2V3zm6 0h2v2H9V3zM5 3h2v2H5V3zm-4 8v8c0 1.1.9 2 2 2h12V11H1zm2 8l2.5-3.21 1.79 2.15 2.5-3.22L13 19H3z"></path>
        </svg>
      ),
    },
  ];
  return (
    <>
      <Navbar active={3} />
      <main className="bg-[rgb(31,31,31)] w-full min-h-screen px-4 lg:px-[6rem] py-[10rem]">
        <Title title="Services we" subtitle="Offered" />
        <p className="text-white text-[1.2rem] mb-[1rem] max-w-[622px] py-[1rem]">
          Responsive Websites &amp; Web Apps, and Full Stack Web Apps
          Development
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
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;

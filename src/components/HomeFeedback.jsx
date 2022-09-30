import React from "react";
import Title from "./Title";

const HomeFeedback = () => {
  return (
    <div className="mb-[8rem] w-full">
      <Title title="Clients" subtitle="Feedback" />
      <div className="mt-[4rem] w-full flex flex-col lg:flex-row border-r-[2px] border-dashed border-r-[#008B9A]">
        <div className="w-full lg:w-[20%] pt-[4rem]">
          <div className="w-full relative min-h-[45vh] flying-avatars">
            {/* first  */}
            <div
              className="absolute -top-[25px] left-[50%] right-0 m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
              style={{
                animationDelay: "1s",
                animationDuration: "7s",
              }}
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200247/ce5acdf1-4ea5-4a4c-9082-ce521ca464e5_d9zqqt.jpg"
                alt="Osee"
              ></img>
            </div>
            {/* second  */}
            <div
              className="absolute top-[25px] left-[15px] m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
              style={{
                animationDelay: "0.5s",
                animationDuration: "7s",
              }}
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201107/T043BG5SCR5-U043KF5598E-5aa2a6f547b8-512_sl65kg.png"
                alt="Oreste"
              ></img>
            </div>
            {/* third  */}
            <div
              className="absolute top-auto -bottom-[15%] right-0 left-[50%] m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
              style={{
                animationDelay: "0.4s",
              }}
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201177/c97d82cf-ba90-4f9d-9dd6-6db045734f63_mthzec.jpg"
                alt="Valens"
              ></img>
            </div>
            {/* fourth  */}
            <div
              className="absolute top-[45%] -left-[5] m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
              style={{
                animationDelay: "0.9s",
              }}
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664223897/de261456-88ff-4c19-85b3-24608c9c5ef7_bkmjge.jpg"
                alt="Unknown"
              ></img>
            </div>
            {/* fifth  */}
            <div className="absolute top-[30%] left-[50%] right-0 m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden">
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664220642/f7b50543-a582-4c8a-843b-79054bb3474b_wjtcbz.jpg"
                alt="Unknown"
              ></img>
            </div>

            {/* sixth  */}
            <div
              className="absolute top-auto bottom-[50px] right-[50%] left-auto m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
              style={{
                animationDelay: "0.6s",
                animationDuration: "9s",
              }}
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664220626/7caece85-ebf2-45a3-9e02-7c15461c6c07_shzsgm.jpg"
                alt="Unknown"
              ></img>
            </div>
            {/* end */}
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <p className="text-[1.7rem] text-[#008B9A] leading-[5rem] flex justify-start mb-[1rem]">
            <span className="flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden mr-[15px]">
              <img
                src={
                  "https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200247/ce5acdf1-4ea5-4a4c-9082-ce521ca464e5_d9zqqt.jpg"
                }
                alt="OSEE"
                className="w-full object-cover text-center"
              ></img>
            </span>
            OSEE
          </p>
          <blockquote className="blockquote text-white max-w-[492px] text-[1.25rem] mb-[1rem]">
            <p className="mb-0 text-[1.7rem]">
              “SupermAn , my super hero , outstanding , elegant , very fast ,
              very patient , what could I possibly desire if I have you we love
              you a lot , and highly recommend”
            </p>
            <footer className="blockquote-footer mt-2 text-[#6c757d] text-[0.875em]">
              <a
                className="a-simple text-pri text-[#008B9A] cursor-pointer"
                rel="noreferrer"
              >
                Posted on &nbsp; <span title="Source Title">Fiverr</span>
              </a>
            </footer>
          </blockquote>
        </div>
        <div className="w-full lg:w-[20%] pt-[4rem]">
          <div className="w-full relative min-h-[45vh] flying-avatars">
            {/* first  */}
            <div
              className="absolute -top-[25px] left-[50%] m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
              style={{
                animationDelay: "1s",
                animationDuration: "7s",
              }}
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664200247/ce5acdf1-4ea5-4a4c-9082-ce521ca464e5_d9zqqt.jpg"
                alt="Osee"
              ></img>
            </div>
            {/* second */}
            <div
              style={{
                animationDelay: "0.7s",
                animationDuration: "5s",
              }}
              className="absolute top-[25px] left-[17px] m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664383375/d9a6939d-e89c-4b5c-a3b5-5ff64e48ea91_kicwe2.jpg"
                alt="Byishimo Eric"
              ></img>
            </div>
            {/* third */}
            <div
              style={{
                animationDelay: "0.4s",
              }}
              className="absolute bottom-[15%] top-auto right-0 left-[50%] m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664220626/7caece85-ebf2-45a3-9e02-7c15461c6c07_shzsgm.jpg"
                alt="Unknown"
              ></img>
            </div>
            {/* fourth */}
            <div
              style={{
                animationDelay: "1s",
                animationDuration: "0.9s",
              }}
              className="absolute top-[45%] -left-[5%] m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden"
            >
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664201177/c97d82cf-ba90-4f9d-9dd6-6db045734f63_mthzec.jpg"
                alt="Valens"
              ></img>
            </div>
            {/* fifth */}
            <div className="absolute right-0 top-[30%] left-[50%]  m-[12px] cursor-pointer flex w-[50px] h-[50px] bg-[#f3f3f3] border-[2px] border-[#a0a0a0] rounded-full items-center justify-center overflow-hidden">
              <img
                className="w-full object-cover text-center"
                src="https://res.cloudinary.com/dkndyyvmn/image/upload/v1664223897/de261456-88ff-4c19-85b3-24608c9c5ef7_bkmjge.jpg"
                alt="Aslam"
              ></img>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeedback;

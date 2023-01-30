import React, { useEffect } from "react";
import HeroSectionImg from "../Assests/HeroSectionImg.jpg";
import { BsStackOverflow } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GoMail } from "react-icons/go";
import { SiExpress } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import data from "../Assests/ProjectsData.json"

const Hero = () => {
  console.log(data)
  let mql = window.matchMedia("(min-width: 728px)");
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about" className="overflow-hidden">
      <div
        data-aos="zoom-in"
        className="my-12 mx-6 lg:mx-40 relative flex justify-around"
      >
        <div className="grid justify-center">
          <p className="text-base lg:text-xl font-semibold">Social</p>
          <a
            href="https://stackoverflow.com/users/19296050/manjesh-kumar-sharma"
            className="text-center"
          >
            <BsStackOverflow
              className="inline cursor-pointer hover:text-[#3be6be]"
              size={mql.matches ? 25 : 20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/manjesh-kumar-sharma/"
            className="text-center"
          >
            <AiFillLinkedin
              className="inline cursor-pointer hover:text-[#3be6be]"
              size={mql.matches ? 25 : 20}
            />
          </a>
          <a href="https://github.com/Manjeshkgp" className="text-center">
            <AiFillGithub
              className="inline cursor-pointer hover:text-[#3be6be]"
              size={mql.matches ? 25 : 20}
            />
          </a>
          <a href="mailto: manjeshkgp@gmail.com" className="text-center">
            <GoMail
              className="inline cursor-pointer hover:text-[#3be6be]"
              size={mql.matches ? 25 : 20}
            />
          </a>
        </div>
        <div className="relative w-2/3 h-[30vh] md:h-[40vh] lg:h-[70vh] md:w-1/2 flex justify-center">
          <img
            src={HeroSectionImg}
            alt=""
            className="object-cover rounded w-full h-full"
          />
          <div className="h-full w-full rounded bg-[#182a4d80] top-0 absolute hover:hidden"></div>
        </div>
        <div className="grid justify-center">
          <p className="text-base lg:text-xl font-semibold">Skills</p>
          <p className="text-center">
            <FaReact className="inline" size={mql.matches ? 25 : 20} />
          </p>
          <p className="text-center">
            <FaNodeJs className="inline" size={mql.matches ? 25 : 20} />
          </p>
          <p className="text-center">
            <SiExpress className="inline" size={mql.matches ? 25 : 20} />
          </p>
          <p className="text-center">
            <DiMongodb className="inline" size={mql.matches ? 25 : 20} />
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="my-2 pb-6 flex mx-6 lg:mx-40 border-b text-center"
      >
        <p className="mx-10">
          I am a skilled full-stack developer with expertise in technologies
          including NodeJS, Express, React, MongoDB, and other popular
          JavaScript libraries such as PassportJS. I excel in creating both
          simple and complex backends and have a strong ability to build
          frontends with advanced features like state management,
          authentication, real-time communication, and cookie handling using
          React, Redux, JWT, JS Cookie, and Socket IO, among others.
        </p>
      </div>
    </div>
  );
};

export default Hero;

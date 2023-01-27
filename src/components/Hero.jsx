import React from "react";
import HeroSectionImg from "../Assests/HeroSectionImg.jpg";
import { BsStackOverflow } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {DiMongodb} from "react-icons/di"
import {GoMail} from "react-icons/go"
import {SiExpress} from "react-icons/si"

const Hero = () => {
  let mql = window.matchMedia('(min-width: 728px)');
  return (
    <>
      <div className="my-12 mx-6 lg:mx-40 relative flex justify-around">
        <div className="grid justify-center">
          <p className="text-base lg:text-xl font-semibold">Social</p>
          <a href="https://stackoverflow.com/users/19296050/manjesh-kumar-sharma" className="text-center">
            <BsStackOverflow className="inline cursor-pointer hover:text-[#3be6be]" size={mql.matches?25:20}/>
          </a>
          <a href="https://www.linkedin.com/in/manjesh-kumar-sharma/" className="text-center">
            <AiFillLinkedin className="inline cursor-pointer hover:text-[#3be6be]" size={mql.matches?25:20}/>
          </a>
          <a href="https://github.com/Manjeshkgp" className="text-center">
            <AiFillGithub className="inline cursor-pointer hover:text-[#3be6be]" size={mql.matches?25:20}/>
          </a>
          <a href="mailto: manjeshkgp@gmail.com" className="text-center">
            <GoMail className="inline cursor-pointer hover:text-[#3be6be]" size={mql.matches?25:20}/>
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
            <FaReact className="inline" size={mql.matches?25:20}/>
          </p>
          <p className="text-center">
            <FaNodeJs className="inline" size={mql.matches?25:20}/>
          </p>
          <p className="text-center">
            <SiExpress className="inline" size={mql.matches?25:20}/>
          </p>
          <p className="text-center">
            <DiMongodb className="inline" size={mql.matches?25:20}/>
          </p>
        </div>
      </div>
      <div className="my-2 pb-6 flex mx-6 lg:mx-40 border-b text-center">
        <p className="mx-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
          dolorum laudantium! Consectetur quae est repellat quos asperiores
          culpa rem eius quia placeat obcaecati eum fugiat nesciunt nisi, ex
          delectus unde perferendis aliquam maxime nihil iste. Neque,
          voluptatibus sint veritatis cupiditate perferendis magnam, repudiandae
          aliquam, sapiente voluptates dolore quam dicta laboriosam.
        </p>
      </div>
    </>
  );
};

export default Hero;

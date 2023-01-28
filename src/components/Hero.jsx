import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div id="hero" className="overflow-x-hidden">
      <div data-aos="fade-right" data-aos-once={true} className="flex flex-col gap-6 items-start mt-24 h-[calc(100vh-12rem)] md:h-[30vh] lg:h-[calc(100vh-12rem)] mx-6 border-b lg:mx-40">
        <p className="text-base text-[#3be6be]">Hi my name is</p>
        <p className="text-3xl font-bold lg:text-[4rem] text-[#ccd6f6] lg:my-2">Manjesh Kumar Sharma</p>
        <p className="text-3xl font-bold lg:text-[4rem] text-[#7c839c] lg:my-2">I build Web Applications</p>
        <p className="text-base text-[#7c839c] lg:w-1/2 lg:my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          repellat qui inventore! Possimus, architecto et quia ea earum adipisci
          fugiat ipsum rem aliquid obcaecati provident maiores exercitationem
          quis reiciendis quo sapiente voluptates! Exercitationem modi, eum
          inventore minima id dicta perferendis, quas velit, veritatis
          laudantium eligendi. Odit, eaque! Nulla, tenetur a.
        </p>
      </div>
    </div>
  );
};

export default About;

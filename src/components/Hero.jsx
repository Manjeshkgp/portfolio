import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="hero" className="overflow-x-hidden">
      <div
        data-aos="fade-right"
        data-aos-once={true}
        className="flex flex-col gap-6 items-start mt-24 h-[calc(100vh-12rem)] md:h-[30vh] lg:h-[calc(100vh-10rem)] mx-6 border-b lg:mx-40"
      >
        <p className="text-base text-[#3be6be]">Hi, my name is</p>
        <p className="text-3xl font-bold lg:text-[4rem] text-[#ccd6f6] lg:my-2">
          Manjesh Kumar Sharma
        </p>
        <p className="text-3xl font-bold lg:text-[4rem] text-[#7c839c] lg:my-2">
          I build Web Applications
        </p>
        <p className="text-base text-[#7c839c] md:w-3/4 lg:w-1/2 lg:my-2">
          As a full-stack developer with a passion for innovation, I
          continuously strive to expand my skills and knowledge. My expertise
          lies in front-end development, particularly with React JS, which I
          have a strong affinity for. For design, I predominantly use
          TailwindCSS. In my free time, I enjoy learning about diplomacy and
          international affairs. An avid outdoor sports enthusiast, I also enjoy
          playing sports and watching inspiring or thrilling movies.
        </p>
      </div>
    </div>
  );
};

export default About;

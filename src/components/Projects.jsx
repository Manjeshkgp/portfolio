import React, { useEffect } from "react";
import { AiOutlineGithub, AiOutlineEye } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import projectsArr from "../Assests/ProjectsData.json";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="projects" className="overflow-hidden">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="800"
        className="flex justify-start items-start flex-wrap mx-6 lg:mx-40 mt-4 pb-4 border-b"
      >
        {projectsArr.map((singleProject)=>(<div key={singleProject.name} className="w-full mt-8 gap-2 relative md:w-1/2 lg:w-1/3 flex hover:bg-[#239066] hover:-translate-y-1 hover:transition-all transition-all flex-col justify-evenly rounded py-4 items-center">
          <img
            onClick={()=>window.open(singleProject.liveLink,"_blank")}
            className="w-[90%] h-48 object-cover rounded cursor-pointer"
            src={singleProject.imgLink}
            alt=""
          />
          <div onClick={()=>window.open(singleProject.liveLink,"_blank")} className="absolute top-4 bg-[#905f9262] h-48 w-[90%] hover:hidden rounded cursor-pointer"></div>
          <div className="w-[90%] flex justify-between items-center">
            <p className="text-2xl font-bold text-[#ccd6f6]">
              {singleProject.name}
            </p>
            <p className="text-2xl text-[#ccd6f6] flex gap-2">
              <a href={singleProject.githubLink || ""}><AiOutlineGithub className="hover:text-white cursor-pointer"/></a>
              <a href={singleProject.liveLink || ""}><AiOutlineEye className="hover:text-white cursor-pointer"/></a>
            </p>
          </div>
          <div className="w-[90%] flex flex-wrap gap-2 justify-around">
            {singleProject.techStack.map((stack)=>(<button key={stack} className="bg-[#2222225f] px-1 rounded font-semibold cursor-text">{stack}</button>))}
          </div>
          <p className="w-[90%] text-sm text-center">
            {singleProject.description}
          </p>
        </div>))}
        
      </div>
    </div>
  );
};

export default Projects;

import React, { useEffect } from "react";
import { AiOutlineGithub, AiOutlineEye } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="projects" className="overflow-x-hidden">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-duration="800"
        className="flex justify-start items-center flex-wrap mx-6 lg:mx-40 mt-4 pb-4 border-b"
      >
        <div className="w-full mt-8 gap-2 relative md:w-1/2 lg:w-1/3 flex hover:bg-[#239066] hover:-translate-y-1 hover:transition-all transition-all flex-col justify-evenly rounded py-4 items-center">
          <img
            className="w-[90%] h-48 object-cover rounded cursor-pointer"
            src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=750&dpr=2"
            alt=""
          />
          <div className="absolute top-4 bg-[#905f9262] h-48 w-[90%] hover:hidden rounded cursor-pointer"></div>
          <div className="w-[90%] flex justify-between items-center">
            <p className="text-2xl font-bold text-[#ccd6f6] cursor-pointer">
              Project Name
            </p>
            <p className="text-2xl text-[#ccd6f6] flex gap-2">
              <AiOutlineGithub className="hover:text-white cursor-pointer" />
              <AiOutlineEye className="hover:text-white cursor-pointer" />
            </p>
          </div>
          <div className="w-[90%] flex flex-wrap gap-2 justify-around">
            <button className="bg-[#2222225f] px-1 rounded font-semibold cursor-text">React</button>
            <button className="bg-[#2222225f] px-1 rounded font-semibold cursor-text">Firebase</button>
            <button className="bg-[#2222225f] px-1 rounded font-semibold cursor-text">TailwindCSS</button>
          </div>
          <p className="w-[90%] text-sm text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
            quibusdam vero animi veritatis temporibus ut tempora velit inventore
            aut cum deserunt excepturi. Optio iste ex placeat repellat eos
            assumenda deleniti excepturi nam perspiciatis inventore quaerat ea
            omnis autem corrupti dolores eveniet numquam recusandae tempore,
            explicabo dignissimos soluta nostrum pariatur! Perspiciatis, eos
            esse? Architecto rem eligendi labore quas maxime possimus incidunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full fixed z-[5] top-0 bg h-12 flex items-center justify-between backdrop-blur-lg">
        <div className="ml-4">
          <img
            src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&w=750&dpr=2"
            className="w-10 h-10 object-cover"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="mr-4 z-10 flex flex-col items-end md:hidden"
        >
          {open ? (
            <>
              <i className="w-10 h-1 bg-blue-300 block rotate-[135deg] transition-all absolute"></i>
              <i className="w-10 h-1 bg-blue-300 block rotate-[225deg] transition-all absolute"></i>
            </>
          ) : (
            <>
              <i className="w-10 h-1 bg-blue-300 mb-1 block transition-all"></i>
              <i className="w-9 h-1 bg-blue-300 mb-1 block transition-all"></i>
              <i className="w-8 h-1 bg-blue-300 mb-1 block transition-all"></i>
            </>
          )}
        </div>
        <nav
          className={
            open
              ? "absolute top-0 right-0 w-screen h-screen bg-[#1f453da3] flex flex-col justify-evenly items-center backdrop-filter backdrop-blur-sm bg-opacity-10 p-20 transition-all text-xl"
              : "hidden md:flex gap-12 lg:gap-24 md:mr-4 lg:mr-8 h-10 items-center"
          }
        >
          <div>
            <p className="text-[#3be6be] cursor-pointer hover:text-gray-300">
              About
            </p>
          </div>
          <div>
            <p className="text-[#3be6be] cursor-pointer hover:text-gray-300">
              Education
            </p>
          </div>
          <div>
            <p className="text-[#3be6be] cursor-pointer hover:text-gray-300">
              Projects
            </p>
          </div>
          <div>
            <p className="text-[#3be6be] cursor-pointer hover:text-gray-300">
              Contact
            </p>
          </div>
          <div>
            <button className="p-1 rounded bg-[#239066] cursor-pointer hover:bg-[#3be6be] hover:text-gray-700 text-gray-300">
              Resume
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

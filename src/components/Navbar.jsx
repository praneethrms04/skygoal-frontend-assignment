import React, { useState } from "react";
import { navLinks } from "../constaants";
import { close } from "../assets";
import { menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (title) => {
    setActive(title);
    const element = document.getElementById(title.toLowerCase());
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-4 shadow-md w-full top-0 left-0 flex fixed z-20  bg-white">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto py-4">
        <div className="font-bold text-2xl cursor-pointer flex">
          <p className="w-7 h-7 md:ms-0 text-[#F27A44]">Edutech</p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          <p
            className="text-gray-800 text-center hover:text-[#FDD36A] font-medium cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            Home
          </p>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-gray-800" : "text-gray-800"
              } hover:text-[#FDD36A] font-medium cursor-pointer`}
              onClick={() => handleNavClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <p className="text-gray-800  hover:text-[#FDD36A] font-medium cursor-pointer">
            Offers
          </p>
          <button className="btn bg-[#F27A44] text-white md:ml-8 hover:text-indigo-900 hover:bg-orange-200 font-semibold px-3 py-1 rounded-lg duration-500 ms-28">
            Shop Now
          </button>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[23px] h-[20px] object-contain "
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-teal-300 via-white-500 to-orange-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <p
                className="text-gray-800 text-center hover:text-indigo-400 font-medium cursor-pointer"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </p>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "pt-1 text-white" : "text-gray-800"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="hover:text-indigo-400">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

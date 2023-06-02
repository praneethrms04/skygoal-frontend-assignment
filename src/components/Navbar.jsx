import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constaants";

import * as assets from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="shadow-md w-full  top-0 left-0">
      <div
        className={`md:flex items-center justify-between py-4 md:px-10 px-7 ${
          scrolled ? "bg-white" : "bg-white"
        }`}
      >
        <Link className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <p className="w-7 h-7 text-[#F27A44]">Edutech</p>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <img src={assets.menu} alt="" className="bg-[#000]" />
          ) : (
            <img src={assets.menu} alt="" className="bg-[#000]" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12 bg-[#000]" : "top-[-490px] bg-[#000]"
          }`}
        >
          {navLinks.map((nav) => (
            <li
              className={`${
                active === nav.title ? "text-[#fff]" : "text-[#fff]"
              }md:ml-8 md:my-0 my-7 font-normal
             `}
              key={nav.id}
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`${nav.id}`}
                className="text-gray-800 rounded-lg hover:text-blue-400 duration-500 lg:mx-4"
              >
                {nav.title}
              </a>
            </li>
          ))}
          <p className="text-gray-800 hover:text-blue-400 duration-500 lg:ml-28 md:my-2 my-7 font-normal">
            Offers
          </p>
          <button className="btn bg-[#F27A44]  text-white md:ml-8 font-semibold px-3 py-1 rounded-lg duration-500 md:static">
            Shop Now
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

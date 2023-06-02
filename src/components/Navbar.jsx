import React, { useState } from "react";
import { navLinks } from "../constaants";

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleNavClick = (title) => {
    setActive(title);
    const element = document.getElementById(title.toLowerCase());
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 bg-white">
        <div className="font-bold text-2xl text-center cursor-pointer flex items-center gap-1">
          <p className="w-7 h-7 md:ms-0 ms-28 text-[#F27A44]">Edutech</p>
        </div>

        <ul className="md:flex md:items-center md:pb-0 pb-12">
          <p className="text-gray-800 text-center hover:text-blue-400 duration-500 lg:ml-28 md:my-2 my-7 font-normal cursor-pointer">
            Home
          </p>

          {navLinks.map((nav, ind) => (
            <li
              key={nav.id}
              className={`${
                active === `${nav.title}` ? "text-[#fff]" : "text-[#fff]"
              } md:ml-8 md:my-0 my-7 font-normal text-center`}
              onClick={() => handleNavClick(`${nav.id}`)}
            >
              <a
                href={`#${nav.id}`}
                className="text-gray-800 rounded-lg hover:text-blue-400 duration-500 lg:mx-4"
              >
                {nav.title}
              </a>
            </li>
          ))}
          <p className="text-gray-800 text-center hover:text-blue-400 duration-500 lg:ml-28 md:my-2 my-7 font-normal cursor-pointer">
            Offers
          </p>
          <button className="btn bg-[#F27A44] text-white md:ml-8 font-semibold px-3 py-1 rounded-lg duration-500 ms-28">
            Shop Now
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

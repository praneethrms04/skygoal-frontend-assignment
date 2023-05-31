import React, { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Schedules", link: "/" },
    { name: "Membership", link: "/" },
    { name: "Pricing", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <p className="w-7 h-7 text-[#F27A44]">Edutech</p>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? "Open" : "Close"}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-normal">
              <a
                href={link.link}
                className="text-gray-800 rounded-lg hover:text-blue-400 duration-500"
              >
                {link.name}
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
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;

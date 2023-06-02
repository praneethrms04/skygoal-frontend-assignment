import React from "react";
import * as assets from "../assets";

const About = () => {
  return (
    <div className="bg-[#F8E8EE] p-10 flex py-10 md:flex-row flex-col-reverse">
      <div className="flex flex-col md:p-20 gap-4 md:gap-0">
        <p className="font-center font-semibold md:text-xl md:text-md leading-6 text-gray-800">
          Discover the beauty of tropics
        </p>
        <div className="md:flex-col flex flex-row md:gap-0 gap-3  md:text-[70px] md:pt-4 ">
          <p className="font-bold">Tropical</p>
          <p className="font-bold ">Destinations</p>
          <p className="font-normal">For Student</p>
        </div>
        <div className="font-normal leading-5 text-gray-700 md:w-[550px] text-sm  md:pt-8">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </div>
        <button className="btn bg-[#F27A44]  text-white  font-semibold px-3 py-1 w-36 h-12 rounded-3xl mt-8">
          Sign Up
        </button>
      </div>
      <div className="flex-1 flex mb-10">
        <div className="">
          <img
            src={assets.profile}
            alt=""
            className="md:w-[440px]  w-[300px] h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

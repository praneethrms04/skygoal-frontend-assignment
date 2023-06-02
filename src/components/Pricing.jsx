import React from "react";

import * as assets from "../assets";
import { listitems } from "../constaants";

const Pricing = () => {
  return (
    <section className="flex lg:py-10 md:flex-row-reverse flex-col items-center lg:p-10 ">
      <div className="flex-1 flex items-center justify-center md:pr-16">
        <div className="relative pt-56">
          <img
            src={assets.semicircle}
            alt=""
            className="w-[220px] lg:w-[400px]"
          />
          <div>
            <img
              src={assets.girlpic}
              alt=""
              className="absolute lg:bottom-0 lg:right-6 bottom-0 right-5"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex-col items-center justify-center lg:p-28 p-10 ">
        <img src="" alt="" />
        <p className="text-[20px] font-semibold">Get 20% off for student</p>
        <p className="text-[20px] lg:text-[36px] font-bold">
          Students discounts available.
        </p>
        <h4 className="text-normal font-normal lg:text-[28px]">
          Get ready for some fun in the sun!
        </h4>
        <ul className="list-disc mx-5 my-3 lg:mt-8 ">
          {listitems.map((item) => (
            <li key={item.id} className="mt-2">
              {item.item}
            </li>
          ))}
        </ul>
        <button className="btn bg-[#F27A44]  lg:w-[200px] text-white font-semibold p-2 lg:mt-8 mt-4 rounded-2xl md:static">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Pricing;

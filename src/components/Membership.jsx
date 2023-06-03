import React from "react";
import * as assets from "../assets";
import { membershipdata } from "../constaants";

const Membership = () => {
  return (
    <div className="p-5 flex flex-col">
      <p className="text-2xl font-bold leading-6 lg:text-[40px] lg:px-10 px-5">
        Our Destinations
      </p>
      <section className="py-6 sm:py-12 dark:text-gray-100">
        <div className="container p-6 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {membershipdata.map((item) => (
              <article
                className="flex flex-col  shadow-2xl rounded-2xl"
                key={item.id}
              >
                <div className="relative">
                  <img
                    alt={item.universityname}
                    className="object-cover w-full h-64 dark:bg-gray-500 rounded-xl"
                    src={item.universitypic}
                  />
                  <div className="absolute bottom-5 left-5">
                    <div className="bg-white text-black py-2 px-5 rounded-2xl w-20 text-center max-h-9 text-sm flex gap-2 font-medium  hover:text-white hover:bg-[#000]">
                      <img src={assets.star} alt="" />
                      <p>4.8</p>
                    </div>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <div className="bg-black text-white text-sm py-2 px-5 rounded-2xl h-9 hover:font-medium  hover:text-black hover:bg-[#F8F6F4]">
                      EXCLUSIVE
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="flex-1 py-5 text-2xl font-bold text-black ">
                    {item.universityname}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3  text-sm  text-black items-center">
                    <p> {item.universityplace}</p>
                    <img src={assets.icons} alt={assets.icons} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="flex flex-row items-center justify-center gap-5">
        <img src={assets.left} alt={assets.left} />
        <p className="text-gray-800">
          <span className="text-4xl items-center p-2">2</span> / 140
        </p>
        <img src={assets.right} alt={assets.right} />
      </div>
    </div>
  );
};

export default Membership;

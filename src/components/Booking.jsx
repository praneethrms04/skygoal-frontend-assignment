import React from "react";
import * as assets from "../assets";

const Booking = () => {
  return (
    <section className="flex lg:py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center ">
        <div className="lg:mb-28">
          <img
            src={assets.maskgroup}
            alt=""
            className="  md:w-[480px] w-[300px] h-fit"
          />
        </div>
      </div>
      <div className="flex-1 flex items-end">
        <div className="lg:p-10 rounded-2xl ">
          <form className="mt-5 flex flex-col shadow-2xl gap-3 bg-[#fff] rounded-[20px] p-10 w-[340px] lg:w-[380px]">
            <p className="font-bold text-3xl lg:text-4xl ">Book now</p>
            <p className="font-medium w-[290px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              sapiente soluta
            </p>
            <label className="flex flex-col">
              <span className="font-medium mb-4">CITY</span>
              <input
                type="text"
                placeholder="Eg : Hyderabad"
                className="py-3 px-6 bg-[#F8F6F4] rounded-lg outline-none border-none font-medium w-72 md:w-[305px]"
              />
            </label>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <span className="mb-2 text-slate-700 text-[12px] font-bold">
                  ARRIVAL
                </span>
                <input
                  type="text"
                  placeholder="10 October"
                  className="bg-[#F8F6F4] py-3 w-32 lg:w-36 placeholder:text-sm px-6  rounded-lg outline-none border-none font-medium"
                />
              </div>
              <div className="flex flex-col">
                <span className="mb-2 text-slate-700 text-[12px] font-bold">
                  DEPARTURE
                </span>
                <input
                  type="text"
                  placeholder="11 October"
                  className="bg-[#F8F6F4] py-3 w-36 md:w-36 placeholder:text-sm px-6  rounded-lg outline-none border-none font-medium"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <span className="mb-2 text-slate-700 text-[12px] font-bold">
                  STAR
                </span>
                <div className="flex flex-row">
                  <img src={assets.plus} alt="" className="cursor-pointer" />
                  <input
                    type="text"
                    placeholder="1"
                    className="w-14 bg-[#F8F6F4] border-none outline-none py-3 px-4"
                  />
                  <img src={assets.minus} alt="" className="cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="mb-2 text-slate-700 text-[12px] font-bold">
                  ROOM
                </span>
                <div className="flex flex-row">
                  <img src={assets.plus} alt="" className="cursor-pointer" />
                  <input
                    type="text"
                    placeholder="4"
                    className="w-12 bg-[#F8F6F4] py-4 px-4"
                  />
                  <img src={assets.minus} alt="" className="cursor-pointer" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#000]  py-2 px-4 rounded outline-none w-fit text-white font-bold shadow-md mt-7"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;

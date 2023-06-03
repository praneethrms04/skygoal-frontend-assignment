import React from "react";

import { cardsData, listitems } from "../constaants";

const Schedules = () => {
  return (
    <>
      <div className="lg:p-28 my-3 ">
        <div className="flex lg:flex-row flex-col gap-20 overflow-hidden">
          <ul className="flex-wrap mb-0">
            {cardsData.map((card) => (
              <li
                className="xl:p-3 mx-10 w-[300px]   lg:h-[120px] lg:w-[340px] shadow-2xl rounded-3xl mb-10"
                key={card.id}
              >
                <div className="flex items-center pt-2">
                  <img
                    className="h-25 w-25 object-cover rounded-full  pt-2"
                    src={card.image}
                    alt={card.name}
                  />
                  <div className="mx-8 pt-2 overflow-hidden pb-2">
                    <p className="font-semibold text-[16px]">{card.name}</p>
                    <p className="font-normal  text-sm">
                      Lorem ipsum, dolor sit
                    </p>
                    <p className="font-normal truncate text-sm">
                      nt quick brown jumsa
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="lg:flex-1 lg:h-auto md:h-[550px] md:p-10 flex-wrap mx-14">
            <img src="" alt="" />
            <p className="text-[20px] lg:text-[30px] font-bold">
              Tropic Adventure <span>for Students</span>
            </p>
            <h4 className="text-normal font-medium lg:text-[20px]">
              Student tropical Vacation :Relax and Recharge
            </h4>
            <ul className="list-disc mx-5 my-3 lg:mt-8 ">
              {listitems.map((item) => (
                <li key={item.id} className="mt-2">
                  {item.item}
                </li>
              ))}
            </ul>
            <button className="btn bg-[#F27A44] hover:text-indigo-900 hover:bg-orange-200 lg:w-[200px] text-white font-semibold p-2 lg:mt-8 mt-4 rounded-2xl md:static">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedules;

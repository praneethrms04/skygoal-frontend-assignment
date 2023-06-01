import React from "react";
import { footer, footersecurity } from "../constaants";

const Footer = () => {
  return (
    <section class="bg-white container flex flex-col items-center justify-center lg:pt-32">
      <div className="items-center text-center ">
        <p className="leading-8 text-2xl  py-5 font-bold lg:text-4xl lg:w-[650px] ">
          Student Special: Discounted rates on tropical getaways!
        </p>
        <p className="text-[15px] lg:w-[450px] lg:ms-20 px-12">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </div>
      <div class="flex py-10">
        <nav class="flex flex-wrap justify-center">
          {footersecurity.map((item) => (
            <div class="px-5 py-2">
              <a
                href="/"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <nav class="flex flex-wrap justify-center">
          {footer.map((item) => (
            <div class="px-5 py-2">
              <a
                href="/"
                class="text-base leading-6 text-black font-semibold hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
      <p class="m-8 pb-[50px] text-base leading-6 text-center text-gray-400 lg:text-center ">
        © 2023 EdutechCompany, Inc. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;

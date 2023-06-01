import React from "react";
import { testimonials } from "../constaants";

const Testimonials = () => {
  return (
    <section className="container p-6 lg:pt-28">
      <p className="text-[40px] text-center p-10 font-semibold text-black">
        Testimonials
      </p>
      <div className="flex lg:flex-row flex-col-reverse gap-16 overflow-hidden mx-5 lg:mx-16 lg:gap-12">
        {testimonials.map((testimonial) => (
          <div className="flex flex-col items-center" key={testimonial.id}>
            <img
              src={testimonial.imgsrc}
              alt={testimonial.imgsrc}
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <div className="text-center py-2">
              <p>{testimonial.name}</p>
            </div>
            <hr className="w-[120px] h-[2px] dark:bg-gray-500 m-2 " />
            <blockquote className="max-w-lg font-medium text-center">
              " {testimonial.message} "
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

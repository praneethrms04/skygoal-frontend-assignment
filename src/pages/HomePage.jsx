import React from "react";
import {
  Booking,
  Navbar,
  Pricing,
  Testimonials,
  Schedules,
  Footer,
  About,
  Membership,
} from "../components";

const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* Abut section */}
      <About />
      {/* schedules  section */}
      <Schedules />
      {/* membershp  section */}
      <Membership />
      {/*Pricing */}
      <Pricing />
      {/* Booking */}
      <Booking />
      {/* testmonias */}
      <Testimonials />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

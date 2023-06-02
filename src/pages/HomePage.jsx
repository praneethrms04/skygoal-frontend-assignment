import React from "react";
import {
  Schedules,
  Booking,
  Navbar,
  Pricing,
  Testimonials,
  Footer,
  About,
  Membership,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Schedules />
      <Membership />
      <Pricing />
      <Booking />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;

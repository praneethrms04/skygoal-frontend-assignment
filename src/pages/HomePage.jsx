import React from "react";
import {
  Booking,
  HeroSection,
  Navbar,
  Pricing,
  Testimonials,
  VacationSection,
} from "../components";

const HomePage = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* Hero section */}
      <HeroSection />
      {/* vacation  section */}
      <VacationSection />
      {/*Pricing */}
      <Pricing />
      {/* Booking */}
      <Booking />
      {/* testmonias */}
      <Testimonials />
      {/* footer */}
    </div>
  );
};

export default HomePage;

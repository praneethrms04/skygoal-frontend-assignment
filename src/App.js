import React from "react";
import {
  Navbar,
  About,
  Schedules,
  Membership,
  Pricing,
  Booking,
  Testimonials,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="schedules">
        <Schedules />
      </section>
      <section id="membership">
        <Membership />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="booking">
        <Booking />
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

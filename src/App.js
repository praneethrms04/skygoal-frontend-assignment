import React from "react";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <Navbar />
      <About />
      <Schedules />
      <Membership />
      <Pricing />
      <Booking />
      <Testimonials />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

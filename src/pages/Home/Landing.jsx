import React from "react";
import Nav from "./Sections/Nav";
import Hero from "./Sections/Hero";
import WhyChooseUs from "./Sections/WhyUs";
import PricingSlider from "./Sections/Pricing";

function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <WhyChooseUs />
      <PricingSlider />
    </div>
  );
}

export default Landing;

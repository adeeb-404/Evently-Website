import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BoxSection from "./BoxSection";
import ContactUs from "./ContactUs";

function Page() {
  const arr = [
    "Features",
    "Why Evently?",
    "What we Promise",
    "Developer's info",
  ];
  return (
    <>
      <Navbar />
      <Hero />
      {arr.map((ele, ind) => (
        <BoxSection key={ind} heading={ele} />
      ))}
      <ContactUs />
    </>
  );
}

export default Page;

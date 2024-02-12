import React from "react";

const Hero = () => {
  return (
    <div className="h-[65vh] sm:h-[80vh] flex items-center justify-center mx-5">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[8rem] font-heading_font text-[#d73cbe] md:leading-[6.5rem] lg:leading-[9rem] m-[2rem]">
          Find Events Nearby
        </h1>
        <h6 className="mx-[2rem] font-serif text-lg">
          Organize events in an organized way
        </h6>
      </div>
      <img
        src="giphy.gif"
        className="rounded-full transition-all h-[10rem] sm:h-[22rem] md:h-[25rem] lg:h-[33rem] md:hover:h-[35rem]"
      />
    </div>
  );
};

export default Hero;

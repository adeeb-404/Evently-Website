import React from "react";
import BoxSectionBox from "./BoxSectionBox";
import Info from "./BoxInfo";

const BoxSection = ({ heading }) => {
  return (
    <>
      <hr className="mx-10" />
      <div className=" m-[1rem] my-20">
        <h1 className="_flex md:flex-row text-[3rem] font-mono">{heading}</h1>
        <div className="_flex md:flex-row my-8 w-full flex-wrap">
          {[...new Array(Info[heading].length)].map((el, i) => (
            <BoxSectionBox key={i} id={i} heading={heading} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BoxSection;

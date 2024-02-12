import React from "react";
import Info from "./BoxInfo";

const BoxSectionBox = ({ heading, id }) => {
  return (
    <div className=" border-2 bg-[#7900ff] _flex w-[70%] md:w-[20rem] md:max-w-[30rem] md:h-auto rounded-md p-8">
      <div className="bg-[#7900ff]">{Info[heading][id]["image"]}</div>
      <h2 className="bg-[#7900ff] text-xl justify-start">
        {Info[heading][id]["box_heading"]}
      </h2>
      <p className="bg-[#7900ff]">{Info[heading][id]["box_data"]}</p>
    </div>
  );
};

export default BoxSectionBox;

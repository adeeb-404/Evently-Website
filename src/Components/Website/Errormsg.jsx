import React from "react";

function Errormsg({ children }) {
  return (
    <h1 className=" sticky bg-red-700 text-white top-0 left-0">{children}</h1>
  );
}

export default Errormsg;

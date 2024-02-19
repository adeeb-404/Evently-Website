import React, { useState, useEffect } from "react";
import Clock from "react-clock";

function Clockk() {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="--clock bg-gradient-to-tr from-slate-700 to-slate-100 border-2 rounded-full ">
      <Clock value={value} size="30vh" />
    </div>
  );
}

export default Clockk;

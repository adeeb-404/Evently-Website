import React, { useState } from "react";
import EventBox from "./EventBox";
import "../CSS-components/EventList.css";
import Popup from "./Popup";

export default function EventsList({ events }) {
  const [itemList, setitemList] = useState(undefined);
  const [triggerd, setTriggered] = useState(false);
  function showBox(id) {
    const temp = events.filter((item) => id === item.id);
    setitemList(temp[0]);
  }
  console.log(itemList);

  return (
    <div className="EventList bg-slate-400 bg-opacity-10 m-0 w-full p-4 pt-0">
      {events.map((item, index) => {
        item.id = index;
        return (
          <EventBox
            key={index}
            id={index}
            festName={item.festName}
            place={item.place}
            time={item.time}
            discription={item.discription}
            onTap={showBox}
            setTriggered={setTriggered}
          />
        );
      })}
      {/* <Popup/> */}
      {triggerd && (
        <Popup
          fName={itemList.festName}
          place={itemList.place}
          time={itemList.time}
          date={itemList.date}
          duration={itemList.duration}
          ageGroup={itemList.ageGroup}
          category={itemList.category}
          dressCode={itemList.dressCode}
          contactNo={itemList.contactNo}
          discription={itemList.discription}
          triggerd={itemList.triggerd}
          setTriggered={setTriggered}
        />
      )}
    </div>
  );
}

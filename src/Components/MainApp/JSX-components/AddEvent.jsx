import React from "react";
import { useState } from "react";
import "../CSS-components/AddEvent.css";

const AddEvent = ({ setEvents, toggleAdd }) => {
  const [event, setEvent] = useState({
    festName: undefined,
    place: undefined,
    time: undefined,
    date: undefined,
    duration: undefined,
    dressCode: undefined,
    ageGroup: undefined,
    category: undefined,
    contactNo: undefined,
    discription: undefined,
  });
  const handlePost = (e) => {
    setEvent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(event);
    setEvents((prev) => [event, ...prev]);
    toggleAdd();
  };
  return (
    <div className="AddEvent flex-col justify-center p-0 max-h-[80vh] overflow-auto">
      <h1 className="Add-event-details text-slate-200 text-2xl m-3">
        Add Event Details:
      </h1>
      <form onSubmit={submitHandler} className="flex justify-center">
        <div className="p-3">
          <label className="m-4">Event name</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="text"
            name="festName"
            onChange={handlePost}
            min={5}
            max={50}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Event Place</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="text"
            name="place"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Event Time</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="text"
            name="time"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Event Date</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="date"
            name="date"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Duration</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="text"
            name="duration"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Age group</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="text"
            name="dressCode"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Category</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="text"
            name="ageGroup"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Dress code</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="text"
            name="category"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Contact no</label>
          <input
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%]"
            type="number"
            name="contactNo"
            onChange={handlePost}
          />
        </div>
        <div className="p-4">
          <label className="m-4">Description</label>
          <textarea
            required
            className=" border-slate-700 border-2 bg-slate-800 shadow-sm shadow-slate-500 focus:shadow-2xl focus:shadow-slate-100 hover:shadow-2xl w-[70%] min-h-40"
            type="text"
            name="discription"
            onChange={handlePost}
            maxLength={450}
          />
        </div>
        <div className=" flex items-center justify-center">
          <button
            type="submit"
            className="bg-black bg-opacity-60 border-2 border-black shadow-sm hover:bg-opacity-100 m-2 h-9 w-11 flex items-center justify-center hover:shadow-stone-800 hover:shadow-xl"
          >
            submit
          </button>
          <button
            type="reset"
            className="bg-black bg-opacity-60 border-2 border-black shadow-sm hover:bg-opacity-100 m-2 h-9 w-11 flex items-center justify-center hover:shadow-stone-800 hover:shadow-xl"
          >
            Reset
          </button>
        </div>
        <button
          className="bg-black bg-opacity-60 border-2 border-black shadow-sm hover:bg-opacity-100 m-2 h-9 w-11 flex items-center justify-center hover:shadow-stone-800 hover:shadow-xl"
          onClick={toggleAdd}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEvent;

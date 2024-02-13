import React, { useRef, useState } from "react";

const Navbar = ({ onMain }) => {
  const ref = useRef();

  function handleClick() {
    ref.current.showModal();
  }

  function handleClickClose() {
    ref.current.hideModal();
  }

  function onSubmit() {
    window.open("https://www.google.com/");
  }

  const [modalMarkup, setModalMarkup] = useState([
    true,
    <>
      <form action="">
        <h1 className=" text-xl text-stone-200 mb-4">Log in</h1>
        <div>
          <h3 className="my-3">Username</h3>
          <input type="text" className="mb-4 focus:bg-stone-300" />
          <h3 className="my-3">Password</h3>
          <input type="password" className=" focus:bg-stone-300" />
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
        >
          Submit
        </button>
      </form>
      <form method="dialog">
        <button
          className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
          onClick={handleClickClose}
        >
          close
        </button>
      </form>
    </>,
  ]);

  function handleModal() {
    const markup = modalMarkup[0] ? (
      <>
        <form action="">
          <h1 className=" text-xl text-stone-200 mb-4">Log in</h1>
          <div>
            <h3 className="my-3">Username</h3>
            <input type="text" className="mb-4 focus:bg-stone-300" />
            <h3 className="my-3">Password</h3>
            <input type="password" className=" focus:bg-stone-300" />
          </div>
          <button
            onClick={onMain}
            type="submit"
            className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
          >
            Submit
          </button>
        </form>
        <form method="dialog">
          <button
            className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
            onClick={handleClickClose}
          >
            close
          </button>
        </form>
      </>
    ) : (
      <>
        <form action="">
          <h1 className=" text-xl text-stone-200 mb-4">Sign Up </h1>
          <div>
            <h3 className="my-3"> First Name</h3>
            <input type="text" className="mb-4 focus:bg-stone-300" />
            <h3 className="my-3"> Last Name</h3>
            <input type="text" className="mb-4 focus:bg-stone-300" />
            <h3 className="my-3">Username</h3>
            <input type="text" className="mb-4 focus:bg-stone-300" />
            <h3 className="my-3">Password</h3>
            <input type="password" className=" focus:bg-stone-300" />
          </div>
          <button
            onClick={onMain}
            type="submit"
            className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
          >
            Submit
          </button>
        </form>
        <form method="dialog">
          <button
            className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
            onClick={handleClickClose}
          >
            close
          </button>
        </form>
      </>
    );
    setModalMarkup([!modalMarkup[0], markup]);
  }

  return (
    <>
      <dialog
        className=" border-gray-400 rounded-xl p-16 mx-auto my-auto border-2 bg-stone-950 "
        ref={ref}
      >
        {modalMarkup}
        <h5 className="my-2">
          Don't have an account?
          <a onClick={handleModal} className=" cursor-pointer text-blue-800">
            Create here
          </a>
        </h5>
      </dialog>

      <nav className="flex items-start lg:items-center justify-between m-5 lg:flex-row">
        <div className="_flex lg:flex-row h-8 lg:h-24">
          <div className="_flex lg:flex-row">
            <img
              src="Logo.png"
              className=" h-14 md:h-20 lg:h-[4.5rem] mx-5"
            ></img>
            <h4 className="hidden lg:flex text-md lg:text-2xl mr-12 font-heading_font">
              Evently
            </h4>
          </div>
          <ul className=" _flex lg:flex-row gap-9 m-4 text-sm lg:text-2xl">
            <li>
              <a
                href="#about"
                className="hidden lg:flex transition-colors hover:text-gray-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Features"
                className="hidden lg:flex transition-colors hover:text-gray-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#Pricing"
                className="hidden lg:flex transition-colors hover:text-gray-400"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={handleClick}
          className=" bg-[#009d41] py-2 px-2  lg:px-8 rounded-3xl _flex lg:flex-row items-center mx-9 transition-all lg:hover:py-3 hover:bg-[#007b20]"
        >
          Get Start
        </button>
      </nav>
    </>
  );
};

export default Navbar;

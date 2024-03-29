import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const ref = useRef();
  const navigator = useNavigate();
  const [signup, setsignup] = useState(false);
  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [userLogin, setUserLogin] = useState({});
  const [sign, setsign] = useState("Get Started");
  const [errors, setErrors] = useState({
    username: null,
    first_name: null,
    last_name: null,
    email: null,
    password: null,
  });

  useEffect(
    () => setsign(localStorage.getItem("username") ? "In to App" : "Sign Up"),
    []
  );

  function handleClick() {
    if (localStorage.getItem("username")) navigator("/MainApp");
    ref.current.showModal();
  }
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(userLogin);
    handleLoginSubmit();
  };
  function handleClickClose() {
    ref.current.hideModal();
  }

  const validateForm = (data) => {
    let errors = {};
    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 3) {
      errors.username = "Username must be atleast 3 characters long";
    }
    if (!data.first_name.trim()) {
      errors.first_name = "First Name is required";
    }
    if (!data.last_name.trim()) {
      errors.last_name = "Last Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm(user);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      // console.log("Form submitted:", formData);

      console.log(user);
      try {
        const response = await fetch(
          "http://localhost/backend/api/testresponse.php",
          {
            method: "POST",
            //  mode:"no-cors",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // if (!response.ok) {
        //   throw new Error(HTTP error! Status: ${response.status});
        // }

        localStorage.setItem("username", user.username);
        localStorage.setItem("fname", user.first_name);
        localStorage.setItem("lname", user.last_name);
        localStorage.setItem("pp", user.profile ? user.profile : 0);
        localStorage.setItem("email", user.email);
        const data = await response.json();
        console.log(data.user);

        if (data.Status === 200) {
          navigator("/Mainapp");
        }
        // setStatusCode(200);
        // Store the response data in state or do something else with it
        console.log(data);
        console.log(data.Status);
        if (data.Status === 401) {
          console.log("first");
          alert("USER ALREADY exsits");
          return;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      const { username, first_name, last_name, email, password } = newErrors;
      alert(
        first_name
          ? first_name
          : last_name
          ? last_name
          : email
          ? email
          : username
          ? username
          : password
          ? password
          : null
      );
      setErrors(newErrors);
      return;
    }
  }

  // login authentication section-----

  async function handleLoginSubmit() {
    // e.preventDefault();
    console.log(userLogin);
    if (!userLogin.username || !userLogin.password) {
      alert("Fill all the fields");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost/backend/api/formlogin.php",
        {
          method: "POST",
          //  mode:"no-cors",
          body: JSON.stringify(userLogin),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // if (!response.ok) {
      //   throw new Error(HTTP error! Status: ${response.status});
      // }

      const data = await response.json();

      console.log(data.Status == 200);
      if (data.Status === 200) {
        navigator("/Mainapp");
      }
      // setStatusCode(200);
      // Store the response data in state or do something else with it
      // console.log(data);
      // console.log(data.Status);
      // console.log(data.user);
      // console.log(data.first_name);
      // console.log(data.last_name);

      localStorage.setItem("username", data.user);
      localStorage.setItem("fname", data.first_name);
      localStorage.setItem("lname", data.last_name);
      localStorage.setItem("pp", data.profile ? data.profile : 0);
      localStorage.setItem("email", data.email);

      console.log(data.email);
      if (data.Status === 403) {
        console.log("first");
        alert("wrong username or password");
        return;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const handleLogin = (e) => {
    console.log("First");
    setUserLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUser = (e) => {
    console.log("First");
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [modalMarkup, setModalMarkup] = useState(
    <div>
      <h3 className="my-3">Username</h3>
      <input
        type="text"
        className="mb-4 focus:bg-stone-300 focus:text-slate-900"
        name="username"
        onChange={handleLogin}
      />
      <h3 className="my-3">Password</h3>
      <input
        type="password"
        className=" focus:bg-stone-300 focus:text-slate-900"
        name="password"
        onChange={handleLogin}
      />
    </div>
  );

  function handleModal() {
    // setsignup(login);
    const markup = signup ? (
      <div>
        <h3 className="my-3">Username</h3>
        <input
          type="text"
          className="mb-4 focus:bg-stone-300 focus:text-slate-900"
          name="username"
          onChange={handleLogin}
        />
        <h3 className="my-3">Password</h3>
        <input
          type="password"
          className=" focus:bg-stone-300 focus:text-slate-900"
          name="password"
          onChange={handleLogin}
        />
      </div>
    ) : (
      <div>
        <h3 className="my-3">First Name</h3>
        <input
          type="text"
          className="mb-4 focus:bg-stone-300 focus:text-slate-900"
          name="first_name"
          onChange={handleUser}
        />
        <h3 className="my-3">Last Name</h3>
        <input
          type="text"
          className="mb-4 focus:bg-stone-300 focus:text-slate-900"
          name="last_name"
          onChange={handleUser}
        />
        <h3 className="my-3">Email</h3>
        <input
          type="text"
          className="mb-4 focus:bg-stone-300 focus:text-slate-900"
          name="email"
          onChange={handleUser}
        />
        <h3 className="my-3">Username</h3>
        <input
          type="text"
          className="mb-4 focus:bg-stone-300 focus:text-slate-900"
          name="username"
          onChange={handleUser}
        />
        <h3 className="my-3">Password</h3>
        <input
          type="password"
          className=" focus:bg-stone-300 focus:text-slate-900"
          name="password"
          onChange={handleUser}
        />
      </div>
    );
    setModalMarkup(markup);
  }

  return (
    <>
      <dialog
        className=" border-gray-400 rounded-b-xl mx-auto my-auto border-2 bg-stone-950 w-80 h-fit"
        ref={ref}
      >
        <div className="flex items-center justify-around bg-red-500 w-full rounded-b-lg">
          <button
            disabled={!signup}
            className={`w-[50%] ${!signup && "bg-black"}`}
            onClick={() => {
              setsignup(false);
              handleModal();
            }}
          >
            Log-in
          </button>
          <button
            disabled={signup}
            className={`w-[50%] ${signup && "bg-black "}`}
            onClick={() => {
              setsignup(true);
              handleModal();
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="_flex p-10">
          <form onSubmit={handleSubmit}>
            {modalMarkup}
            <button
              onClick={signup ? handleSubmit : submitLogin}
              type="submit"
              className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
            >
              Submit
            </button>
            <button
              type="reset"
              className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100 mx-10"
            >
              Reset
            </button>
          </form>
          <form method="dialog">
            {/* <button
              className=" p-2 border-2 mt-4 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-stone-100"
              onClick={handleClickClose}
            >
              close
            </button> */}
          </form>
        </div>
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
                href="#ContactUs"
                className="CONTACT_US hidden lg:flex transition-colors hover:text-gray-400"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={handleClick}
          className=" bg-[#009d41] py-2 px-2  lg:px-8 rounded-3xl _flex lg:flex-row items-center mx-9 transition-all lg:hover:py-3 hover:bg-[#007b20]"
        >
          {sign}
        </button>
      </nav>
    </>
  );
};

export default Navbar;

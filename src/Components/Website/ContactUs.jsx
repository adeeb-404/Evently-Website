import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const ContactUs = () => {
  return (
    <div className="h-fit m-4" id="ContactUs">
      <hr className="mx-10" />
      <div className=" m-10 my-20">
        <h1 className="_flex font-mono text-[3rem]">Contact Us</h1>
      </div>
      <div className="flex items-center justify-around">
        <div>
          <div className=" flex  items-center">
            <FaInstagram className="hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:rounded-2xl w-full h-20" />
            <h1 className=" text-xl">Evently</h1>
          </div>
          <div className=" flex  items-center">
            <FaFacebook className="hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:rounded-2xl w-full h-20" />
            <h1 className=" text-xl">Evently</h1>
          </div>
          <div className=" flex  items-center">
            <CgMail className="hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:rounded-2xl w-full h-20" />
            <h1 className=" text-xl">Evently</h1>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4742228651226!2d76.63889987482922!3d12.28381838797198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65561e102919%3A0xf947b18cc5ad3d88!2sThe%20National%20Institute%20of%20Engineering%20South%20Campus%20(NIE%20South)!5e0!3m2!1sen!2sin!4v1708169450436!5m2!1sen!2sin"
          width="400"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

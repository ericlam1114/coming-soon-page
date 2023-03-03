import React from "react";
import { useState } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
const mailchimp = require("@mailchimp/mailchimp_marketing");

const CONNECTION_URL = "bab566a2-d238-4430-a4f6-77c8bd90f773";

const Hero = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // appendSpreadsheet(formData)
      // setEmail('');
      // console.log(email);

      const data = {
        Email: email,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/{CONNECTION_URL}",
          data
        )
        .then((response) => console.log(response));
        alert('email submitted successfully')
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row justify-between items-center ">
      <div className="flex flex-col gap-5">
        <p className="text-lg font-medium bg-green-100 text-green-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Coming April 1
        </p>
        <p className="text-6xl font-bold">
          Podcast Advertising <br /> Made Simple{" "}
        </p>
        <p className="text-base">
          Join over one hundred podcasters signed up to monetize<br />
          their podcasts with branded in-stream ads, the easy way.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <input
              placeholder="Enter your email..."
              type="email"
              value={email}
              onChange={handleInputChange}
              className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#181918] to-[#262927] rounded-2xl hover:scale-95 duration-300 transition text-white shadow-xl font-medium">
              Notify Me{" "}
            </button>
          </div>
        </form>
        {/* <div className="flex gap-5"> */}
          {/* <BsTwitter className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" /> */}
          {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
          {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        {/* </div> */}
      </div>
      <img src="/mic.png" className="max-w-sm lg:max-w-sm" alt="" />
    </div>
  );
};

export default Hero;

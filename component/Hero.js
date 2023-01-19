import React from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const Hero = () => {
  return (
<div className="container mx-auto h-screen flex flex-col md:flex-row justify-between items-center md:-mt-40">
    <div className="flex flex-col gap-5">
      <p className="text-lg font-medium bg-cyan-100 text-cyan-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">Coming soon</p>
      <p className="text-6xl font-bold">Win The AI <br /> Revolution 🤖 </p>
      <p className="text-base">Join over one hundred internet natives <br />signing up for the first AI prompt exchange.</p>
      <div className="flex gap-5">
          <input placeholder="Enter you email..." type="email" className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4" />
          <button className="px-6 py-3 bg-gradient-to-r from-[#aacee0] to-[#b2eded] rounded-2xl hover:scale-95 duration-300 transition text-cyan-800 shadow-xl font-medium">Notify Me </button>
      </div>
      <div className="flex gap-5">
          <BsTwitter className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/>
          {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
          {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
      </div>
    </div>
    <img src="/bot.png" className="max-w-xl" alt="" />
</div>
  );
};

export default Hero;

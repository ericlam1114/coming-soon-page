import React from "react";
import { useState } from "react";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import axios from "axios";
const mailchimp = require("@mailchimp/mailchimp_marketing");


const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      mailchimp.setConfig({
        apiKey: "fe57b50cf1bc5c29ec5c21c885d9380a-us14",
        server: "us14",
      });

      const event = {
        name: "JS Developers Meetup",
      };

      const footerContactInfo = {
        company: "Mailchimp",
        address1: "675 Ponce de Leon Ave NE",
        address2: "Suite 5000",
        city: "Atlanta",
        state: "GA",
        zip: "30308",
        country: "US",
      };

      const campaignDefaults = {
        from_name: "Gettin' Together",
        from_email: "gettintogether@example.com",
        subject: "JS Developers Meetup",
        language: "EN_US",
      };

      const listId = "bde9e8b4f3";
      const subscribingUser = {
        //   firstName: "Prudence",
        //   lastName: "McVankab",
        email: email,
      };

      async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
          email_address: subscribingUser.email,
          status: "subscribed",
          merge_fields: {
            FNAME: subscribingUser.firstName,
            LNAME: subscribingUser.lastName,
          },
        });

        console.log(
          `Successfully added contact as an audience member. The contact's id is ${response.id}.`
        );
      }

      run();
    } catch (err) {
      console.error(err);
      alert("Error subscribing. Please try again later.");
    }
  };
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row justify-between items-center md:-mt-40">
      <div className="flex flex-col gap-5">
        <p className="text-lg font-medium bg-cyan-100 text-cyan-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Coming soon
        </p>
        <p className="text-6xl font-bold">
          Win The AI <br /> Revolution 🤖{" "}
        </p>
        <p className="text-base">
          Join over one hundred internet natives <br />
          signed up for the first AI prompt exchange.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <input
              placeholder="Enter you email..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#aacee0] to-[#b2eded] rounded-2xl hover:scale-95 duration-300 transition text-cyan-800 shadow-xl font-medium">
              Notify Me{" "}
            </button>
          </div>
        </form>
        <div className="flex gap-5">
          <BsTwitter className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
          {/* <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
          {/* <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer"/> */}
        </div>
      </div>
      <img src="/bot.png" className="max-w-xl" alt="" />
    </div>
  );
};

export default Hero;

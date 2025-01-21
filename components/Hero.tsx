"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/ipl.png";
import Navbar from "./Navbar";
function Hero() {
  return (
    <div className="min-h-screen bg-purple-200 bg-[url('/assets/back4.jpg')] bg-blend-darken bg-cover bg-origin-border bg-center">
      <div className="h-full bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.9)]">
        <Navbar />
        <div
          className="w-full h-screen mx-auto p-6 text-center grid grid-rows-4 lg:justify-center items-center gap-6"
          id="home"
        >
          <div className="lg:pb-10 self-center lg:text-3xl md:text-2xl sm:text-xl text-[1.2rem] py-2 text-[#ffffff] font-extrabold font-bodyFont uppercase tracking-wider">
            Unlock the Future of Business Collaboration
          </div>
          <div className="text-center w-full h-fit">
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-center flex justify-center space-x-1"
              style={{ fontFamily: "Joti One, sans-serif" }} // Apply the custom font to the entire CONSONITE text
            >
              {["B", "I", "Z"].map((letter, index) => (
                <span
                  key={index}
                  className="relative cursor-pointer text-[#f4cb33] transition-transform transform group hover:scale-105 hover:text-shadow-red"
                >
                  {letter}
                </span>
              ))}

              {["M", "U", "N"].map((letter, index) => (
                <span
                  key={index}
                  className="relative cursor-pointer text-white transition-transform transform group hover:scale-110 hover:text-shadow-white"
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
          <div className="flex flex-col justify-center row-span-2 gap-10">
            <p className="text-xl sm:text-2xl py-4 -my-6 font-extrabold font-bodyFont text-white">
              Don’t miss out—Register now to be part of BIZ-MUN 2024 and shape
              the future of business collaboration!
            </p>
            <p className="text-xl sm:text-2xl py-4 -my-6 font-extrabold font-bodyFont text-white">
              The Event will be held on 8th and 9th of February.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzitidy_a3V0QZujdsSNsPfHDtNCkUFZWfklwosddX9rl2dQ/viewform?usp=sharing"
              className="font-bold font-bodyFont"
              target="_blank"
            >
              <button
                className="bg-[#f4cb33] w-[200px] my-8 mx-auto py-3 text-black hover:scale-105 duration-200 hover:bg-yellow-500 hover:text-black"
                style={{ fontSize: "23px" }}
              >
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

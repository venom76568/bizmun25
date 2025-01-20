import React from "react";
import Home from "../public/assets/mun.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="w-full bg-[#141414] py-16 px-10" id="about">
      <div className="max-w-[1240px] mx-auto grid md:gap-3 md:grid-cols-2 ">
        <Image
          className="w-[400px] lg:h-[400px] my-6 lg:mr-6"
          src={Home}
          alt="CricketPlayer..."
        />

        <div className="flex flex-col justify-center gap-2">
          <p className="text-[#f4cb33] xl:text-5xl lg:text-4xl text-3xl font-extrabold font-bodyFont uppercase">
            WHAT IS BIZ-MUN?
          </p>
          <h1 className="xl:text-3xl sm:text-xl text-lg font-extrabold font-bodyFont py-4 text-white">
            Business & MUN
          </h1>
          <p className="text-white text-lg">
            BIZ-MUN is a transformative journey namely Collaborative Business
            Conference 2024, meticulously crafted to elevate strategic
            discussions and foster effective cooperation within the business
            landscape. Delve into the heart of business expertise with our
            specialized committees, each comprising 20 delegates and 2
            co-chairs, exploring key facets of the business realm through the
            Legal, Finance, Fun, and Media Committees. These committees provide
            a dynamic platform for in-depth discussions and innovative
            solutions, ensuring a comprehensive exploration of the business
            landscape.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 md:mt-0 gap-4 lg:gap-10">
            <Link
              href="https://drive.google.com/file/d/19Q6cKLUZK3EkLr0CH5sB3CD5aVVOLoAY/view?usp=sharing"
              target="_blank"
            >
              <button className="text-black w-full lg:w-[200px] font-medium my-2 md:my-4 lg:my-8 mx-auto md:mx-0 py-3 bg-[#f4cb33] lg:hover:scale-105 hover:bg-yellow-500 duration-200 text-xl">
                Brochure
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

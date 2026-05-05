import React from "react";
import AppStore from "../../assets/app-store.png";
import PlayStore from "../../assets/play-store.png";
import BannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-[#f1f1f1] p-20 pb-0 flex flex-col items-center justify-content-center">
      <div>
        <h1 className="text-6xl font-bold px-70 text-center inline-block tracking-wide">
          We Build <br />
          <span className="gradient-text  bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
      </div>
      <div>
        <p className="text-base text-gray-500 text-center px-44 my-5">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex gap-4 my-5">
        <button className="btn py-2">
          <img src={PlayStore} className="w-[20px]" alt="" />
          <span>Google Play</span>
        </button>
        <button className="btn py-2">
          <img src={AppStore} className="w-[20px]" alt="" />
          <span>Google Play</span>
        </button>
      </div>
      <div>
        <img src={BannerImg} className="w-[550px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;

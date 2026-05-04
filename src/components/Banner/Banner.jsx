import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#f1f1f1] p-20 pb-0 flex flex-col items-center justify-content-center">
      <div>
        <h1 className="text-6xl font-bold px-70 text-center inline-block tracking-wide">
          We Build
          <span className="gradient-text  bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
            Productive
          </span>
          Apps
        </h1>
      </div>
    </div>
  );
};

export default Banner;

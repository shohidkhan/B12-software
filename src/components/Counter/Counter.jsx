import React from "react";

const Counter = () => {
  return (
    <div className="p-15 bg-gradient-to-r to-[#9F62F2] from-[#632EE3]">
      <h1 className="text-white font-bold text-5xl text-center my-5">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex justify-evenly gap-4 mt-10">
        <div className="text-center text-white">
          <p className="text-sm text-gray-300">Total Downloads</p>
          <h2 className="text-4xl font-bold my-2">29.6M</h2>
          <p className="text-sm text-gray-300">21% more than last month</p>
        </div>
        <div className="text-white text-center">
          <p className="text-sm text-gray-300">Total Reviews</p>
          <h2 className="text-4xl font-bold my-2">906K</h2>
          <p className="text-sm text-gray-300">46% more than last month</p>
        </div>
        <div className="text-white text-center">
          <p className="text-sm text-gray-300">Active Apps</p>
          <h2 className="text-4xl font-bold my-2">132+</h2>
          <p className="text-sm text-gray-300">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;

import React from "react";
import DemoApp from "../../assets/demo-app (2).webp";
import { BsDownload } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;
  return (
    <Link to={`/apps/${id}`}>
      <div className="p-5 bg-white rounded-md">
        <div>
          <img
            src={image}
            className="rounded-md w-[280px] h-[250px] cover"
            alt=""
          />
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <div className="flex justify-between mt-4">
            <span className="flex gap-2 items-center bg-green-100 px-2 py-1 rounded-md">
              <BsDownload className="text-xs" />
              <strong className="text-xs text-green-600"> {downloads} M</strong>
            </span>
            <span className="flex gap-2 items-center bg-yellow-100 px-2 py-1 rounded-md">
              <FaStar color="#f3a91e" size="15px" />
              <strong className="text-xs  text-yellow-600"> {ratingAvg}</strong>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;

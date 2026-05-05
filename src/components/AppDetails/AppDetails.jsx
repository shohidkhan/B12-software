import { Download, Star, ThumbsUp } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const allApps = useLoaderData();
  const id = useParams();
  const singleApp = allApps.find((app) => app.id == id.id);
  console.log(singleApp);
  return (
    <div className="bg-[#f1f1f1]  px-20 py-30 ">
      <div className="grid grid-cols-4 border-b gap-10 border-gray-300 py-10">
        <div className="col-span-1">
          <img
            src={singleApp.image}
            className="w-full h-[260px] rounded-md"
            alt={singleApp.title}
          />
        </div>
        <div className="col-span-3">
          <div className="pb-5 border-b border-gray-300">
            <h1 className="text-4xl font-bold mb-3">{singleApp.title}</h1>
            <p className="text-gray-400 text-sm font-semibold">
              Developed By :{" "}
              <span className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                {singleApp.companyName}
              </span>
            </p>
          </div>
          <div className="py-3 flex gap-20">
            <div>
              <Download size={28} color="#0bb736" />
              <p>Downloads</p>
              <h1 className="text-3xl font-bold">8M</h1>
            </div>
            <div>
              <Star size={28} color="#c8b804" />
              <p>Average Ratings</p>
              <h1 className="text-3xl font-bold">{singleApp.ratingAvg}</h1>
            </div>
            <div>
              <ThumbsUp size={28} color="#9f62f2" />
              <p>Total Reviews</p>
              <h1 className="text-3xl font-bold">{singleApp.reviews}</h1>
            </div>
          </div>
          <div className="mt-5">
            <button className="px-5 py-1 cursor-pointer bg-green-500 rounded text-white ">
              Install Now ({singleApp.size} MB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;

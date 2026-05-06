import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import { addApp, getInstalledApps } from "../../Utility/Helper";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const allApps = useLoaderData();
  const id = useParams();
  const singleApp = allApps.find((app) => app.id == id.id);
  // console.log(singleApp);

  // 2. Wrap the logic in useEffect
  useEffect(() => {
    const installedApps = getInstalledApps();
    const isAppInstalled = installedApps.includes(singleApp?.id);
    setIsInstalled(isAppInstalled);
  }, [id, singleApp]);

  const handleInstallApp = (id) => {
    addApp(id);
    setIsInstalled(true);
    // alert(id);
  };

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
            <button
              disabled={isInstalled}
              onClick={() => handleInstallApp(singleApp.id)}
              className="btn btn-success"
            >
              {isInstalled ? "Installed" : `Install Now (${singleApp.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl mt-5">Rating</h1>

        {/* <BarChart
          width={500}
          height={400}
          responsive
          data={appData}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="count" />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
        </BarChart> */}
      </div>
    </div>
  );
};

export default AppDetails;

import { Download, Star } from "lucide-react";
import React from "react";
import { getInstalledApps, removeApp } from "../../Utility/Helper";

const SingleInstalledApp = ({ app, allApps, setInstalledAllApps }) => {
  const handleAppUninstall = (id) => {
    removeApp(id);
    const installedApps = getInstalledApps();
    const restApps = allApps.filter((app) => installedApps.includes(app.id));
    setInstalledAllApps(restApps);
  };

  return (
    <div className="bg-white p-7 mb-5 rounded flex justify-between items-center">
      <div className="flex gap-4">
        <div>
          <img
            className="w-[70px] h-[70px] rounded-md"
            src={app.image}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-semibold text-md">{app.title}</h1>
          <div className="mt-3 flex gap-3">
            <div className="flex gap-1 items-center">
              <Download color="green" size={15} />
              <span className="text-green-700 font-semibold text-xs">
                {app.downloads}
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Star color="#e0af0d" size={15} />
              <span className="text-[#e0af0d] font-semibold text-xs">
                {app.ratingAvg}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 text-xs">
                {app.size} MB
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleAppUninstall(app.id)}
          className="btn btn-success text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default SingleInstalledApp;

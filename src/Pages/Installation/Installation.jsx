import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApps } from "../../Utility/Helper";
import SingleInstalledApp from "../../components/SingleInstalledApp/SingleInstalledApp";

const Installation = () => {
  const allApps = useLoaderData();
  const [installedAllApps, setInstalledAllApps] = useState(allApps);

  const installedApps = getInstalledApps();
  useEffect(() => {
    const filteredApps = allApps.filter((app) =>
      installedApps.includes(app.id),
    );
    setInstalledAllApps(filteredApps);
  }, []);

  const HandleSort = (e) => {
    const sortType = e.target.value;
    if (!sortType) return; // Exit if user selects the default option

    const sortedApps = [...installedAllApps].sort((a, b) => {
      return sortType === "lth" ? a.size - b.size : b.size - a.size;
    });

    setInstalledAllApps(sortedApps);
  };

  return (
    <div className="bg-[#f1f1f1] py-30 px-15">
      <div>
        <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
        <p className="text-base text-gray-500 mt-5 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mt-10 p-5 border-b border-gray-300">
        <h1 className="font-bold text-xl">
          {installedAllApps.length} Apps Found
        </h1>
        <div>
          <select
            onChange={HandleSort}
            className=" border border-gray-300 px-3 py-1 rounded"
          >
            <option value="">Select sort type</option>
            <option value="lth">Low to high</option>
            <option value="htl">High To low</option>
          </select>
        </div>
      </div>

      {installedAllApps.map((app) => (
        <SingleInstalledApp
          app={app}
          key={app.id}
          setInstalledAllApps={setInstalledAllApps}
          installedApps={installedApps}
          allApps={allApps}
        />
      ))}
    </div>
  );
};

export default Installation;

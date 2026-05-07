import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApps } from "../../Utility/Helper";
import SingleInstalledApp from "../../components/SingleInstalledApp/SingleInstalledApp";
import { Loader } from "lucide-react";

const Installation = () => {
  const allApps = useLoaderData();
  const [installedAllApps, setInstalledAllApps] = useState(allApps);

  // 1. Add an isSorting state
  const [isSorting, setIsSorting] = useState(false);

  const installedApps = getInstalledApps();

  useEffect(() => {
    const filteredApps = allApps.filter((app) =>
      installedApps.includes(app.id),
    );
    setInstalledAllApps(filteredApps);
  }, []);

  const HandleSort = (e) => {
    const sortType = e.target.value;
    if (!sortType) return;

    // 2. Start Loading
    setIsSorting(true);

    // Use setTimeout to allow the browser to render the loader
    // before the main thread gets busy with the sort
    setTimeout(() => {
      const sortedApps = [...installedAllApps].sort((a, b) => {
        return sortType === "lth" ? a.size - b.size : b.size - a.size;
      });

      setInstalledAllApps(sortedApps);

      // 3. Stop Loading
      setIsSorting(false);
    }, 500); // 500ms delay to make the animation feel smooth
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

      {/* 4. Conditional Rendering for the Loader */}
      {isSorting ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader className="animate-spin text-blue-600" size={48} />
          <p className="mt-4 text-gray-600">Sorting apps...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
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
      )}
    </div>
  );
};

export default Installation;

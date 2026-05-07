import React, { Suspense, useState } from "react";
import SingleApp from "../SingleApp/SingleApp";
import { Link, useLoaderData } from "react-router";
import { Search } from "lucide-react";
import Loader from "../Loader/Loader";

const Apps = ({ apps }) => {
  const dataApps = useLoaderData();
  const [search, setSearch] = useState(dataApps);

  // 1. Add an isSearching state
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();

    // 2. Start the loading state
    setIsSearching(true);

    // 3. Wrap logic in a timeout so the loader actually becomes visible
    setTimeout(() => {
      const filterData = dataApps.filter(
        (app) =>
          app.title.toLowerCase().includes(searchText) ||
          app.companyName.toLowerCase().includes(searchText),
      );

      setSearch(filterData);

      // 4. End the loading state
      setIsSearching(false);
    }, 300); // 300ms is usually enough to feel responsive but visible
  };

  return (
    <>
      <div className="bg-[#f1f1f1] py-30">
        {apps ? (
          /* ... Your existing Top 8 logic ... */
          <div>
            <div className=" px-15 grid grid-cols-4 gap-6">
              {apps.slice(0, 8).map((app) => (
                <SingleApp key={app.id} app={app} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/apps" className="btn ...">
                Show All
              </Link>
            </div>
          </div>
        ) : (
          <div className="px-15">
            <div className="mb-15 text-center">
              <h1 className="text-4xl font-bold mb-3">Our All Applications</h1>
              <p className="text-base text-gray-500">Explore All Apps...</p>
            </div>

            <div className="px-15 mb-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">({search.length}) Found</h1>
              <div className="relative w-full sm:w-72 md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="search Apps"
                  onChange={handleSearch}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
                />
              </div>
            </div>

            {/* 5. Conditional Rendering for Loader */}
            <div className="px-15">
              {isSearching ? (
                <div className="flex justify-center py-20">
                  <Loader />
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-6">
                  {search.length === 0 ? (
                    <div className="col-span-4 text-center">
                      <h1 className="text-2xl font-bold">No Apps Found</h1>
                    </div>
                  ) : (
                    search.map((app) => <SingleApp key={app.id} app={app} />)
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Apps;

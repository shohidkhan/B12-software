import React, { useState } from "react";
import SingleApp from "../SingleApp/SingleApp";
import { Link, useLoaderData } from "react-router";
import { Search } from "lucide-react";

const Apps = ({ apps }) => {
  const dataApps = useLoaderData();

  const [search, setSearch] = useState(dataApps);

  //   setSearch(dataApps);
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();

    const filterData = dataApps.filter(
      (app) =>
        app.title.toLowerCase().includes(searchText) ||
        app.companyName.toLowerCase().includes(searchText),
    );

    setSearch(filterData);
  };
  return (
    <>
      <div className="bg-[#f1f1f1] py-30">
        {apps ? (
          <div>
            <div className=" px-15 grid grid-cols-4 gap-6">
              {apps.slice(0, 8).map((app) => (
                <SingleApp key={app.id} app={app} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/apps"
                className="btn border-none  bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white hover:opacity-90 hover:bg-gradient-to-l hover:to-[#9F62F2] hover:from-[#632EE3] transition-opacity"
              >
                Show All
              </Link>
            </div>
          </div>
        ) : (
          <div className="px-15">
            <div className="mb-15 text-center">
              <h1 className="text-4xl font-bold mb-3">Our All Applications</h1>
              <p className="text-base text-gray-500">
                Explore All Apps on the Market developed by us. We code for
                Millions
              </p>
            </div>
            <div className="px-15 mb-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">({search.length}) Found</h1>
              <div className="relative w-full sm:w-72 md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="search Apps"
                  onChange={handleSearch}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
                />
              </div>
            </div>
            <div className=" px-15 grid grid-cols-4 gap-6">
              {search.length === 0 && (
                <div className="col-span-4 text-center">
                  <h1 className="text-2xl font-bold">No Apps Found</h1>
                </div>
              )}
              {search.map((app) => (
                <SingleApp key={app.id} app={app} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Apps;

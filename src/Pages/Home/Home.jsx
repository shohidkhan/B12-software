import React from "react";
import Banner from "../../components/Banner/Banner";
import Counter from "../../components/Counter/Counter";
import Apps from "../../components/Apps/Apps";
import { useLoaderData } from "react-router";

const Home = () => {
  const apps = useLoaderData();

  return (
    <div>
      <Banner />
      <Counter />
      <Apps apps={apps} />
    </div>
  );
};

export default Home;

import React, { use } from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      {isLoading && <Loader />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

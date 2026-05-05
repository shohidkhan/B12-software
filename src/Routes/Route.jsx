import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Apps from "../components/Apps/Apps";
import AppDetails from "../components/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        index: true,
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/apps",
        index: true,
        loader: () => fetch("/data.json"),
        Component: Apps,
      },
      {
        path: "/about",
        index: true,
        Component: About,
      },
      {
        path: "/apps/:id",
        index: true,
        loader: () => fetch("/data.json"),
        Component: AppDetails,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Apps from "../components/Apps/Apps";

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
        path: "/about",
        index: true,
        Component: About,
      },
      {
        path: "/apps",
        index: true,
        loader: () => fetch("/data.json"),
        Component: Apps,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/Home/HomeLayout";
import Home from "../pages/Home";
import CatagoriNews from "../pages/CatagoriNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", Component: Home },
      {
        path: "/catagoris/:id",
        Component: CatagoriNews,
        loader: () => fetch('/news.json'),
      },
    ],
  },
]);

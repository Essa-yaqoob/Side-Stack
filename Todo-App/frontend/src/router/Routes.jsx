import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Home from "@/components/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

const store = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default store;

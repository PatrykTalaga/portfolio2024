import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainProjects from "./Pages/MainProjects.tsx";
import CV from "./Pages/CV.tsx";
import SmallerProjects from "./Pages/SmallerProjects.tsx";
import Gallery from "./Pages/Gallery.tsx";
import ErrorPage404 from "./Pages/ErrorPage404.tsx";

/* const router = createBrowserRouter([]); */
/* const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]); */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage404 />,
  },
  { path: "/MainProjects", element: <MainProjects /> },
  { path: "/CV", element: <CV /> },
  { path: "/SmallerProjects", element: <SmallerProjects /> },
  { path: "/Gallery", element: <Gallery /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

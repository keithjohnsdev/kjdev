import React from "react";
import ReactDOM from "react-dom/client";
import {Landing} from "./views"
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

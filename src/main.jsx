import React from "react";
import ReactDOM from "react-dom/client";
import { Landing } from "./views";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landing />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/kjdev/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

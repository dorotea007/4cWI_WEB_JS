import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; 

import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import Page2 from './components/pages/Page2';
import Page1 from "./components/pages/Page1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />, 
  },
  {
    path: "/p2",
    element: <Page2 />,
  },
  {
    path: "/super",
    element: <Page1 />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);


import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import './index.css';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/p2",
    element: <Page2 />,
  },
]);
 
const root = document.getElementById("root");
 
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Root from "./routes/root.jsx";
import About from "./routes/about.jsx";
import Trauma from "./routes/trauma.jsx";
import Resources from "./routes/resources.jsx";
import Healing from "./routes/healing.jsx";
import ErrorPage from "./error-page.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/trauma",
    element: <Trauma />,
  },
  {
    path: "/healing",
    element: <Healing />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

import React, { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import TicTacToe from "./TicTacToe";
import Xkcd from "./xkcd";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/TicTacToe", element: <TicTacToe /> },
  { path: "/xkcd", element: <Xkcd /> }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

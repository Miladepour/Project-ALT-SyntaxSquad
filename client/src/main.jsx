import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InputForm, Result, UserPreference } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/input-form",
    element: <InputForm />,
  },
  {
    path: "/user-preference",
    element: <UserPreference />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

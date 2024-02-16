import React, { useState } from "react";
import Page from "./Website/page";
import MainApp from "./MainApp/JSX-components/MainApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/Mainapp",
    element: <MainApp />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

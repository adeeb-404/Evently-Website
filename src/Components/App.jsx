import React, { useState } from "react";
import Page from "./Website/page";
import MainApp from "./MainApp/JSX-components/MainApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./MainApp/JSX-components/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/Mainapp",
    element: <MainApp />,
  },
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

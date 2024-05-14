import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>

        <Route index element={<Home />} />

      </Route>
    ))


  return (

    <RouterProvider router={router} />

  )
}

export default App
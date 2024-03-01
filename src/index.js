import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Header } from "./components/Header";
import "./index.css";
import { Hero } from "./pages/Hero";
import { PopularMovie } from "./pages/PopularMovie";
import { TopRatedMovie } from "./pages/TopRatedMovie";
import { Upcoming } from "./pages/UpcomingMovie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={route}> */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/rated" element={<TopRatedMovie />} />
        <Route path="/popular" element={<PopularMovie />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
    <App />
    {/* </RouterProvider> */}
  </React.StrictMode>
);

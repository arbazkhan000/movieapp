import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { PopularMovie } from "../pages/PopularMovie";
import { TopRatedMovie } from "../pages/TopRatedMovie";
import { Upcoming } from "../pages/UpcomingMovie";
import { Hero } from "../pages/Hero";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Hero />} /> */}
      <Route path="popular" element={<PopularMovie />} />
      <Route path="rated" element={<TopRatedMovie />} />
      <Route path="upcoming" element={<Upcoming />} />
    </Route>
  )
);

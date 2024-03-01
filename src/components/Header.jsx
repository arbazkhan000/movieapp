import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="h-[80px] flex  justify-around items-center">
        <div className="text-3xl">
          Movie <span className="text-[#F5920A]">Hub</span>
        </div>
        <div className="flex items-center list-none gap-10 text-xl">
          <Link to="popular">Popular</Link>
          <Link to="rated">Top Rated</Link>
          <Link to="upcoming">Up Coming</Link>
        </div>
      </div>
    </>
  );
};

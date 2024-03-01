import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Api_Key } from "../Conf";

export const Hero = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}`
        );
        const data = await response.json();
        setPopularMovie(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, []); // Removed popularMovie from the dependency array to avoid infinite loop

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovie.map((movie) => (
          <div key={movie.id}>
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div className="posterImage__overlay">
              <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
                {movie.original_title}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

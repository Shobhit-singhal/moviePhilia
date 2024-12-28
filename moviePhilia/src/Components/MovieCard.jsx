import React, { useRef, useState } from "react";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  const movieOverall = useRef();
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOver = (e) => {
    if (e.target.tagName.toLowerCase() === "img") {
      setMouseOver(true);
    }
  };
  const handleMouseOut = (e) => {
    if (e.target.tagName.toLowerCase() === "img") {
      setMouseOver(false);
    }
  };
  const handleClick = (e) => {};
  return (
    <div
      id={movie.id}
      ref={movieOverall}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      className="w-40  text-black p-0.5 flex flex-col  text-xs gap-1 movieOverall"
    >
      <Link to={`/search/${movie.id}`}>
        <div className="relative">
          {mouseOver ? (
            <div
              className="absolute top-1/2 left-1/3 z-10
                    text-green-500 text-lg"
            >
              PLAY
            </div>
          ) : (
            ""
          )}
          <div className="min-h-60 flex justify-center">
            <img
              className="rounded-xl cursor-pointer hover:opacity-15 transition-all"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        </div>
      </Link>
      <Link to={`/search/${movie.id}`} className="text-white text-sm">
        <p
          className="font-semibold cursor-pointer hover:text-emerald-500  transition-all
            "
          id="titleContainer"
        >
          {movie.title}
        </p>
      </Link>

      <div className="flex justify-between ">
        <span className="text-gray-500">{movie.release_date.slice(0, 4)}</span>
        <span className="text-gray-500">
          {movie.original_language.toUpperCase()}
        </span>
        <span className="text-gray-500 border-2 border-gray-500 rounded-sm px-0.5">
          Movie
        </span>
      </div>
    </div>
  );
};

export default MovieCard;

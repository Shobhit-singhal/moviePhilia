import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById, searchMovies } from "../api.js";
import MovieCard from "../Components/MovieCard.jsx";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Specific = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [per, setPer] = useState(0);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await getMovieById(params.id);
        let val=Math.round((data.vote_average / 10) * 100);
        console.log(val);
        setPer(val);
        console.log("movie:", data, "per:", per);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        console.log("Loading finished");
      }
    };
    getMovie();
  }, []);

  if (loading) {
    return <div>Loading please wait...</div>; // Show loading state
  }

  if (!movie) {
    console.log(movie);
    return <div>Movie not found</div>; // Handle case where movie is null
  }

  return (
    <>
      <div className="w-5/6 h-[500px] m-auto flex">
        <div className=" h-full w-1/3 flex justify-center items-center ">
          <img
            className="h-[90%] rounded-xl"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="h-full px-4 w-2/3 flex flex-col gap-5 justify-center items-start">
          <h1>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h1>
          <div className="flex items-center justify-between gap-3">
            <div className="border-2 p-1 px-2">{movie.adult ? "18" : "16"}</div>
            <p>
              {movie.release_date} ({movie.original_language.toUpperCase()})
            </p>
            <div>
              {movie.genres.map((genre) => (
                <span>{genre.name} </span>
              ))}
            </div>
            <div>
              {Math.floor(movie.runtime / 60)}h
              {movie.runtime % 60 === 0 ? "" : Math.floor(movie.runtime % 60)}m
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-lg font-bold h-16 w-16 rounded-full bg-gray-900 flex justify-center items-center">
              <CircularProgressbarWithChildren value={per} maxValue={100}>
                <p>{per}%</p>
              </CircularProgressbarWithChildren>
            </div>
            <div>User Score</div>
            <div className="p-2 rounded-full bg-blue-600">
              What's your vibe?
            </div>
          </div>
          <div className="text-gray-500 italic font-semibold">
            {movie.tagline}
          </div>
          <div className="flex flex-col justify-start items-start text-left">
            <p>Overview</p>
            <br />
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specific;

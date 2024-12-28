import React, { useEffect, useState } from 'react'
import Searchbar from '../Components/Searchbar'
import{getPopularMovies,searchMovies} from '../api.js'
import MovieCard from '../Components/MovieCard.jsx';
import background from '../assets/background.jpg';
import { useParams } from 'react-router';

const Movie = () => {
    const params=useParams();
    const searched=params.movie;
  const[movies,setMovies]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const getSearchMovie=async ()=>{
        try{
            console.log(searched);
            const data=await searchMovies(searched);
            console.log(data);
            if(data.length===0)
                setMovies(null);
            else
                setMovies(data);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
    getSearchMovie();
  },[params])
  if(loading){
    return(
      <div>loading</div>
    )
  }
  return (
    <div className='flex flex-col center gap-12 relative '>
      <div className=' relative z-10 h-36 w-full bg-blue-200 '>
      <p className='z-10 absolute left-1/3 top-1/2  text-black font-bold'
        >Find Movies, TV shows and more</p>
        <img src={background} 
        className=' h-36 w-full  opacity-60 object-cover object-top'
        alt='img' />
        
      </div>
      <div className='absolute z-30 w-full top-32 '>
        <Searchbar/>
      </div>
      {movies?(
        <div id='moviesContainer' className='flex flex-wrap gap-7 justify-center'>
        { movies.map((movie)=>(
          // console.log(movie);
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>):(
        <div>No movies found....</div>
      )
      }
    </div>
  )
}

export default Movie

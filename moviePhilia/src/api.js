
const baseUrl='https://api.themoviedb.org/3';
const api_key=import.meta.env.VITE_api_key;
const api_bearer=import.meta.env.VITE_bearer;

export const getPopularMovies=async()=>{
    const response= await fetch(`${baseUrl}/movie/popular?api_key=${api_key}`);
    const data=await response.json();
    return data.results;
}
export const searchMovies=async(query)=>{
  const response= await fetch(`${baseUrl}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
  const data=await response.json();
  return data.results;

}
export const getMovieById=async (query)=>{
    // const url = `https://api.themoviedb.org/3/movie/${query}`;
    const url = `${baseUrl}/movie/${query}`;
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${api_bearer}`
      }
    };
    
    const response=await fetch(url,options);
    const data=await response.json();
    return data
    
}
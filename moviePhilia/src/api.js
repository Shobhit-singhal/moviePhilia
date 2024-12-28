import Search from "./pages/Search";
const baseUrl='https://api.themoviedb.org/3';
const api_key=import.meta.env.VITE_api_key;



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
// export const searchMovies=async(query)=>{
//     const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
//     const options = {
//     method: 'GET',
//     headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzY0NzgyNmFlMGU0OTBlZmE0MGU0MjQyN2RhNDQzNSIsIm5iZiI6MTczNTM2MjgxMS4wNzAwMDAyLCJzdWIiOiI2NzZmODhmYmNmZTYyNjQ0ZGYxMmRhMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iZ-ICwZEaIcNXbVnUlV0W6nLuxYGBsInaGUBMeyb1G4'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
// }

export const getMovieById=async (query)=>{
    const url = `https://api.themoviedb.org/3/movie/${query}`;
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzY0NzgyNmFlMGU0OTBlZmE0MGU0MjQyN2RhNDQzNSIsIm5iZiI6MTczNTM2MjgxMS4wNzAwMDAyLCJzdWIiOiI2NzZmODhmYmNmZTYyNjQ0ZGYxMmRhMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iZ-ICwZEaIcNXbVnUlV0W6nLuxYGBsInaGUBMeyb1G4'
      }
    };
    
    const response=await fetch(url,options);
    const data=await response.json();
    return data
    
}
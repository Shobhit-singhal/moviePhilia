import React, { useRef, useState } from "react";
import { searchMovies } from "../api";
import { useNavigate } from "react-router";

const Searchbar = () => {
  const navigate=useNavigate();
    const[search,setSearch]=useState('');
    const inputField=useRef(null);
    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(inputField.current.value);
      navigate(`/${inputField.current.value}`);
    }
  return (
    <form onSubmit={handleSubmit}
    className="searchContaier w-full flex justify-center z-10">
      <input
        type="text"
        placeholder="Search movie here.."
        ref={inputField}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-2/3 rounded-l-2xl p-2 px-4"
      />
      <button type ='submit' className="rounded-r-2xl bg-blue-500 ">
        Search
      </button>
    </form>
  );
};

export default Searchbar;

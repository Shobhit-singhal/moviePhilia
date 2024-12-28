import React, { useRef, useState } from 'react'
import background from'../assets/background.jpg';
import './home.css'
import { useNavigate } from 'react-router';
import Searchbar from '../Components/Searchbar';


const Home = () => {
    
    const navigate=useNavigate();
    
  return (
    <div className='flex flex-col gap-4  ' >
        <div className='bg-gray-500 opacity-60 absolute h-96 w-full z-10'>
        </div>
            <div className='  gap-5 
            h-96 flex flex-col justify-center items-center align-middle  ]' id='background' >
                <Searchbar />
                <button
                    onClick={()=>{navigate('/trending')}}
                    className='rounded-2xl p-4 px-8 z-10 '
                >View full Site</button>
            </div>
        
        
        <div className='flex flex-col center gap-3 p-4'>
            <p>MoviePhilia is the best site to watch movies and TV series online for free. These are the things that make HDToday the best site so far:</p>
            <p>- No Ads</p>
            <p>- Free and Fast streaming server</p>
            <p>- No account required to watch</p>
            <p>- One click streaming</p>
            <p>- Huge library with over 400,000 videos</p>
            <p>So if you are looking for a safe site to watch movies online, let s give HDToday a try. And if you like our service, please bookmark the site and share it to your friends. </p>
            <p>Thank You</p>
        </div>
        <button
         onClick={()=>{navigate('/trending')}}
         className='rounded-2xl p-4 px-8 w-56 m-auto'
        >
            Go to MoviePhilia
        </button>
    </div>
  )
}

export default Home

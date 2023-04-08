import React,{useState,useEffect} from 'react'
import axios from 'axios';
import requests from '../util/Requests';
import {FaPlay} from 'react-icons/fa';

const Main = () => {
    const [movies,setMovies] = useState([]);
   

    useEffect(() => {
      axios.get(requests.requestPopular)
      .then((response) => setMovies(response.data.results))
      
    },[])

    const movie = movies[Math.floor(Math.random() * movies.length)]
   

    const truncateString = (str,num) =>{
      if(str?.length > num){
        return str.slice(0,num) + '...'
      }else{
        return str
      }
    }

    
  return (
    <section className='w-full h-[550px] text-white '>
      <div className='w-full h-full relative'>
        <div 
        className='absolute w-full bg-gradient-to-r  from-black h-[550px]'> 
        </div>
        <img 
        className='w-full object-cover h-full '
        src={
          `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
        } 
        alt={movie?.title}
        />
        <div className='absolute w-full  top-[20%] p-4 md:p-8 '>

          <h1 
          className='text-3xl md:text-5xl font-bold'>
            {movie?.title}
          </h1>

          <div className='text-md md:text-lg my-6 flex items-center'>

          <button 
          className='flex items-center gap-2 border capitalize bg-gray-300 text-black border-gray-300 py-2  px-5'>
            <p>play</p> 
          <FaPlay/>
          </button>
          <button 
          className='border capitalize  text-white border-gray-300 py-2 px-5 ml-4'>watch later
          </button>
          </div>

          <p 
          className='text-gray-400  text-sm my-4'>
            released:{movie?.release_date}
          </p>
          <p 
          className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {truncateString(movie?.overview,150)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Main

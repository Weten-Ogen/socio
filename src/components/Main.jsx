import React,{useState,useEffect} from 'react'
import axios from 'axios';
import requests from '../Requests'

const Main = () => {
    const [movies,setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random * movies.length)]

    useEffect(() => {
      axios.get(requests.requestPopular)
      .then((response) => setMovies(response.data.results))
    }, [])

    
  return (
    <div>
      
    </div>
  )
}

export default Main

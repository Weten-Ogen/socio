import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Movie from './Movie';
import { BsChevronLeft, BsChevronRight} from 'react-icons/bs';




const Row = ({title,fetchUrl,rowId}) => {

    const [like, setLike] =useState(false);

    const [movies,setMovies] = useState([]);

    const handleLike =() => {
      setLike(prev => !prev)
    };

    useEffect(() => {
    axios.get(fetchUrl).then(
      response => setMovies(response.data.results)
    )},[fetchUrl]);

    const slideLeft = () =>{
      let slider = document.getElementById('slider' + rowId);
      slider.scrollLeft = slider.scrollLeft - 500
    };

    const slideRight = () =>{
      let slider = document.getElementById('slider' + rowId);
      slider.scrollLeft = slider.scrollLeft + 500
    };




  return (
    <>
      <h2 className='text-white font-bold  md:text-xl  p-4'>{title}
      </h2>
      <div className='relative flex items-center group'>
        <BsChevronLeft 
        onClick={slideLeft} 
        size={40} 
        className='bg-white rounded-full absolute opaciity-50 left-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '/>
        <div 
        id={'slider' + rowId}
         className='w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {
          movies.map(item => {
            return (
              <Movie 
              key={item.id} 
              handleLike={handleLike} 
              like={like} 
              data={item}
            />)})
        }
        </div>
        <BsChevronRight 
        onClick={slideRight} 
        size={40} 
        className='bg-white rounded-full absolute opaciity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0 '/>
      </div>
    </>
  )
}

export default Row

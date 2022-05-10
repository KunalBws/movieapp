import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import style from './Home.module.scss'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch()
  const movieText = "batman"

  useEffect(()=>{
    const fetchMovies = async() => {
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)  
      .catch((err)=>{
        console.log(err)
      });
      console.log("The response is", response)
      dispatch(addMovies(response.data))
    }
    fetchMovies()
  },[])
  return (
    <div>
      <div className={style.banner}></div>
      <MovieListing/>
    </div>
  )
}

export default Home
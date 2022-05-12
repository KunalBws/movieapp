import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import style from './Home.module.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch()
  const movieText = "Justice League"
  const showText = "Dark"

  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  },[dispatch])
  return (
    <div>
      <div className={style.banner}></div>
      <MovieListing/>
    </div>
  )
}

export default Home
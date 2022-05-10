import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import style from './MovieListing.module.scss'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  let renderMovies = ""

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ) : (<div className={style.movieserror}><h2>{movies.Error}</h2></div>) 
  return (
    <div className={style.moviewrapper}>
      <div className={style.movielist}>
        <h2>Movies</h2>
        <div className={style.moviecontainer}>{renderMovies}</div>  
      </div>  
    </div>
  )
}

export default MovieListing
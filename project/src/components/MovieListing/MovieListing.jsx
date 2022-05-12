import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import style from './MovieListing.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import Slider from 'react-slick/lib/slider'
import { Settings } from '../../common/Settings'

const MovieListing = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  // }
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  let renderMovies,renderShows = ""

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ) : (<div className={style.movieserror}><h2>{movies.Error}</h2></div>) 

  renderShows = movies.Response === 'True' ? (
    shows.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ) : (<div className={style.showserror}><h2>{shows.Error}</h2></div>) 

  return (
    <div className={style.moviewrapper}>
      <div className={style.movielist}>
        <h2>Movies</h2>
        <div className={style.moviecontainer}>
          <Slider {...Settings}>{renderMovies}</Slider>
          </div>  
      </div>
      <div className={style.movielist}>
        <h2>Shows</h2>
        <Slider {...Settings}>{renderShows}</Slider>  
      </div>  
    </div>
  )
}

export default MovieListing
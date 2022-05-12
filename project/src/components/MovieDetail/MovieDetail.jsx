import React, { useEffect } from 'react'
import style from './MovieDetail.module.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieorShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice'

const MovieDetail = () => {
  const { imdbID } = useParams()

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAsyncMovieorShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  },[dispatch, imdbID])

  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)
  return (
    <div className={style.moviesection}>
      {Object.keys(data).length === 0 ?
        (<div>Loading....</div>)
      :(
      <>
      <div className={style.sectionleft}>
        <div className={style.movietitle}>{data.Title}</div>
        <div className={style.movierating}>
          <span>
            IMDb Rating : {data.imdbRating}
          </span>
          <span>
            IMDb votes : {data.imdbVotes}
          </span>
          <span>
            Runtime : {data.Runtime}
          </span>
          <span>
            Year : {data.Year}
          </span>
        </div>

        <div className={style.movieplot}>
          {data.Plot}
        </div>
        <div className={style.movieinfo}>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Actors</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className={style.sectionright}>
        <img src={data.Poster} alt={data.Title}/>
      </div>
    </>)}
    </div>
  )
}

export default MovieDetail
import React from 'react'
import { Link } from 'react-router-dom'
import style from './MovieCard.module.scss' 

const MovieCard = (props) => {
  const {data} = props
  return (
    <div className={style.carditem}>
      <Link to={`/movie/${data.imdbID}`}>
      <div className={style.cardinner}>
        <div className={style.cardtop}>
          <img src={data.Poster} alt={data.title}/>
        </div>
        <div className={style.cardbottom}>
          <div className={style.cardinfo}>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard
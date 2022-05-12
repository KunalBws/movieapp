import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import user from '../../images/user.png'
import style from './Header.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Header = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch() 

  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert("Enter a name to search")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))    
    setTerm("") 
  }
  return (
    <div className={style.header}>
        <div className={style.logo}>
          <Link to="/">Movie App</Link>
        </div>
        <div className={style.searchbar}>
          <form onSubmit={submitHandler}>
            <input type='text' value={term} placeholder='Search your favourite movies and shows' onChange={(e)=>setTerm(e.target.value)}/>
            <button type='submit'><AiOutlineSearch/></button>
          </form>
        </div>
      <div className={style.userimage}>
        <img src={user} alt="user"/>
      </div>
    </div>
  );
};

export default Header
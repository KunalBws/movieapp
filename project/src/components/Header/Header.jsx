import React from 'react'
import {Link} from 'react-router-dom'
import user from '../../images/user.png'
import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/">
        <div className={style.logo}>Movie App</div>
      </Link>
      <div className={style.userimage}>
        <img src={user} alt="user"/>
      </div>
    </div>
  );
};

export default Header
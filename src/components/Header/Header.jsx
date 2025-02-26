import React, { useState } from 'react'
import logo from '../../assets/icons/logo.svg'
import heart from '../../assets/icons/heart_icon.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { pageRoutes } from '../../constants/pageRoutes'
import useCounter from '../../hooks/useCounter/useCounter'
import Search from '../Search/Search'

const Header = () => {
  // const {count,increment,decrement,reset} = useCounter(10);

  return (
    <header className={styles.header}>
      <Link to={pageRoutes.commonRoutes.home}> <img src={logo} alt="logo" /></Link>

      <Search></Search>
      {/* <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
      </div> */}
      <div className={styles.wrapper__btns}>
        <Link to={pageRoutes.cartRoutes.cart} className={styles.btn}>
          <img src={heart} alt="" />
        </Link>
        <Link className={styles.btn}>
          <img src={heart} alt="" />
        </Link>
      </div>
    </header>
  )
}

export default Header
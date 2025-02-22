import React from 'react'
import logo from '../../assets/icons/logo.svg'
import heart from '../../assets/icons/heart_icon.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import {pageRoutes} from '../../constants/pageRoutes'
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={pageRoutes.commonRoutes.home}> <img src={logo} alt="logo" /></Link>
      
      <div className={styles.wrapper__search}>
        <input type="search" placeholder='search'/>
      </div>
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
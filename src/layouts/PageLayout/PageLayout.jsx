import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import styles from './PageLayout.module.css';

const PageLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Sidebar />
        <main className={styles.main}>
          <Outlet></Outlet>
        </main>
      </div>
      <footer>footer</footer>
    </div>
  )
}

export default PageLayout
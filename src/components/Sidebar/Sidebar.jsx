import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import {Link} from 'react-router'

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then(response => setCategories(response.data))
            .catch(error => console.error("Ошибка загрузки категорий:", error));
    }, []);
    
    return (
      <aside className={styles.sidebar}>
        <ul>
          {categories.map(category => (
              <li key={category} className={styles.sidebar_item}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </li>
          ))}
        </ul>
        <Link to="/">Все товары</Link>
      </aside>
    )
}

export default Sidebar
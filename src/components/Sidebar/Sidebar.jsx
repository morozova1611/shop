import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios.get("https://dummyjson.com/products/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error("Ошибка загрузки категорий:", error))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return (
      <div>
        Идет загрузка
      </div>
    )
  }
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
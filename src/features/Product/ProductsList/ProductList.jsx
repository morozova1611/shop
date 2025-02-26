import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../../Product/ProductCard/ProductCard'
import { Pagination } from "@mui/material";
import styles from './ProductList.module.css'
import Button from '../../../components/ui/Button/Button';
import { SERVER_URL } from '../../../constants/constnts';

const ProductList = () => {
    const { category } = useParams();
    const [searchParams, setSearchParams] = useSearchParams(); 
    const searchQuery = searchParams.get("search") || ""; 

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    
    const [page, setPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const limit = 6;

    useEffect(() => {
        setSearchParams({});
        setPage(1); // Сбрасываем страницу при изменении категории
    }, [category]);

    useEffect(() => {
        setIsLoading(true);
        const skip = (page - 1) * limit;
        let url;
        if (searchQuery) {
            url = `${SERVER_URL}/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
        } else if (category) {
            url = `${SERVER_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
        } else {
            url = `${SERVER_URL}/products?limit=${limit}&skip=${skip}`;
        }
        axios
            .get(url)
            .then((response) => {
                setProducts(response.data.products || []);
                setTotalProducts(response.data.total || 0);
            })
            .catch((error) => console.error("Ошибка загрузки товаров:", error))
            .finally(() => setIsLoading(false));
    }, [category, searchQuery, page]);
    if (isLoading) {
        return (
            <div>
                Идет загрузка
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <h2>
                {searchQuery
                    ? `Результаты поиска: "${searchQuery}" в категории "${category || 'Все товары'}"`
                    : category
                    ? `Категория: ${category}`
                    : "Все товары"}
            </h2>
            <div className={styles.products}>
                {products.map(product => (
                    <ProductCard key={product.id}
                        id={product.id}
                        image={product.thumbnail}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>          

            <Pagination
                count={Math.ceil(totalProducts / limit)}
                page={page} 
                onChange={(_, num) => setPage(num)} 
                className={styles.pagination}
            />
        </div>
    )
}

export default ProductList
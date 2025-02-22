import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../../../components/ui/ProductCard/ProductCard';
import { Pagination } from "@mui/material";
import styles from './ProductList.module.css'
import Button from '../../../components/ui/Button/Button';
import { SERVER_URL } from '../../../constants/constnts';

const ProductList = () => {
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const limit = 10;

    useEffect(() => {
        setPage(1); // Сбрасываем страницу при изменении категории
    }, [category]);

    useEffect(() => {
        setIsLoading(true);
        const skip = (page - 1) * limit;
        const url = category
            ? `${SERVER_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
            : `${SERVER_URL}/products?limit=${limit}&skip=${skip}`;
        axios
            .get(url)
            .then(response => {
                setProducts(response.data.products);
                setTotalProducts(response.data.total);
            })
            .catch(error => console.error("Ошибка загрузки товаров:", error))
            .finally(() => setIsLoading(false));
    }, [category, page]);
    if (isLoading) {
        return (
            <div>
                Идет загрузка
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <h2>Категория {category ? category : 'не выбрана'}</h2>
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
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductList = () => {
    const { category } = useParams();
    const [products,setProducts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const url = category 
            ? `https://dummyjson.com/products/category/${category}`
            : `https://dummyjson.com/products?limit=10&skip=0`;
        axios
        .get(url)
        .then(response=>setProducts(response.data.products))
        .catch(error => console.error("Ошибка загрузки товаров:", error));
    }, [category]);

    return (
        <div>
            Категория {category ? category : 'не выбрана'}
            {products.map(product => (
                <div key={product.id} className="item">
                <img src={product.thumbnail} alt="картинка" className="img"/>
                <span className="item-title">{product.title}</span>
                <button className="item-buy-btn">Купить</button>
                </div>
            ))}
        </div>
    )
}

export default ProductList
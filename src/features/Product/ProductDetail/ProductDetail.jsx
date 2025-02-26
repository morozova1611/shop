import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../../constants/constnts";
import { useCart } from "../../../contexts/CartContext/CartContext";
import { Button, Card, CardContent, Typography } from "@mui/material";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
    const { id } = useParams(); 
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${SERVER_URL}/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((err) => setError("Ошибка загрузки товара"))
            .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Товар не найден</p>;

    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className={styles.image}
                />
                <CardContent>
                    <Typography variant="h4">{product.title}</Typography>
                    <Typography variant="h6" color="textSecondary">
                        {product.category}
                    </Typography>
                    <Typography variant="body1">{product.description}</Typography>
                    <Typography variant="h5" className={styles.price}>
                        Цена: ${product.price}
                    </Typography>
                    <Typography variant="body2">
                        В наличии: {product.stock} шт.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addToCart(product)}
                        className={styles.button}
                    >
                        Добавить в корзину
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductDetail;

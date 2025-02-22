import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Button from '../Button/Button';
import styles from './ProductCard.module.css'
import { CART } from '../../../constants/constnts';

const ProductCard = (
    { image,
        title,
        description,
        price,
        id
    }
) => {
    const getCart = () => {
        const cart = localStorage.getItem(CART);
        return cart ? JSON.parse(cart) : [];
    }

    const handleAddToFavorite = () => {
        const cart = getCart();

        const product = {
            id,
            price,
            title,
            quantity: 1,
        }

        const foundedItem = cart.find((item)=> item.id === product.id)
        
        if (foundedItem){
            foundedItem.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem(CART,stringify(cart));
    }

    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.image}
                image={image}
                title={title} />
            <CardContent>
                <Typography gutterBottom component={'div'}>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <CardActions>
                    <Button size='small' variant='text'>Купить {price}</Button>
                    <Button onClick={handleAddToFavorite}>Сохранить</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductCard
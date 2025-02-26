import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Button from '../Button/Button';
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

const ProductCardUI = ({
    image,
    title,
    description,
    price,
    id,
    handleAddToCart
}
) => {
    return (
        <Card className={styles.card}>
            <Link to={`/product/${id}`} className={styles.link}>
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
                    <Button onClick={handleAddToCart}>Сохранить</Button>
                </CardActions>
            </CardContent>
            </Link>
        </Card>
    )
}

export default ProductCardUI
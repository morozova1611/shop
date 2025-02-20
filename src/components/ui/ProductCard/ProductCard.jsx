import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = (
    { image,
        title,
        description,
        price,
        handleBuy,
        handleAddToFavorite }
) => {
    console.log(image);
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
                    <Button onClick={handleBuy} size='small' variant='text'>Купить {price}</Button>
                    <Button onClick={handleAddToFavorite}>Сохранить</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductCard
import React from 'react';
import { useCart } from '../../contexts/CartContext/CartContext';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Cart = () => {
    const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <Card key={item.id}>
                            <CardContent>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography>Цена: {item.price}</Typography>
                                <Typography>Общая сумма: {item.price * item.quantity}</Typography>
                                <div>
                                    <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                                    <Typography>{item.quantity}</Typography>
                                    <Button onClick={() => addToCart(item)}>+</Button>
                                    <Button onClick={() => removeFromCart(item.id)} color="error">Удалить</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <Typography variant="h5">Итого: {totalPrice}</Typography>
                    <Button variant="contained" color="primary" fullWidth>
                        Купить
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Cart;

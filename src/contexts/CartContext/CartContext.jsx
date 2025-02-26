import { createContext, useContext, useState, useEffect } from "react";
import { CART } from '../../constants/constnts'
const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
    const getCart = () => {
        const cartLS = localStorage.getItem(CART);
        return cartLS ? JSON.parse(cartLS) : [];
    }

    const [cart, setCart] = useState(getCart());

    useEffect(() => {
        localStorage.setItem(CART, JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {

        setCart((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);
            let updateCart;
            if (existingItem) {
                updateCart = prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);

            } else {
                updateCart = [...prev, { ...product, quantity: 1 }];
            }

            return updateCart;
        });
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter(item => item.id !== productId));
    };

    const decreaseQuantity = (productId) => {
        setCart((prev) => {
            return prev.map(
                item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item).filter(item => item.quantity > 0
                        );
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart должен использоваться внутри <CartProvider>');
    }
    return context;
};
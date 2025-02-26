import { CART } from '../../../constants/constnts';
import ProductCardUI from '../../../components/ui/ProductCard/ProductCard';
import { useCart } from '../../../contexts/CartContext/CartContext';

const ProductCard = (
    { image,
        title,
        description,
        price,
        id
    }
) => {
    const {addToCart} = useCart();

    return (
        <ProductCardUI 
        image={image}
        title={title}
        description={description}
        price={price}
        id={id}
        handleAddToCart={() => addToCart({id,price,title})}
         />
    )

}

export default ProductCard
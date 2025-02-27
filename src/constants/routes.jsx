import { createBrowserRouter } from "react-router-dom";
import PageLayout from '../layouts/PageLayout/PageLayout';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import Cart from '../pages/Cart/Cart';
import { pageRoutes } from "./pageRoutes";
import ProductDetail from "../features/Product/ProductDetail/ProductDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [{
            path: pageRoutes.commonRoutes.home,
            element: <Home></Home>,
        }, {
            path: pageRoutes.commonRoutes.category,
            element: <Home></Home>,
        },
        {
            path: pageRoutes.cartRoutes.cart,
            element: <Cart></Cart>,
        },
        {
            path: pageRoutes.productRoutes.product,
            element: <ProductDetail />,
        },
        ],
    }
]);

export default router;
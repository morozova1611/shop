import React, { useContext } from 'react'
import ProductList from '../../features/Product/ProductsList/ProductList'
import { CustomThemeProvider } from '../../contexts/CustomThemeProvider/CustomThemeProvider';

const Home = () => {
  const theme = useContext(CustomThemeProvider);

  return (
    <div>
      <ProductList></ProductList>
    </div>
  )
}

export default Home
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"
import router from "./constants/routes"
import { createTheme, ThemeProvider } from '@mui/material'
import { CustomThemeProvider } from "./contexts/CustomThemeProvider/CustomThemeProvider"
import { CartProvider } from "./contexts/CartContext/CartContext"

const theme = createTheme({
  palette: {
    primary: {
      main: '#7AA899',
    },
    secondary: {
      main: '#27263D',
    },
    error: {
      main: '#6E6C78',
    },
    info: {
      main: '#3B3A3D'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomThemeProvider value="dark">
        <CartProvider>
        <RouterProvider router={router}>

        </RouterProvider>
        </CartProvider>
      </CustomThemeProvider>
    </ThemeProvider>
  )
}

export default App

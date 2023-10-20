import { IS_DEVELOPMENT } from './config.js'

import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

import { useFilters } from './hooks/useFilters'
import { Cart } from './components/cart'
import { CartProvider } from './context/cart'

import './App.css'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header></Header>
      <Cart />
      <Products products={filteredProducts}></Products>
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App

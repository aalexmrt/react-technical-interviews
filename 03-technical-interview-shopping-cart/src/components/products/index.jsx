import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/index.jsx'
import { useCart } from '../../hooks/useCart.js'
import './styles.css'

function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail}></img>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <button
                className={
                  isProductInCart ? 'remove-product-btn' : 'add-product-btn'
                }
                onClick={() =>
                  isProductInCart ? removeFromCart(product) : addToCart(product)
                }
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
export { Products }

import { useCart } from '../../hooks/useCart'
import './styles.css'

export function Footer() {
  const { cart } = useCart()

  return <footer className="footer">{JSON.stringify(cart, null, 2)}</footer>
}

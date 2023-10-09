import { Link } from '../components/Router'

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        elit vel bibendum bibendum, elit elit bibendum elit, vel bibendum elit
        elit.
      </p>
      <Link to="about">About</Link>
    </>
  )
}

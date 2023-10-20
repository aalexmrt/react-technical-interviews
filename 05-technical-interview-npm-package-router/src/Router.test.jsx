import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router, Route, Link } from './components/Router'
import { getCurrentPath } from './utils/utils'

// import { getCurrentPath } from './utils/utils.js'

vi.mock('./utils/utils.js', () => ({
  getCurrentPath: vi.fn(),
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBe(true)
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    screen.debug()
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        component: () => <h1>Home</h1>,
      },
      {
        path: '/about',
        component: () => <h1>About</h1>,
      },
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })
  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')
    render(
      <Router>
        <Route
          path="/"
          component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="about">Go to about</Link>
              </>
            )
          }}
        />
        <Route
          path="/about"
          component={() => {
            return (
              <>
                <h1>About</h1>
                <Link to="/">Go to home</Link>
              </>
            )
          }}
        />
      </Router>
    )
  })
})

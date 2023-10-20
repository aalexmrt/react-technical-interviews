import { test, expect, describe } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from './tests/test-utils.jsx'
import App from './App.jsx'

describe('App component', () => {
  test('renders the App component', () => {
    render(<App />)
  })

  test('the component App has the heading title "Discover Stores"', () => {
    render(<App />)
    const titleHeader = screen.getByRole('heading', {
      name: /discover stores/i,
    })
    expect(titleHeader).toBeInTheDocument()
  })

  test('renders the reward rate slider', () => {
    render(<App />)
    const rewardRateSlider = screen.getByRole('slider', { name: 'Reward rate' })
    expect(rewardRateSlider).toBeInTheDocument()
  })

  test('renders the live status combobox', () => {
    render(<App />)
    const liveStatusCombobox = screen.getByRole('combobox', {
      name: 'Live Status',
    })
    expect(liveStatusCombobox).toBeInTheDocument()
  })

  test('renders the main element', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  test('the main element contains images', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toContainHTML('<img')
  })
})

import { test, describe, expect } from 'vitest'
import { fireEvent, screen } from '@testing-library/react'
import { render } from '../../tests/test-utils.jsx'

import { Filters } from './index.jsx'

describe('move slider changes ball size', () => {
  test('slider is rendered', () => {
    render(<Filters />)
    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
  })

  test('slider has initial value 0', () => {
    render(<Filters />)
    const slider = screen.getByRole('slider')
    expect(parseInt(slider.value)).toBe(0)
  })
  test('slider updates value to 0.15', () => {
    render(<Filters />)
    const slider = screen.getByRole('slider')
    fireEvent.change(slider, { target: { value: 0.15 } })
    expect(slider).toHaveValue('0.15')
  })
})

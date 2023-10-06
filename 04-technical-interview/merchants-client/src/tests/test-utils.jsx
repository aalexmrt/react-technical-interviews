import { render } from '@testing-library/react'
import { FiltersProvider } from '../context/filters'

const AllTheProviders = ({ children }) => {
  return <FiltersProvider>{children}</FiltersProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

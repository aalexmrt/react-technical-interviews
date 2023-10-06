import { Filters } from './components/filters'
import { Merchants } from './components/merchants'

import { useFilters } from './hooks/useFilters'
import { useMerchants } from './hooks/useMerchants'

import './App.css'

function App() {
  const { merchants } = useMerchants()
  const { filterProducts } = useFilters()

  const merchantsFiltered = filterProducts(merchants)

  return (
    <div className="page">
      <h1>Discover stores</h1>
      <Filters />
      <Merchants merchantsFiltered={merchantsFiltered} />
    </div>
  )
}

export default App

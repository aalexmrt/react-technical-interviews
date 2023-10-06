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
      <header>
        <Filters />
      </header>
      <main>
        {merchantsFiltered.length > 0 ? (
          <Merchants filteredMerchants={merchantsFiltered} />
        ) : (
          <p>No merchants found</p>
        )}
      </main>
    </div>
  )
}

export default App

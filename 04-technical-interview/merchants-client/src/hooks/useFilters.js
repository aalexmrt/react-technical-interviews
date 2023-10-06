import { useContext } from 'react'

import { FiltersContext } from '../context/filters'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (merchants) => {
    return merchants.filter((merchant) => {
      return (
        merchant.rewardsRate >= filters.minRewardsRate &&
        (filters.liveStatus === 'all' ||
          merchant.liveStatus === filters.liveStatus)
      )
    })
  }
  return { filters, filterProducts, setFilters }
}

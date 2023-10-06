// filters component
import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'

import './styles.css'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minRewardsRateFilterId = useId()
  const liveStatusFilterId = useId()

  const handleChangeMinRewardsRate = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minRewardsRate: event.target.value,
    }))
  }

  const handleChangeLiveStatus = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      liveStatus: event.target.value,
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minRewardsRateFilterId}>Reward rate</label>
        <input
          type="range"
          id={minRewardsRateFilterId}
          min="0"
          max="0.15"
          step="0.01"
          onChange={handleChangeMinRewardsRate}
          value={filters.minRewardsRate}
        ></input>
        <span>{filters.minRewardsRate} %</span>
      </div>
      <div>
        <label htmlFor={liveStatusFilterId}>Live Status</label>
        <select onChange={handleChangeLiveStatus} id={liveStatusFilterId}>
          <option value="all">All</option>
          <option value="live">Live</option>
          <option value="coming_soon">Cooming soon</option>
        </select>
      </div>
    </section>
  )
}

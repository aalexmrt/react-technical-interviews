import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'
import { useEffect, useRef, useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstSearch = useRef(true)
  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }
    if (search === '') {
      setError('Cannot search empty movies')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('Cannot search movie with numbers')
      return
    }
    if (search.length < 3) {
      setError('Minimum caracters are three')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
export function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })
  const debouncedGetMovies = useCallback(
    debounce(({ search }) => {
      console.log('serach', search)
      getMovies({ search })
    }, 250)
  )
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies({ search: newSearch })
  }
  const handleSort = (event) => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <form className="form" onSubmit={handleSubmit}>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <input
            style={error ? { backgroundColor: 'red' } : null}
            onChange={handleChange}
            name="search"
            placeholder="Avengers, Star Wars"
          />
          <button>Submit</button>
        </form>
      </header>
      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App

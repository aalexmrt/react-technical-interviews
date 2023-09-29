const API_KEY = '60700db9'

export async function SearchMovies({ search }) {
  if (search === '') return null

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}&type=movie`
    )
    const json = await response.json()

    const movies = json.Search
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}

import { useCatImage } from './hooks/useCatImage'
import { useFact } from './hooks/useFact'
import './App.css'

export function App() {
  const { fact, refreshFact } = useFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>New fact</button>
      {fact && <p className="fact-text">{fact}</p>}
      {imageUrl && (
        <div className="box-img">
          <img src={imageUrl} alt={`Image extracted using the ${fact}`} />
        </div>
      )}
    </main>
  )
}

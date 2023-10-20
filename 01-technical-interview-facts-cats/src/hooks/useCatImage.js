import { useEffect, useState } from 'react'
import { getCatWithWords } from '../services/cats'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')

    getCatWithWords({ threeFirstWords }).then((newImageUrl) =>
      setImageUrl(newImageUrl)
    )
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}

import { useCallback, useEffect, useState } from 'react'

import { retrieveMerchantsData } from '../services/retrieve-merchants-data'

export function useMerchants() {
  const [merchants, setMerchants] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMerchants = useCallback(async () => {
    try {
      setLoading(true)
      const newMerchants = await retrieveMerchantsData()
      setMerchants(newMerchants)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getMerchants()
  }, [getMerchants])

  return { merchants, loading, error }
}

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export async function getRandomFact() {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!res.ok) throw new Error('Error fetching fact')
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    return err
  }
}

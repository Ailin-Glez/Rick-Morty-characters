import { useState } from 'react'

export const BASE_URL = 'https://rickandmortyapi.com/api/character'

export function useRickAndMorty() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [pages, setPages] = useState({ pages: 0, next: null, prev: null })

  const onSetAppData = (url = 'https://rickandmortyapi.com/api/character') => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(`Something went wrong: Status ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setData(data.results)
        setPages({ ...data.info })
        setError(null)
      })
      .catch((err) => setError(err))
  }

  return { data, pages, error, onSetAppData }
}

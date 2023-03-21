import { useState } from 'react'

export const BASE_URL = 'https://rickandmortyapi.com/api/character'

const navigateToPage = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('Error getting info')
    } else {
      const data = await res.json()
      return data
    }
  } catch (err) {
    return err
  }
}

export function useRickAndMorty(url = 'https://rickandmortyapi.com/api/character') {
  const [data, setData] = useState([])
  const [pages, setPages] = useState({ pages: 0, next: null, prev: null })

  const onSetAppData = (url) => {
    navigateToPage(url)
      .then((data) => {
        setData(data.results)
        setPages({ ...data.info })
      })
      .catch((err) => {
        throw Error('Something went wrong', err)
      })
  }

  return { data, pages, onSetAppData }
}

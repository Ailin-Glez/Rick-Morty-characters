import './App.css'

import { useEffect, useState } from 'react'

import Header from './Header'
import NoResults from './NoResults'
import Pages from './Pages'
import SearchBar from './SearchBar'
import Table from './Table'
import { BASE_URL, navigateToPage } from './utils'

function App() {
  const [data, setData] = useState(null)
  const [criteria, setCriteria] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [pages, setPages] = useState({ pages: 0, next: null, prev: null })

  const setAppData = (url) => {
    navigateToPage(url)
      .then((data) => {
        setData(data.results)
        setPages({ ...data.info })
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    setAppData()
  }, [])

  const searchCharacter = (char) => {
    setAppData(`${BASE_URL}/?name=${char}`)
    setCriteria(char)
  }

  return (
    <div className='app'>
      <Header />
      <SearchBar onSearchCharacter={searchCharacter} />
      {!data ? <NoResults criteria={criteria} /> : !isLoading ? <Table data={data} setAppData={setAppData} /> : 'Loading...'}
      <Pages pages={pages} characterName={criteria} setAppData={setAppData} />
    </div>
  )
}

export default App

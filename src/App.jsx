import { useState } from 'react'

import {
  BASE_URL,
  useRickAndMorty,
} from './hooks/useRickAndMorty'

import Header from './Header'
import Pages from './Pages'
import SearchBar from './SearchBar'
import Table from './Table'

import './App.css'

function App() {
  const [criteria, setCriteria] = useState([])
  const { data, pages, onSetAppData } = useRickAndMorty()
  const message = '"Nobody exists on purpose. Nobody belongs anywhere. We`re all going to die. Come watch TV"'

  const searchCharacter = (char) => {
    // To avoid sending request with the same previous data
    if (char !== criteria) {
      onSetAppData(`${BASE_URL}/?name=${char}`)
      setCriteria(char)
    }
  }

  return (
    <div className='app-container'>
      <Header />
      <SearchBar onSearchCharacter={searchCharacter} />
      {!data && (
        <div className='no-results'>
          <img src='./no-results.png' alt='no result image' />
          <p>No results found for "{criteria}"</p>
        </div>
      )}
      {data?.length === 0 ? (
        <h4 className='welcome-message'>{message}</h4>
      ) : (
        <>
          <Table data={data} />
          <Pages pages={pages} characterName={criteria} onPageNavigation={onSetAppData} />
        </>
      )}
    </div>
  )
}

export default App

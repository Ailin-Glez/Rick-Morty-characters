import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import './SearchBar.css'

/**
 * SearchBar component
 * Uses state to handle the input field value
 * @prop {function} onSearchCharacter - Function received from the App parent component to handle the character search.
 * The function receives the character value entered
 */
const SearchBar = ({ onSearchCharacter }) => {
  const [searchCriteria, setSearchCriteria] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearchCharacter(searchCriteria)
  }

  const clearSearchInput = () => {
    setSearchCriteria('')
    onSearchCharacter('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <BsSearch className='search-icon' size='14' />
      <input className='search-box' type='text' value={searchCriteria} onChange={(e) => setSearchCriteria(e.target.value)} placeholder='Enter character name' />
      <button type='button' className={searchCriteria ? 'search-clear-btn' : 'search-hidden-btn'} onClick={clearSearchInput}>
        X
      </button>
    </form>
  )
}

export default SearchBar
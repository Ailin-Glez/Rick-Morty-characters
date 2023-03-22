import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

import './SearchBar.css'

/**
 * SearchBar component
 * Uses ref to handle the input field value
 * @prop {function} onSearchCharacter - Function received from the App parent component to handle the character search.
 * The function receives the character value entered
 */

function SearchBar({ onSearchCharacter }) {
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearchCharacter(inputRef.current.value)
  }

  const clearSearchInput = () => {
    inputRef.current.value = ''
    onSearchCharacter('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <BsSearch className='search-icon' size='14' />
      <input className='search-box' type='text' ref={inputRef} placeholder='Enter character name' />
      <button type='button' className={inputRef.current?.value ? 'search-clear-btn' : 'search-hidden-btn'} onClick={clearSearchInput}>
        X
      </button>
    </form>
  )
}

export default SearchBar
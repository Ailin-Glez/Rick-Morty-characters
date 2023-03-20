import { useRef } from 'react'
import {BsSearch} from 'react-icons/bs'

import './SearchBar.css'

/**
 * SearchBar component
 * Uses ref to handle the input field
 * @prop {function} onSearchCharacter - Function received from the App parent component to handle the character search. 
 * The function receives the character value entered
 */
const SearchBar = ({ onSearchCharacter }) => {
  const inputRef = useRef()

  const handleSearch = (e) => {
    e.preventDefault()
    onSearchCharacter(inputRef.current.value)
  }

  const clearSearch = () => {
    inputRef.current.value = ''
    onSearchCharacter('')
  }

  return (
    <form onSubmit={handleSearch}>
      <BsSearch className='search-icon' size='14' />
      <input className='search-box' type='text' ref={inputRef} placeholder='Enter character name' />
      <button className={inputRef.current?.value ? 'search-clear-btn' : 'search-hidden-btn'} onClick={clearSearch}>X</button>
    </form>
  )
}

export default SearchBar

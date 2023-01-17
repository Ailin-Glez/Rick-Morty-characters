import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import styles from './SearchBar.module.css'

const SearchBar = ({ searchCharacter }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    searchCharacter(inputValue)
  }

  const clearSearch = () => {
    setInputValue('')
    searchCharacter('')
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSearch}>
      <BsSearch className={styles.searchIcon} size='18' />
      <input className={styles.searchbox} type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter character name' />
      <button type='button' className={inputValue ? styles.clearBtn : styles.hidden} onClick={clearSearch}>X</button>
      <button type='submit' disabled={!inputValue}>Search</button>
    </form>
  )
}

export default SearchBar
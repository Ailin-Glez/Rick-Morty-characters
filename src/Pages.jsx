import { useEffect, useState } from 'react'
import {BASE_URL} from './hooks/useRickAndMorty'

import './Pages.css'

// Local Function  to return an array with the pages numbers to display (example: [4, 5, 6])
const getNumbers = (num, totalPages) => {
  const pagesN = [...Array(totalPages).keys()].map((n) => n + 1)

  if (num === 1) {
    if (totalPages === 1) return [num]
    return [num, 2]
  } else if (num === 42) {
    return [41, num]
  } else {
    const index = pagesN.findIndex((n) => n === num)
    return pagesN.slice(index - 1, index + 2)
  }
}

/**
 * Pages component
 * Uses state to handle the current page selected
 * @prop {object} pages - Object with the pages information (next, prev, pages)
 * @prop {string} characterName - Character name to be included in the URL to search
 * @prop {function} onPageNavigation - Function received from the App parent component to handle the App data
 * when navigating to an specific page
 */

function Pages({ pages, characterName, onPageNavigation }) {
  const [currentPage, setCurrentPage] = useState(1)
  const { pages: totalPages, prev, next } = pages
  const pageNumbers = getNumbers(currentPage, totalPages)

  const handleNavigationToPage = (page) => {
    if (currentPage !== page) {
      setCurrentPage(page)
      onPageNavigation(`${BASE_URL}?page=${page}&name=${characterName}`)
    }
  }

  useEffect(() => { 
    // Reset the current page to be 1 after a new character name search
    setCurrentPage(1)
  }, [characterName])

  return (
    <footer className='pages-container'>
      <button className='pages-btn' disabled={prev === null} onClick={() => handleNavigationToPage(1)}>
        {'<<'}
      </button>
      {pageNumbers.map((page) => {
        const pageClassName = page === currentPage ? 'pages-btn pages-current-page' : 'pages-btn'
        return (
          <button key={page} className={pageClassName} onClick={() => handleNavigationToPage(page)}>
            {page}
          </button>
        )
      })}
      <button className='pages-btn' disabled={next === null} onClick={() => handleNavigationToPage(totalPages)}>
        {'>>'}
      </button>
      <span className='pages-number'>
        {totalPages} {totalPages === 1 ? 'page' : 'pages'}
      </span>
    </footer>
  )
}

export default Pages

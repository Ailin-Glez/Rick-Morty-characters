import { useState } from 'react'

import styles from './Pages.module.css'
import { BASE_URL } from './utils'

const Pages = ({ pages, characterName, setAppData }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const numberOfPages = pages.pages

  const getNumbers = (num) => {
    const pagesN = [...Array(numberOfPages).keys()].map((n) => n + 1)

    if (num === 1) {
      return [num, 2]
    } else if (num === 42) {
      return [41, num]
    } else {
      const index = pagesN.findIndex((n) => n === num)
      return pagesN.slice(index - 1, index + 2)
    }
  }

  const handleNavigateToPage = (page) => {
    if (currentPage !== page) {
      // const url = characterName ? `${BASE_URL}?page=${page}&name=${characterName}`
      setCurrentPage(page)
      //   setAppData(`${BASE_URL}?page=${page}`)
      setAppData(`${BASE_URL}?page=${page}&name=${characterName}`)
    }
  }

  const pageNumbers = getNumbers(currentPage)
  const numbers = pageNumbers.map((page, i) => {
    return (
      <button key={i} className={`${styles.pagesBtn} ${page === currentPage && styles.currentPage}`} onClick={() => handleNavigateToPage(page)}>
        {page}
      </button>
    )
  })

  return (
    <div className={styles.pagesContainer}>
      <button className={styles.pagesBtn} disabled={pages.prev === null} onClick={() => handleNavigateToPage(1)}>
        {'<<'}
      </button>
      {numbers}
      <button className={styles.pagesBtn} disabled={pages.next === null} onClick={() => handleNavigateToPage(numberOfPages)}>
        {'>>'}
      </button>
      <span className={styles.pages}>
        {numberOfPages} {numberOfPages === 1 ? 'page' : 'pages'}
      </span>
    </div>
  )
}

export default Pages

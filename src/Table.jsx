import { useState } from 'react'

import Card from './Card'
import Row from './Row'
import styles from './Table.module.css'

const Table = ({ data }) => {
  const [isCardOpened, setIsCardOpened] = useState(false)
  const [cardDetails, setCardDetails] = useState([])

  const handleEyeClick = (char) => {
    setIsCardOpened(true)
    setCardDetails(char)
  }

  const table = (
    <table className={styles.table} cellSpacing='0' cellPadding='2'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Specie</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((char, i) => {
            return <Row character={char} index={i} key={char.id} handleEyeClick={handleEyeClick} />
          })}
      </tbody>
    </table>
  )

  return (
    <>
      <div className={styles.tableContainer}>
        {table}
        {isCardOpened && <Card details={cardDetails} />}
      </div>
    </>
  )
}

export default Table

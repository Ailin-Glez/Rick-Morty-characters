import { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'

import Card from './Card'
import './Table.css'

/**
 * Table component
 * Displays a table with the data provided
 * When clicking on the eye button, the Card component is rendered
 * @prop {object} data - Object with the character data (id, name, status, species, etc)
 */
const Table = ({ data }) => {
  const [isCardOpened, setIsCardOpened] = useState(false)
  const [cardDetails, setCardDetails] = useState([])

  const handleEyeClick = (char) => {
    setIsCardOpened(true)
    setCardDetails(char)
  }

  return (
    <div className='table-container'>
      <table cellSpacing='0' cellPadding='2'>
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
              const { id, name, status, species } = char
              return (
                <tr key={id} className={i % 2 !== 0 ? 'odd' : ''} onClick={() => handleEyeClick(char)}>
                  <td>{name}</td>
                  <td>{status}</td>
                  <td>{species}</td>
                  <td>
                    <AiFillEye className='row-eye-btn'/>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {isCardOpened && <Card details={cardDetails} onCardClose={() => setIsCardOpened(false)} />}
    </div>
  )
}

export default Table
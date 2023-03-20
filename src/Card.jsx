import './Card.css'

/**
 * Card component
 * Stateless component to show a card with the character info
 * @prop {object} details - Object with the character data (name, status, species, gender, location, type)
 * @prop {function} onCardClose - Function to be executed in the parent (Table) to close the card
 */
function Card({ details, onCardClose }) {
  const labels = ['Name', 'Species', 'Gender', 'Status', 'Location', 'Type']

  const card = (
    <aside className='card-container'>
      <img className='card-image' src={details.image} alt='character image' />
      <section className='card-info'>
        {labels.map((label) => {
          const detailData = label === 'Location' ? details[label.toLowerCase()].name : details[label.toLowerCase()]
          return (
            <div className={label === 'Name' ? 'card-content-group name' : 'card-content-group'} key={label}>
              {label !== 'Name' && <label className='card-label'>{label} </label>}
              <span>{detailData || '-'}</span>
            </div>
          )
        })}
      </section>
      <button className='card-close-btn' onClick={onCardClose}>
        Close
      </button>
    </aside>
  )

  return card
}

export default Card

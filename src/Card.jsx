import styles from './Card.module.css';

function Card({ details }) {
    const labels = ['Name', 'Species', 'Gender', 'Status', 'Type']
    // const [hideCard, setHideCard] = useState(false)


    const cardContent = labels.map(label => {
        return <div key={label}>
            <label>{label} </label>
            <span>{details[label.toLowerCase()] || '-'}</span>
        </div>
    })

    const card = <aside key={1} className={styles.container}>
        <img className={styles.image} src={details.image} alt="character image" />
        <div className={styles.info}>
            {cardContent}
        </div>
        {/* <button className={styles.closeBtn} onClick={()=> setHideCard(!hideCard)}>Close</button> */}
    </aside>

    return card;
}

export default Card;
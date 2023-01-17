import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.text}>Rick and Morty characters</p>
      <a href='https://rickandmortyapi.com/documentation/' target='_blank'>
        <img className={styles.logo} src='./log1.png' alt='logo' />
      </a>
    </div>
  )
}

export default Header

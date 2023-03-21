import './Header.css'

/**
 * Header component
 * stateless component that displays the header title and the Rick and Morty logo image with a link to a new tab
 * with the Rick and Morty API documentation
 */

function Header() {
  return (
    <div className='header-container'>
      <p className='header-text'>Rick and Morty characters</p>
      <a href='https://rickandmortyapi.com/documentation/' target='_blank'>
        <img className='header-logo' src='./logo-header.png' alt='logo' />
      </a>
    </div>
  )
}

export default Header
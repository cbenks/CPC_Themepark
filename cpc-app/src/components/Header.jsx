import {Link} from 'react-router-dom'

const Header = () => {
  return (
  
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/tickets">Tickets</Link>
      </nav>
  )
}

export default Header
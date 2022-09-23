
import { Link } from 'react-router-dom'
import '../css/bootstrap.min.css'
import Buscador from './Buscador'

export const Header = (props) => {
  return (
    <header >
        <nav className="navbar-expand-sm bg-dark p-4 d-flex justify-content-between"> 
            <ul className="navbar-nav mb-2 mb-lg-0  ">
                <Link to={'/'} className=""><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width={'80 px'} alt="react logo" /></Link>
                <div className='d-flex align-items-center mx-5'>
                    <li className="nav-item ">
                        <Link to="/" className='text-light text-decoration-none '>Home</Link>
                    </li>
                    <li className="nav-item mx-3 ">
                        <Link to="/listado" className='text-light text-decoration-none'>Listado</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/favoritos" className='text-light text-decoration-none'>Favoritos</Link>
                    </li>
                </div>
            </ul>
                <Buscador/>
        </nav>
    </header> 
  )
}

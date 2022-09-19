
import { Link } from 'react-router-dom'
import '../css/bootstrap.min.css'

export const Header = () => {
  return (
    <header >
        <nav className="navbar-expand-sm bg-dark p-4"> 
            <ul className="navbar-nav mb-2 mb-lg-0  d-flex justify-content-between ">
                <div className='d-flex '>
                <Link to={'/'} className=""><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width={'80 px'} alt="react logo" /></Link>
                </div>
                <div className='d-flex align-items-center '>
                    <li className="nav-item ">
                        <Link to="/" className='text-light text-decoration-none '>Home</Link>
                    </li>
                    <li className="nav-item mx-3 ">
                        <Link to="/listado" className='text-light text-decoration-none'>Listado</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className='text-light text-decoration-none'>Contacto</Link>
                    </li>
                </div>
            </ul>
        </nav>
    </header> 
  )
}

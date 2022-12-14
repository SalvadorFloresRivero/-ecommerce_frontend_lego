import { NavLink } from 'react-router-dom';
function Navbar() {
    return (

        <header className="fondo d-flex flex-wrap align-items-center justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center ">
                <li ><NavLink to="/home" className="nav-link   mr-4 ml-4 text-white">Home</NavLink></li>
                <li><NavLink to="/products" className="nav-link   mr-4 ml-4 text-white">Productos</NavLink></li>
                <li><NavLink to="/login" className="nav-link   mr-4 ml-4 text-white">Inicio de sesión</NavLink></li>
                <li><NavLink to="/account" className="nav-link  mr-4 ml-4 text-white">Registrarse</NavLink></li>
            </ul>
        </header>
    )
}

export default Navbar
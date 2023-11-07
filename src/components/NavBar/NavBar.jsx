import './NavBar.css';
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">

             <Link to='/'> <h1>FunkosPe</h1></Link> 

             <div className="Categorias">
                <NavLink to={`/categoty/ofertas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
                <NavLink to={`/categoty/destacados`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Destacados</NavLink>
                <NavLink to={`/categoty/anime`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Anime</NavLink>
                <NavLink to={`/categoty/marvel`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Marvel</NavLink>
                <Link><FiShoppingCart className="flex rounded-lr rounded-lg   box-content  hover:bg-green-300 bg-gray-500"/></Link>
             </div>        
           
        </nav>
    )
}

export default NavBar
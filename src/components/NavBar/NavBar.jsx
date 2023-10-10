import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
    return (
        <nav>
            <h1 className="left-px  text-white font-bold bg-black text-2xl">FunkosPe</h1>
            <div className="text-2xl text-white uppercase font-bold text-center ">
            
                    <a href="#" className=" hover:bg-green-300  hover:text-black   pl-1 pr-1 m-3 box-content bg-gray-500 ">Ofertas</a>
               
                    <a href="#" className=" hover:bg-green-300  hover:text-black   pl-1 pr-1 m-3 box-content bg-gray-500 ">Detacados</a>
                
                    <a href="#" className=" hover:bg-green-300  hover:text-black   pl-1 pr-1 m-3 box-content bg-gray-500 ">Animes</a>
               
                    <a href="#" className=" hover:bg-green-300  hover:text-black   pl-1 pr-1 m-3 box-content bg-gray-500 ">Marvel </a>
                    
                    <a href="#"><FiShoppingCart className="flex rounded-lr rounded-lg   box-content  hover:bg-green-300 bg-gray-500"/></a>
            </div>
           
        </nav>
    )
}

export default NavBar
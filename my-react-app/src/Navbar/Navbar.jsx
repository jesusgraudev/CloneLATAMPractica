import { useState } from "react";
import logo from '../assets/logo-latam.png'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="bg-white shadow-md py-6 flex">

        <div className="w-1/5 pl-24">
            <img src={logo} alt="Logo" className="w-25" />
        </div>
            
        <div className="w-2/5 flex justify-start items-center">
            <ul className="flex gap-6">
                {/* SERVICIOS */}
                <li className="relative">
                    <button onClick={() => toggleMenu("servicios")}className="flex items-center gap-1 font-semibold">
                        Servicios<span className={`transform transition-transform duration-300 ${openMenu === "servicios" ? "rotate-180" : "rotate-0"}`}>V</span>
                    </button>

                    {openMenu === "servicios" && (
                        <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 w-40 p-2 rounded-md z-10">
                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Consultoría</li>
                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Desarrollo</li>
                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Soporte</li>
                        </ul>
                    )}
                </li>

                {/* NOSOTROS */}
                <li className="relative">
                    <button onClick={() => toggleMenu("nosotros")}className="flex items-center gap-1 font-semibold">
                        Nosotros<span className={`transform transition-transform duration-300 ${openMenu === "nosotros" ? "rotate-180" : "rotate-0"}`}>V</span>
                    </button>

                    {openMenu === "nosotros" && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 w-40 p-2 rounded-md z-10">
                        <li className="hover:bg-gray-100 p-2">Equipo</li>
                        <li className="hover:bg-gray-100 p-2">Historia</li>
                    </ul>
                    )}
                </li>

                    {/* NOSOTROS */}
                <li className="relative">
                    <button onClick={() => toggleMenu("aquellos")}className="flex items-center gap-1 font-semibold">
                        Nosotros<span className={`transform transition-transform duration-300 ${openMenu === "aquellos" ? "rotate-180" : "rotate-0"}`}>V</span>
                    </button>

                    {openMenu === "aquellos" && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 w-40 p-2 rounded-md z-10">
                        <li className="hover:bg-gray-100 p-2">Equipo</li>
                        <li className="hover:bg-gray-100 p-2">Historia</li>
                    </ul>
                    )}
                </li>
            </ul>
        </div>

        <div className="w-2/5">
            <ul>
                <a href="#">Estado de vuelo</a>
                <a href="#">LATAM Pass</a>
                <a href="#">USD • USD</a>
                <button>Iniciar sesión</button>
            </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;

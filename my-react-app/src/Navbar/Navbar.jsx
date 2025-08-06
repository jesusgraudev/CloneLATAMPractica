import { useState } from "react";
import logo from '../assets/latam-logo.png'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="shadow-md py-4 flex bg-[#10004f] text-white">
            
        <div className="w-1/2 flex justify-start items-center">

            <img src={logo} alt="Logo" className="w-28 ml-25 mr-15 " />
            <ul className="flex gap-6">
                {/* SERVICIOS */}
                <li className="relative">
                    <button onClick={() => toggleMenu("servicios")}className="flex items-center gap-3 font-semibold hover:bg-[#403372] px-3 py-1 rounded-2xl">
                        Servicios<span className={`transform transition-transform duration-300 ${openMenu === "servicios" ? "rotate-180" : "rotate-0"}`}>▼</span>
                    </button>

                    {openMenu === "servicios" && (
                        <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 w-40 p-2 rounded-md z-10 text-black">
                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Consultoría</li>
                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Desarrollo</li>
                            <li className="hover:bg-gray-100 p-2 cursor-pointer">Soporte</li>
                        </ul>
                    )}
                </li>

                {/* NOSOTROS */}
                <li className="relative">
                    <button onClick={() => toggleMenu("nosotros")}className="flex items-center gap-3 font-semibold hover:bg-[#403372] px-3 py-1 rounded-2xl text-white">
                        Nosotros<span className={`transform transition-transform duration-300 ${openMenu === "nosotros" ? "rotate-180" : "rotate-0"}`}>▼</span>
                    </button>

                    {openMenu === "nosotros" && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg mt-2 w-40 p-2 rounded-md z-10 text-black">
                        <li className="hover:bg-gray-100 p-2">Equipo</li>
                        <li className="hover:bg-gray-100 p-2">Historia</li>
                    </ul>
                    )}
                </li>

                    {/* Centro de ayuda */}
                <li><a href="#" className="flex items-center font-semibold hover:bg-[#403372] px-3 py-1 rounded-2xl">Centro de ayuda</a></li>
            </ul>
        </div>

        <div className="w-1/2 flex items-center justify-center">
            <ul className="flex gap-7">
                <li className="py-1"><a href="#" className="hover:underline underline-offset-4">Estado de vuelo</a></li>
                <li className="py-1"><a href="#" className="hover:underline underline-offset-4">LATAM Pass</a></li>
                <li className="py-1"><a href="#">USD • USD</a></li>
                <button className="px-3 py-1 bg-[#403372] rounded-2xl border border-transparent hover:border-white text-white font-bold transition-all duration-100">Iniciar sesión</button>
            </ul>
        </div>
      
    </nav>
  );
};

export default Navbar;

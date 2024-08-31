import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo desktop.png'
import HighProducts from './HighProducts';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Lógica para buscar o termo
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-2 fixed z-20  w-screen sm:w-full">
      <div className="px-20 flex justify-between items-center">
        <div className="flex items-center space-x-6 ">
          <Link href="/">
            <Image alt="logo" src={Logo} />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/home">
              <p className="text-gray-300 hover:text-primary-yellow">Home</p>
            </Link>
            <Link href="/nossas-lojas">
              <p className="text-gray-300 hover:text-primary-yellow">Nossas Lojas</p>
            </Link>
            <Link href="#HighProducts">
              <p className="text-gray-300 hover:text-primary-yellow">Novidades</p>
            </Link>
            <Link href="/promocoes">
              <p className="text-gray-300 hover:text-primary-yellow">Promoções</p>
            </Link>
          </div>
        </div>

        {/* Botão para exibir/ocultar menu em dispositivos móveis */}
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Campo de Pesquisa */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Digite o produto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-2 bg-primary-gtext-primary-grey text-primary-grey focus:outline-primary-yellow"
          />
          <button
            onClick={handleSearch}
            className="bg-black  text-primary-grey px-4 py-2 ml-3 border-2 hover:scale-110 transition-all duration-500 hover:border-primary-yellow"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Menu Responsivo */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <Link href="/home">
            <p className="block text-gray-300 hover:text-primary-yellow">Home</p>
          </Link>
          <Link href="/nossas-lojas">
            <p className="block text-gray-300 hover:text-primary-yellow">Nossas Lojas</p>
          </Link>
          <Link href="/novidades">
            <p className="block text-gray-300 hover:text-primary-yellow">Novidades</p>
          </Link>
          <Link href="/promocoes">
            <p className="block text-gray-300 hover:text-primary-yellow">Promoções</p>
          </Link>

          {/* Campo de Pesquisa em Modo Responsivo */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Digite o produto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-2 w-full bg-primary-gtext-primary-grey text-primary-grey focus:outline-primary-yellow"
            />
            <button
              onClick={handleSearch}
              className="bg-black text-primary-grey px-4 py-2 ml-3 border-2 hover:scale-110 transition-all duration-500 hover:border-primary-yellow"
            >
              Buscar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
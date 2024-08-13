import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Logo desktop.png'
import { useState } from 'react';


export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Lógica de busca (redirecionar para página de resultados, etc.)
    console.log('Buscando por:', searchTerm);
  };

  return (
   
    <nav className="bg-black p-2">
      <div className="px-20  flex justify-between items-center">
     
        <div className="flex items-center space-x-6 ">
          <Link href="/">
          <Image alt='logo' src={Logo}></Image>
          </Link>
          <Link href="/home">
            <p className="text-gray-300 hover:text-primary-yellow ">Home</p>
          </Link>
          <Link href="/nossas-lojas">
            <p className="text-gray-300 hover:text-primary-yellow">Nossas Lojas</p>
          </Link>
          <Link href="/novidades">
            <p className="text-gray-300 hover:text-primary-yellow">Novidades</p>
          </Link>
          <Link href="/promocoes">
            <p className="text-gray-300 hover:text-primary-yellow">Promoções</p>
          </Link>
        </div>

        {/* Campo de Pesquisa */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Digite o produto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-2  bg-primary-gtext-primary-grey text-primary-grey  focus:outline-primary-yellow"
          />
          <button
            onClick={handleSearch}
            className="bg-black text-primary-grey px-4 py-2 ml-3 border-2  hover:scale-110 transition-all duration-500 hover:border-primary-yellow"
          >
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
}

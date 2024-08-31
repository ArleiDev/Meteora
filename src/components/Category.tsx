
import Image from 'next/image'
import CategoriaBolsa from '../../public/Categoria Bolsa.png'
import CategoriaCalca from '../../public/Categoria calça.png'
import CategoriaCalcados from '../../public/Categoria Calçados.png'
import CategoriaCamiseta from '../../public/Categoria camiseta.png'
import CategoriaCasacos from '../../public/Categoria casacos.png'
import CategoriaOculos from '../../public/Categoria óculos.png'

function Category() {
  return (
    <div className='mt-16 text-center text-xl '>
        <h1 className='text-3xl'>Busque por categoria:</h1>
        <div className=" mt-16 flex items-center justify-center gap-5 flex-wrap">
        <div className="categoria hover:-translate-y-10 transition-all duration-500 cursor-pointer"><div className="w-48 h-52  bg-primary-yellow flex justify-center"><Image className='object-cover'  alt='' src={CategoriaCamiseta}></Image></div><button className='p-2 bg-black h-full w-full text-white'>Camisetas</button></div>
        <div className="categoria hover:-translate-y-10 transition-all duration-500 cursor-pointer"><div className="w-48 h-52  bg-primary-yellow flex justify-center"><Image className='object-cover'  alt='' src={CategoriaBolsa}></Image></div><button className='p-2 bg-black h-full w-full text-white'>Bolsas</button></div>
        <div className="categoria hover:-translate-y-10 transition-all duration-500 cursor-pointer"><div className="w-48 h-52  bg-primary-yellow flex justify-center"><Image className='object-cover'  alt='' src={CategoriaCalcados}></Image></div><button className='p-2 bg-black h-full w-full text-white'>Calçados</button></div>
        <div className="categoria hover:-translate-y-10 transition-all duration-500 cursor-pointer"><div className="w-48 h-52  bg-primary-yellow flex justify-center"><Image className='object-cover'  alt='' src={CategoriaCalca}></Image></div><button className='p-2 bg-black h-full w-full text-white'>Calças</button></div>
        <div className="categoria hover:-translate-y-10 transition-all duration-500 cursor-pointer"><div className="w-48 h-52  bg-primary-yellow flex justify-center"><Image className='object-cover'  alt='' src={CategoriaCasacos}></Image></div><button className='p-2 bg-black h-full w-full text-white'>Casacos</button></div>
        <div className="categoria hover:-translate-y-10 transition-all duration-500 cursor-pointer"><div className="w-48 h-52  bg-primary-yellow flex justify-center"><Image className='object-cover'  alt='' src={CategoriaOculos}></Image></div><button className='p-2 bg-black h-full w-full text-white'>Óculos</button></div>
        </div>
    </div>
  )
}

export default Category
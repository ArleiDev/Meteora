import React from 'react'
import Image from 'next/image'
import iconPix from '../../public/pix.svg'
import icontroca from '../../public/troca.svg'
import iconsustentabilidade from '../../public/sustentabilidade.svg'

function HighLights() {



  return (
    <div className='bg-black p-10'>
        <div className="text">
            <h2 className="text-3xl text-center text-white">Conheca todas as nossas facilidades</h2>
           <div className="cardPix flex gap-14 mt-10 justify-center">
                <Image height={90}  src={iconPix}></Image>
                <div className="textos">
                <h1 className='text-primary-yellow text-2xl font-semibold'>PAGUE PELO PIX</h1>
                <p className='text-white mt-5 max-w-52'>Ganhe 5% OFF em pagamentos via PIX</p>
                </div>
                <Image height={90}  src={icontroca}></Image>
                <div className="textos">
                <h1 className='text-primary-yellow text-2xl font-semibold'>TROCA GRÁTIS</h1>
                <p className='text-white mt-5 max-w-52'>Fique livre para trocar em até 30 dias.</p>
                </div>
                <Image height={90}  src={iconsustentabilidade}></Image>
                <div className="textos">
                <h1 className='text-primary-yellow text-2xl font-semibold'>SUSTENTABILIDADE</h1>
                <p className='text-white mt-5 max-w-52'>Moda responsável, que respeita o meio ambiente.</p>
                </div>
               
           </div>=
        </div>

    </div>
  )
}

export default HighLights
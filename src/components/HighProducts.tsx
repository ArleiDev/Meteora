import React from 'react'
import ProductCard from './ProductCard.tsx'
import camisaconforto from '../../public/camisetaconforto.svg'
import calcaalfaiataria from '../../public/calcaalfaiataria.svg'
import tenischuncky from '../../public/tenischuncky.svg'
import jaquetajeans from '../../public/jaquetajeans.svg'
import oculosredondo from '../../public/oculosredondo.svg'
import bolsacoringa from '../../public/bolsacoringa.svg'
import { title } from 'process';


function HighProducts() {

    const products = [
        {
          title: 'Camiseta Conforto',
          price: '70,00',
          description: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
          img: camisaconforto, 
        },
        {
          title: 'Calça Alfaiataria',
          price: '180,00',
          description: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
          img: calcaalfaiataria, 
        },

        {
            title: 'Tênis Chunky',
            price: '250,00',
            description: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
            img: tenischuncky, 
          },
        

          {
            title: 'Jaqueta Jeans',
            price: '150,00',
            description: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
            img: jaquetajeans, 
          },
          {
            title: 'Óculos Redondo',
            price: '120,00',
            description: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
            img: oculosredondo, 
          },
          {
            title: 'Bolsa coringa',
            price: '120,00',
            description: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
            img: bolsacoringa, 
          },
      ];


  return (
    <div  className="Highproducts mb-16">
        <div  className='mt-16 mb-16 text-3xl flex  justify-center'><h1 id='HighProducts'>Produtos que estão bombando!</h1></div>
        <div className="Cards flex flex-wrap  justify-center gap-16 ">
                {products.map((product, index) => (
                    <ProductCard 
                    key={index}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    img={product.img}
                    />
                ))}

        </div>
    </div>
    
    
  )
}

export default HighProducts
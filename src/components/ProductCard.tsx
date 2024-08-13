
import Image from 'next/image'


function ProductCard(props) {
  return (
<div className='max-w-[436px] h-[800px] flex flex-col border-2 border-gray-200'>
    <div className="img flex-shrink-0 h-92">
        <Image className='object-cover w-full h-full' src={props.img} />
    </div>
    <div className="flex-grow p-4 flex flex-col justify-between">
        <div className="font-semibold text-2xl">{props.title}</div>
        <div className="mt-3 text-lg flex-grow overflow-hidden">
            <p className="line-clamp-4">{props.description}</p>
        </div>
        <div className="font-semibold text-lg mt-3">R$ {props.price}</div>
        <button className='mt-3 text-white w-28 text-lg h-10 bg-primary-purple hover:scale-110 transition-all duration-500'>
            Ver mais
        </button>
    </div>
</div>
  )
}

export default ProductCard
import React from 'react'

function ContactEmail() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="border border-gray-300 p-12 border-black ">
        <p className="text-center mb-4 max-w-xl">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra?{' '}
          <span className="font-bold">Cadastre-se!</span>
        </p>
        <div className="flex items-center border border-gray-300  overflow-hidden">
          <input
            type="email"
            placeholder="Digite seu email"
            className="flex-1 py-2 px-4 focus:outline-none"
          />
          <button className="bg-purple-500 text-white px-6 py-2 hover:bg-purple-600 hover:scale-110 transition-all duration-500">
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactEmail
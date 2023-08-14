import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'

function Contato() {
  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === null) {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      navigate("/contato")
    }
  }, [usuario.token])

  return (
    <section className="bg-pink-400">
      <div>
        <div className="py-8 lg:py-12 px-14 mx-auto max-w-screen-md ">
          <h2 className="mb-4 text-4xl tracking-tight font-base text-center text-gray-900">Entre em contato</h2>
          <p className=" mb-8 lg:mb-8 font-light text-center text-gray-500 text-gray-500 sm:text-xl">Ficou com alguma dúvida sobre a mentoria? <br/> Preencha os dados a seguir:</p>
          <form action="#" className="space-y-7 ">
            <div>
              <label htmlFor="nome" className="block mb-2 text-sm font-base font-bold text-gray-900">Seu nome</label>
              <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 block w-full p-2.5" placeholder="Digite seu nome aqui" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-base font-bold text-gray-900">Seu email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="mulher@email.com" required />
            </div>
            <div>
              <label htmlFor="subject" className=" block mb-2 text-sm font-base font-bold text-gray-900">Assunto</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Deixe-nos saber como podemos te ajudar" required />
            </div>
          
            <div className='flex flex-col justify-center items-center'>
              <button type="submit" className="border border-gray-900 bg-purple-600 py-3 px-5 text-sm font-base text-center text-gray-300 rounded-lg bg-primary-700 sm:w-fit hover:bg-green-400 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}


export default Contato
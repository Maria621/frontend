import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Postagem from '../../../models/Postagem'
import { buscar, deletar } from '../../../service/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarPostagem() {
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagem/${id}`, setPostagem, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/mentorias")
  }

  async function DeletarPostagem() {
    try {
      await deletar(`/postagem/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Postagem apagada com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar a Postagem', 'erro')
    }

    retornar()
  }
  return (
    <div className='bg-white-400 min-h-screen flex justify-center items-center'>
    <div className=' container w-1/3 mx-auto'>
      <h1 className='text-6xl text-p p-4'>Cancelar Mentoria</h1>

      <p className='text-center p-4 font-p text-2xl mb-2'>Você tem certeza de que deseja cancelar a mentoria a seguir?</p>

      <div className='transition-transform transform hover:scale-110  bg-yellow-100  dark:bg-gray-800  shadow-lg mx-auto rounded-xl p-9'>
      
        <h4 className='text-gray-600 dark:text-white text-4xl '>{postagem.titulo}</h4>
          <img src={postagem.foto} className='text-gray-600 dark:text-white text-3xl'></img>
          <p className='text-gray-600 dark:text-white text-3xl'>{postagem.texto}</p>
        </div>
        <div className="flex">
          <button className='rounded-xl p-4 w-full text-white bg-green-600 hover:bg-green-400 flex items-center justify-center py-2 m-1 text-white-300' onClick={retornar}>Não</button>
          <button className='rounded-xl p-4 text-white bg-pink-800 hover:bg-pink-600 w-full flex items-center justify-center py-2 m-1 text-white-300' onClick={DeletarPostagem}>
            Sim
          </button>
        </div>
      </div>
    </div>
   
  )
}

export default DeletarPostagem
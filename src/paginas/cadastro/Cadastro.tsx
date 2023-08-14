import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../service/Service'
import './Cadastro.css'
import { toastAlerta } from '../../util/toastAlerta'


function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipo: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipo: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Dados inconsistentes', 'sucesso')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }


  return (
    <>
      <div className="bg-pink-400 ">
        <div className="min-h-screen bg-pink-400 text-gray-900 flex justify-center">
          <div className="max-w-screen-1xl m-0 sm:m-10 bg-pink-100 shadow sm:rounded-lg flex justify-center flex-1">
            <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
              <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div>
                  <img src="https://i.imgur.com/OJb60Jn.png"
                    className="w-mx-auto" />
                </div>
                <div className="mt-12 flex flex-col items-center">
                  <div className="w-full flex-1 ">


                    <div className=" text-center self-center mb-6 text-2xl font-base text-gray-800 sm:text-3xl dark:text-white">
                      Cadastre-se
                    </div>

                    <div className="mx-auto max-w-xs">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 mb-4 "
                        id="usuario"
                        name="usuario"
                        placeholder="E-mail"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                      />


                      <label htmlFor="nome">Tipo de Usuário</label>
                      <select
                        className="w-full px-8 py-4 rounded-lg  font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                        id="tipo"
                        name="tipo"
                        placeholder="Tipo de Usuário"
                        value={usuario.tipo}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setUsuario({ ...usuario, tipo: e.target.value })}
                      >
                        <option value=" ">Mentorada</option>
                        <option value="mentor">Mentora</option>
                      </select>

                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder="Coloque o link da sua foto aqui"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                      />
                      <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                      />
                      <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        value={confirmaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                      />

                      <button
                        type='submit'
                        className="mt-5 tracking-wide font-semibold bg-purple-600 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round">
                        </svg>
                        <span className="mr-3 text-white-100 ">
                          <p>Cadastrar</p>
                        </span>
                      </button>
                      <p className="mt-6 text-xs text-gray-600 text-center">
                        Eu li e concordo com os termos de uso da
                        <a href="#" className="ml-1 border-b border-gray-500 border-dotted">
                          Política de Privacidade
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-r-lg flex-1 bg-purple-600 text-center hidden lg:flex">
                <img className="m-12 xl:m-12  w-[35rem] h-[50rem] bg-contain bg-center bg-no-repeat background-image" src="https://i.imgur.com/PBR25iK.jpg" alt="mentoria" />
              </div>
              </form>
          </div>
        </div>
      
    </div >


    </>
  )
}

export default Cadastro

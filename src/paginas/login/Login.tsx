import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
 

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );
  let navigate = useNavigate();

  const { usuario, handleLogin } = useContext(AuthContext);
  const userTipo = usuario.tipo === 'mentor';

  const { isLoading } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>


      <div className='bg-pink-100 flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-12'>
        <div className=" flex justify-start items-start flex flex-col md:flex-row md:items-center">
        <img
            src="https://i.imgur.com/o6qVaqD.png" alt="Minas"
            className="max-w-full h-auto md:w-2/3 md:ml-08 md:mt-0 mt-8  mr-24 "
          />
          <div className=" md:w-1/2 md:mr-12 bg-pink-400 flex flex-col w-full max-w-md px-4 py-12 bg-white border-4 border-purple-600/80 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className=" self-center mb-6 text-2xl font-base text-gray-800 sm:text-3xl dark:text-white">
              Entre Na Sua Conta
            </div>
            <div className="mt-8">
              <form onSubmit={login}>
                <div className="flex flex-col mb-2">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                        </path>
                      </svg>
                    </span>


                    <input type="text"
                      id="usuario" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="usuario"
                      placeholder="E-mail"
                      value={usuarioLogin.usuario}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                  </div>
                </div>

                <div className="flex flex-col mb-6">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                        </path>
                      </svg>
                    </span>
                    <input
                      type="password"
                      id="senha" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="senha"
                      placeholder="Senha"
                      value={usuarioLogin.senha}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                  </div>
                </div>

              {userTipo ? (
                <div className="flex w-full">
                  <button type="submit" className=" flex justify-center py-2 px-4  bg-purple-600 hover:bg-green-100 focus:ring-green-100 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-gray-200 font-base  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    {isLoading ? <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    /> :
                      <span>Entrar</span>}
                  </button>
                </div>
                ) : (
                  <div className="flex w-full">
                  <button type="submit" className=" flex justify-center py-2 px-4  bg-purple-600 hover:bg-green-400 focus:ring-green-100 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-gray-200 font-base  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    {isLoading ? <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    /> :
                      <span>Entrar</span>}
                  </button>
                  </div>
                  )}

                <div className="flex items-center justify-center mt-6">
                  <span className="text-lg font-base ">
                    <p>Ainda não tem uma conta?{' '}

                    <Link to="/cadastro" className=" font-semibold inline-flex items-center text-center text-purple-600 hover:text-green-400 dark:text-green-400 dark:hover:text-white">

                        Cadastre-se

                      </Link>
                    </p>
                  </span>
                </div>


              </form>
            </div>

            <div className="fundoLogin hidden lg:block"></div>
          </div>
         
        </div>

      </div>

    </>
  );
}

export default Login;

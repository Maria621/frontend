import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'





function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}




function Navbar() {
  let navigate = useNavigate();
  const { usuario} = useContext(AuthContext);
  const userTipo = usuario.tipo === 'mentor';


  let navbarComponent

  

  if (usuario.token !== "") {
    navbarComponent = (
      <Disclosure as="nav" className="bg-purple-600">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>


                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-14 w-auto"
                      src="https://i.imgur.com/OAY8uOO.png"
                      alt="Logo Minas na Area"
                    />
                  </div>

                  <div>
                    {userTipo ? (
                      <>

                        <div className="hidden sm:ml-6 sm:block ">
                          <div className="flex flex-shrink-0 absolute inset-0 left-[800px] items-center">
                            <div className='flex gap-8 text-xl text-white-100 font-title'>
                              <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/home'>Home</Link> </button>
                              <button className='rounded-nav w-28 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200 duration-300 '><Link to='/mentorias'>Mentorias</Link> </button>
                              <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/contato'>Contato</Link></button>
                            </div>
                          </div>
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                          <div className="flex space-x-4">
                            <Link to='/home' className='text-3xl text-white-100 mt-3 font-title'>Minas na Área</Link>
                          </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                          <Disclosure.Panel className="sm:hidden">
                            <div className="flex flex-col sm:flex-row sm:items-start">
                              <Disclosure.Button>
                                <div className="hover:bg-purple-400 text-white-100 text-lg mb-2 ">
                                  <Link className="block rounded-md px-4 font-title" to='/home'>Home</Link>
                                </div>
                                <div className="hover:bg-purple-400 text-white-100 text-lg mb-2 ">
                                  <Link className="block rounded-md px-4 font-title" to='/mentorias'>Mentorias</Link>
                                </div>
                                <div className="hover:bg-purple-400 text-white-100 text-lg mb-2 ">
                                  <Link className="block rounded-md px-4 font-title" to='/contato'>Contato</Link>
                                </div>
                              </Disclosure.Button>
                            </div>
                          </Disclosure.Panel>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hidden sm:ml-6 sm:block ">
                          <div className="flex flex-shrink-0 absolute inset-0 left-[800px] items-center">
                            <div className='flex gap-8 text-xl text-white-100 font-title'>
                              <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/home'>Home</Link> </button>
                              <button className='rounded-nav w-28 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200 duration-300 '><Link to='/mentorias'>Agendamento</Link> </button>
                              <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/contato'>Contato</Link></button>
                            </div>
                          </div>
                        </div>
                        <div className="hidden sm:ml-4 sm:block">
                          <div className="flex space-x-4">
                            <Link to='/home' className='text-3xl text-white-100 pt-2 font-title'>Minas na Área</Link>
                          </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                          <Disclosure.Panel className="sm:hidden">

                            <div className="flex flex-col sm:flex-row sm:items-start">
                              <Disclosure.Button>
                                <div className="hover:bg-purple-400 text-white-100 text-lg mb-2 ">
                                  <Link className="block rounded-md px-4 font-title" to='/home'>Home</Link>
                                </div>
                                <div className="hover:bg-purple-400 text-white-100 text-lg mb-2 ">
                                  <Link className="block rounded-md px-4 font-title" to='/mentorias'>Mentorias</Link>
                                </div>
                                <div className="hover:bg-purple-400 text-white-100 text-lg mb-2 ">
                                  <Link className="block rounded-md px-4 font-title" to='/contato'>Contato</Link>
                                </div>
                              </Disclosure.Button>
                            </div>
                          </Disclosure.Panel>
                        </div>

                      </>
                    )}


                  </div>
                </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full rounded-full bg-pink-200 "
                        src="https://i.imgur.com/FYp7ezs.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-pink-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          to="/perfil"
                          className={classNames(active ? 'bg-pink-300' : '', 'block px-4 py-2 text-base text-purple-600')}
                        >
                          Perfil
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/login"
                          className={classNames(active ? 'bg-pink-300' : '', 'block px-4 py-2 text-base text-purple-600')}
                        >
                          Sair
                        </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

              </div>
            </div>

          </>
        )}
      </Disclosure>


    )
  } else {
    // Adicione o return aqui para renderizar os links quando o usuário não está logado
    navbarComponent = (
      <Disclosure as="nav" className="bg-purple-600 font-title ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-18">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ">
                    <Link to='/home' className='text-3xl text-white-100 font-title'>Minas na Área</Link>
                    <img
                      className="right-96 h-14 w-auto"
                      src="https://i.imgur.com/OAY8uOO.png"
                      alt="logo minas na area"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block  ">
                    <div className="flex flex-shrink-0 absolute inset-0 left-[800px] items-center">
                      <div className='flex gap-8 text-xl text-white-100 font-title'>
                        <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/home'>Home</Link> </button>
                        <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200 duration-300 '><Link to='/sobre'>Sobre</Link> </button>
                        <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200 duration-300 '><Link to='/contato'>Contato</Link> </button>
                        <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/login'>Entrar</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <Disclosure.Button>
                  <div className="">
                    <div className="hover:bg-purple-400 text-white-100 text-lg mb-2 ">
                      <Link className="block rounded-md px-4 font-title" to='/home'>Home</Link>
                    </div>
                    <div className="hover:bg-purple-400 text-white-100 text-lg mb-2">
                      <Link className="block rounded-md px-4 font-title" to='/sobre'>Sobre</Link>
                    </div>
                    <div className="hover:bg-purple-400 text-white-100 text-lg mb-2">
                      <Link className="block rounded-md px-4 font-title" to='/login'>Entrar</Link>
                    </div>
                  </div>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )



}

export default Navbar

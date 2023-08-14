import { useContext } from 'react';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { GlobeAltIcon, ArrowPathIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {
    const { usuario } = useContext(AuthContext);
    const userTipo = usuario.tipo === 'mentor';

    const features = [
        {
            name: 'Contribuição para a Comunidade',
            description:
                'Ser mentora permite que você contribua de maneira significativa para o desenvolvimento e o sucesso de outras mulheres. Você estará desempenhando um papel ativo na construção de uma sociedade mais diversificada e no fortalecimento da representação feminina no mercado de trabalho.            ',
            icon: GlobeAltIcon,
        },
        {
            name: 'Crescimento Pessoal e Profissional',
            description:
                'Ser mentora exige que você se coloque no lugar de outra pessoa, o que pode ampliar sua empatia e compreensão. Além disso, o ato de ajudar outras mulheres a alcançar seus objetivos pode trazer uma sensação de realização pessoal e profissional.',
            icon: ChartBarIcon,
        },
        {
            name: 'Influência Positiva',
            description:
                'Como mentora, você tem a oportunidade de ser um modelo positivo e inspirador para outras mulheres. Sua orientação e experiência podem impactar profundamente a confiança e a determinação delas.',
            icon: ArrowPathIcon,
        },
        {
            name: 'Desenvolvimento de Habilidades de Liderança',
            description:
                'A mentoria oferece a oportunidade de aprimorar suas habilidades de liderança, comunicação e aconselhamento. Você desenvolverá a capacidade de inspirar, orientar e apoiar outras pessoas em suas jornadas profissionais.',
            icon: UserGroupIcon,
        },
    ]


    let homeComponent;


    if (usuario.token !== '') {
        homeComponent = (

            <div>
                {userTipo ? (
                    <>

                        <div>
                            <section className="bg-pink-100 ">
                                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                                        <div className="max-w-lg">
                                            <h2 className="text-3xl font-base font-extrabold text-gray-900 sm:text-4xl">Seja bem-vinda à jornada de mentoria</h2>
                                            <p className="mt-4 pt-8 text-gray-600 text-lg font-base"> Comece sua trajetória como mentora hoje mesmo.</p>
                                            <div className=" flex gap-4 p-7">
                                                <ModalPostagem />
                                            </div>
                                        </div>
                                        <div className="mt-12 ml-24 md:mt-0">
                                            <img src="https://i.imgur.com/9Wpiv9j.png" alt="mulheres unidas" className="object-cover rounded-lg " />
                                        </div>
                                    </div>

                                    <div className="mt-12 inline-flex rounded-md shadow">
                                        <Link to="/mentorias" className="font-sm py-4 px-16 text-white-100  bg-pink-500 hover:bg-green-400 focus:ring-green-300 focus:ring-offset-green-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Criar uma Mentoria </Link>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <section className="bg-pink-100 ">
                                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                                        <div className="max-w-lg">
                                            <h2 className="text-3xl font-base font-extrabold text-gray-900 sm:text-4xl">Seja bem vinda Mentorada!</h2>
                                            <p className="mt-4 pt-8 text-gray-600 text-lg font-base">Comece já sua jornada rumo ao sucesso e ao crescimento pessoal.</p>

                                        </div>
                                        <div className="mt-12 ml-24 md:mt-0">
                                            <img src="https://i.imgur.com/XcEsrG7.png" alt="mulheres conversando" className="object-cover rounded-lg " />
                                        </div>
                                    </div>
                                    <div className="lg:mt-0 lg:flex-shrink-0">
                                        <div className="mt-12 inline-flex rounded-md shadow">
                                            <Link to="/mentorias" className="font-sm py-4 px-16  bg-pink-500 hover:bg-green-400 focus:ring-green-300 focus:ring-offset-green-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Participar da Mentoria </Link>

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </>
                )}
            </div>

        )

    } else {
        homeComponent = (
            <><><div className="bg-pink-200 ">
                <div className="bg-pink-100 dark:bg-gray-800 overflow-hidden relative">
                    <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h1 className="text-3xl font-base font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                Descubra o Poder da Mentoria:     </span>
                            <span className="block text-green-400">
                                Impulsionando Mulheres no Mercado de Trabalho.            </span>
                        </h1>
                        <p className="text-xl font-base mt-4 text-gray-700">
                            Você está pronta para conquistar seu espaço no mundo profissional? Nós estamos aqui para apoiar e orientar você em cada passo do caminho!        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <button type="button" className="font-sm py-4 px-6  bg-pink-500 hover:bg-green-400 focus:ring-green-300 focus:ring-offset-green-300 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <a href="/cadastro"> COMEÇE JÁ </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <img src="https://i.imgur.com/CnGN197.png" className="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block" />
                </div>


                {/* sobre a mentoria */}
                <div className="bg-pink-300 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 " aria-hidden="true">
                            <defs>
                                <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                                <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                            </svg>
                            <rect width="100%" height="100%" stroke-width="0" />
                        </svg>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <p className="text-lg font-semibold leading-7 font-base text-green-400">Conquiste Seus Objetivos</p>
                                    <h2 className="mt-2 text-3xl font-base font-bold tracking-tight text-purple-600 sm:text-4xl">Mentoria para o Sucesso</h2>
                                    <p className="mt-6 text-xl  font-base leading-8 text-gray-800">Nosso programa de mentoria exclusivo é projetado para capacitar e guiar mulheres em suas jornadas profissionais. </p>
                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img src="https://i.imgur.com/y6wM0Mz.png" alt="mulher em uma entrevista de emprego" />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-gray-800 text-base font-base leading-7  lg:max-w-lg">
                                    <p>Imagine ter uma mentora experiente ao seu lado, compartilhando insights, dicas valiosas e orientação personalizada para você alcançar seus objetivos de carreira. Nossa equipe de profissionais inspiradoras está pronta para ajudar você a superar desafios e alcançar suas ambições.</p>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                            <svg className="mt-1 h-5 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
                                                <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
                                            </svg>
                                            <span><strong className="font-semibold text-gray-900">Construindo Confiança e Habilidades:</strong> Nossa mentoria não se trata apenas de orientação profissional, mas também de fortalecer sua confiança e habilidades. Aprenda a se destacar em entrevistas, estruturar seu pitch pessoal, negociações salariais e comunicação eficaz.</span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg className="mt-1 h-5 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
                                                <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
                                            </svg>
                                            <span><strong className="font-semibold text-gray-900">Defina Seus Objetivos, Supere Limites:</strong> Seja você uma recém-formada, em transição de carreira ou buscando ascensão profissional, nossa mentoria é adaptada às suas necessidades individuais. Juntas, vamos traçar metas ambiciosas e transformá-las em realidade.</span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg className="mt-1 h-5 w-5 flex-none text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
                                                <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
                                            </svg>
                                            <span><strong className="font-semibold text-gray-900">Prepare-se para o Sucesso:</strong> Não espere mais para dar o primeiro passo em direção a uma carreira bem-sucedida. Nossa mentoria oferece o suporte necessário para que você possa se destacar, crescer e conquistar seus sonhos profissionais. </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8">Entre em contato hoje mesmo para saber mais sobre como nossa mentoria pode impulsionar sua jornada no mercado de trabalho. O futuro é seu para conquistar - e estamos aqui para ajudar você a brilhar!</p>
                                    <div className="lg:mt-0 lg:flex-shrink-0  flex items-center justify-center">
                                        <div className=" animate-bounce mt-12 inline-flex rounded-md shadow">
                                            <button type="button" className="font-sm font-base py-4 px-6 text-gray-900 bg-yellow-100 hover:bg-green-400 focus:ring-green-300 focus:ring-offset-green-400  w-full transition ease-in duration-200 text-center  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                <a href="/cadastro"> MARQUE SUA MENTORIA!</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* avalicações */}

                <div className=" flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
                    <div className="transition-transform transform hover:scale-110 bg-white-400 dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                        <p className="text-gray-600 dark:text-white">
                            <span className="text-lg font-bold text-green-100">
                                “
                            </span>
                            Essa mentoria superou minhas expectativas! A abordagem personalizada me proporcionou insights valiosos para melhorar meu currículo e minhas habilidades de comunicação.
                            Agora me sinto pronta para enfrentar qualquer desafio.
                            <span className="text-lg font-bold text-green-100">
                                ”
                            </span>
                        </p>
                        <div className="flex items-center mt-4">
                            <a className="relative block">
                                <img alt="profil" src="https://i.imgur.com/f5uODQE.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                            <div className="flex flex-col justify-between ml-2">
                                <span className="text-md font-semibold text-green-100">
                                    Leandra Andrade                   </span>
                                <span className="flex items-center text-xs dark:text-gray-400">
                                    Mentorada
                                    <img src="https://i.imgur.com/OAY8uOO.png" className="w-6 h-6 ml-2" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="transition-transform transform hover:scale-110 bg-white-400  dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                        <p className="text-gray-600 dark:text-white">
                            <span className="text-lg font-bold text-green-100">
                                “
                            </span>
                            A mentoria me deu a clareza que eu precisava em relação às minhas metas profissionais. Aprendi a me destacar em entrevistas e encontrei muito apoio e orientação durante as sessões.
                            Estou animada com as oportunidades que estão por vir!
                            <span className="text-lg font-bold text-green-100">
                                ”
                            </span>
                        </p>
                        <div className="flex items-center mt-4">
                            <a className="relative block">
                                <img alt="profil" src="https://i.imgur.com/2XM3bgl.png" className="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                            <div className="flex flex-col justify-between ml-2">
                                <span className="text-md font-semibold text-green-100">
                                    Katia Hassani
                                </span>
                                <span className="flex items-center text-xs dark:text-gray-400">
                                    Mentorada
                                    <img src="https://i.imgur.com/OAY8uOO.png" className="w-6 h-6 ml-2" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="transition-transform transform hover:scale-110 bg-white-400 dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                        <p className="text-gray-600 dark:text-white">
                            <span className="text-lg font-bold text-green-100">
                                “
                            </span>
                            Agradeço todos os dias por ter ingressado nesse programa.
                            A mentoria não apenas me deu percepções sobre o mercado de trabalho, mas também me ajudou a desenvolver habilidades de comunicação e confiança que são essenciais para o sucesso.
                            <span className="text-lg font-bold text-green-100">
                                ”
                            </span>
                        </p>
                        <div className="flex items-center mt-4">
                            <a className="relative block">
                                <img alt="profil" src="https://i.imgur.com/MGiyxYu.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                            </a>
                            <div className="flex flex-col justify-between ml-2">
                                <span className="text-md font-semibold text-green-100">
                                    Marcela Apolinária
                                </span>
                                <span className="flex items-center text-xs dark:text-gray-400">
                                    Mentorada
                                    <img src="https://i.imgur.com/OAY8uOO.png" className="w-6 h-6 ml-2" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                // voluntariar para mentoria
                <div className="bg-purple-600 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center font-base">
                            <h2 className="text-base font-semibold leading-7 text-orange-400">Seja Mentora: Inspire, Capacite e Faça a Diferença.</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white-100 sm:text-4xl">
                                Transforme Vidas e Carreiras sendo Mentora para Mulheres em Ascensão!
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-400">
                                Voluntariar-se como mentora é uma oportunidade valiosa para fazer uma diferença duradoura na vida de outras mulheres e para contribuir para um ambiente de trabalho mais inclusivo e igualitário.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-16">
                                        <dt className="text-base font-semibold leading-7 text-white-100">
                                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                                    </div>

                                ))}
                            </dl>

                            <button className="relative inline-flex items-center justify-center mt-12 p-0.5 mb-2 mr-2 left-[19rem] overflow-hidden text-sm font-lg text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="relative px-12 py-2.5 transition-all ease-in duration-75 font-base bg-pink-400 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <a href="/cadastro">SE TORNE UMA MENTORA! </a>
                                </span>
                            </button>
                        </div>

                    </div>
                </div></>
                <div className="bg-pink-100 flex items-center justify-center   ">
                    <div className="relative w-full bg-green-500 border-4 border-green-700/80 mt-10 mb-10 px-6 pt-10 pb-12  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                        <div className=" mx-auto px-5 inset-x-0 	">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <h2 className="text-2xl text-center text-pink-600 font-semibold">
                                        Dúvidas sobre o Programa.
                                    </h2>
                                    <p className="mt-6 mb-2 text-gray-600">
                                        Mentoradas
                                    </p>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75">
                                                    <span>A mentoria é gratuita?</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-pink-600`}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    Sim, o programa de mentoria é totalmente gratuito.
                                                    Acreditamos que o acesso à orientação e ao apoio profissional deve ser acessível a todas,
                                                    independentemente de sua situação financeira.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75">
                                                    <span>Quem pode participar do programa de mentoria?</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className={`${open ? "rotate-180 transform" : ""} h-5 w-7 text-pink-600`}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    Mulheres de diferentes níveis de experiência que estejam procurando
                                                    conseguir uma vaga de emprego podem participar.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75">
                                                    <span>Qual é o compromisso esperado das mentoras?</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className={`${open ? "rotate-180 transform" : ""} h-5 w-7 text-pink-600`}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    As mentoras geralmente são voluntárias experientes que estão dispostas a compartilhar
                                                    seus conhecimentos e orientar as mentoradas.
                                                    O compromisso pode incluir reuniões regulares (virtuais), troca de e-mails,
                                                    feedback construtivo e sugestões para o crescimento profissional.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75">
                                                    <span>E se minha mentora e eu não tivermos uma boa conexão?</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className={`${open ? "rotate-180 transform" : ""} h-5 w-7 text-pink-600`}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    A química entre a mentora e a mentee nem sempre é instantânea.
                                                    Se você achar que a conexão não está se desenvolvendo como esperado,
                                                    você solicitar uma troca de mentoras,
                                                    desde que isso seja feito de maneira respeitosa e dentro das diretrizes do programa.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <p className="mt-6 mb-2 text-gray-600">
                                        Mentoras
                                    </p>
                                    <Disclosure as="div" className="mt-2">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75">
                                                    <span>Quais são os critérios para se tornar mentora?</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className={`${open ? "rotate-180 transform" : ""} h-5 w-6 text-pink-600`}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                    Para se tornar mentora neste programa, geralmente procuramos profissionais
                                                    experientes com histórico comprovado em sua área de atuação.
                                                    Buscamos pessoas que possam oferecer conselhos relevantes e úteis para
                                                    auxiliar as mentoradas em suas buscas por emprego.
                                                </Disclosure.Panel>
                                                <Disclosure as="div" className="mt-2">
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75">
                                                                <span>Como é feito o processo de seleção de mentoras?</span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={1.5}
                                                                    stroke="currentColor"
                                                                    className={`${open ? "rotate-180 transform" : ""} h-5 w-6 text-pink-600`}
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                                </svg>
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                                O processo de seleção envolve avaliar as candidatas com base em sua experiência,
                                                                habilidades, setor de atuação e disponibilidade.
                                                                Queremos garantir que as mentoras escolhidas possam oferecer orientação valiosa
                                                                e alinhada aos objetivos das mentoradas.
                                                            </Disclosure.Panel>
                                                            <Disclosure as="div" className="mt-2">
                                                                {({ open }) => (
                                                                    <>
                                                                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-green-600 rounded-lg hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75">
                                                                            <span>Posso continuar minhas atividades profissionais regulares enquanto sou mentora?</span>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                strokeWidth={1.5}
                                                                                stroke="currentColor"
                                                                                className={`${open ? "rotate-180 transform" : ""} h-5 w-9 text-pink-600`}
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                                            </svg>
                                                                        </Disclosure.Button>
                                                                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                                            Sim, ser uma mentora não exige um compromisso em tempo integral.
                                                                            Você pode continuar suas atividades profissionais enquanto reserva tempo para a orientação das mentoradas.
                                                                        </Disclosure.Panel>
                                                                    </>
                                                                )}
                                                            </Disclosure>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            </>
                                        )}
                                    </Disclosure>
                                    <div className='rounded-md px-24 '>
                                        <p className='mt-6 mb-2 text-gray-600 text-center'>Em caso de dúvida para mais informações: </p>
                                        <button type="button" className=" font-sm font-base py-4 px-6 text-gray-900 bg-yellow-100 hover:bg-orange-400 focus:ring-yellow-400 focus:ring-offset-yellow-500  w-full transition ease-in duration-200 text-center  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            <a href="/contato">Entre em contato com a gente.</a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div></>

        )


    }

    return (
        <>
            {homeComponent}
        </>
    )

}


export default Home;
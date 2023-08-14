
function Sobre() {
  return (
    <>
      <section className="bg-pink-100 ">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-base font-extrabold text-gray-900 sm:text-4xl">Conheça o Minas na Área</h2>
              <p className="mt-4 text-gray-600 text-lg font-base">Desde a sua fundação, o "Minas na Área" tem como missão combater as desigualdades
                de gênero no mundo corporativo.
                A visão é clara: um mundo onde as mulheres tenham as mesmas oportunidades, respeito e reconhecimento
                que seus colegas masculinos, independentemente do setor ou posição.</p>
              <div className="mt-8">
                <a href="#time" className="text-orange-600 hover:text-purple-600 font-medium">conheça nosso time
                  <span className="ml-2">&#8594;</span></a>
              </div>
            </div>
            <div className="mt-12 ml-24 md:mt-0">
              <img src="https://i.imgur.com/9Wpiv9j.png" alt="mulheres unidas" className="object-cover rounded-lg " />
            </div>
          </div>
        </div>
      </section>

      {/* valores */}

      <div className="bg-purple-600 ">

        <section id="features"
          className=" font-base relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">

          <div className="relative mx-auto max-w-5xl text-center ">
            <span className="font-base text-gray-400 my-3 flex items-center text-orange-400 justify-center text-2xl uppercase tracking-wider">
              Valores da ONG
            </span>
            <h2 className="font-base block w-full text-gray-300 font-bold text-3xl sm:text-4xl">
              Nossos valores são a base sólida que sustenta a missão da ONG Minas na Área
            </h2>
            <p
              className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Estes princípios são a bússola que guia nossa missão: empoderar, incluir e transformar com integridade e paixão
            </p>
          </div>


          <div className="relative  mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md transform hover:scale-110 border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);">
                <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z" />
                </svg>
              </div>
              <h3 className="mt-6 text-gray-300  ">Inclusão</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Promovemos um ambiente inclusivo, acolhendo mulheres de diferentes origens, idades, etnias e orientações, garantindo que todas tenham acesso igualitário às oportunidades e recursos oferecidos.
              </p>
            </div>


            <div className="rounded-md transform hover:scale-110 border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border background-image: linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240);">
                <svg className="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M9 4.025A7.5 7.5 0 1 0 16.975 12H9V4.025Z" />
                    <path d="M12.5 1c-.169 0-.334.014-.5.025V9h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 12.5 1Z" />
                  </g>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-300">Colaboração</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">A ONG promove a colaboração entre as mulheres participantes, incentivando a troca de conhecimentos, habilidades e experiências. A crença é de que juntas, as mulheres podem superar obstáculos e alcançar resultados ainda mais significativos.
              </p>
            </div>


            <div className="rounded-md transform hover:scale-110 border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
                <svg className="w-6 h-7 ml-1 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                </svg>

              </div>
              <h3 className="mt-6 text-gray-300">Integridade</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Agimos com integridade e transparência em todas as suas atividades e interações. Isso ajuda a construir confiança entre as participantes, mentores, parceiros e a comunidade em geral.
              </p>
            </div>

          </div>

        
        </section>
      </div>

      {/* time */}
  <div className="bg-pink-200 flex items-center justify-center pt-12 pb-14 " id='time' >  
   <div className="gap-8 md:flex font-base">
    <div className="mb-8 text-center md:w-1/2 md:mb-0">
        <img className=" w-48 h-48 mx-auto -mb-24 rounded-full" src="https://i.imgur.com/gceJkM8.jpg" alt="Membro da equipe"/>
        <div className=" bg-pink-300 px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
            <h3 className="mb-3 text-xl text-gray-700 ">
                Israel Bernado
            </h3>
            <p className="font-base text-gray-500 ">
            FullStack Java Jr Developer            </p>
            <p className="mb-4 text-sm font-base text-gray-500 ">
                ´´MasterChef em horas vagas``
            </p>
            <br />
        <div className = "flex items-center justify-between w-20 pt-8 mx-auto text-gray-600 border-t border-gray-700">
        
            <a >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600 dark:hover:text-white" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a >
                <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600  dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
        </div>
      </div>
    </div>
    <div className="mb-8 text-center md:w-1/2 md:mb-0">
        <img className="w-48 h-48 mx-auto -mb-24 rounded-full" src="https://i.imgur.com/smSf6ah.jpg" alt="Membro da equipe"/>
        <div className="bg-pink-300 px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
            <h3 className=" mb-3 text-xl text-gray-700 ">
                Lucas Vinícius
            </h3>
            <p className="font-base text-gray-500">
            FullStack Java Jr Developer
            </p>
            <p className="mb-4 text-sm font-base text-gray-500">
                ´´Treinar ouvindo musica é como terapia``
            </p>
        <div className = "flex items-center justify-between w-20 pt-8 mx-auto text-gray-600 border-t border-gray-700">
            <a >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600 dark:hover:text-white" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a >
                <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
        </div>
      </div>
    </div>
    <div className="mb-8 text-center md:w-1/2 md:mb-0">
        <img className="w-48 h-48 mx-auto -mb-24 rounded-full" src="https://i.imgur.com/mWj27Jt.jpg" alt="Membro da equipe"/>
        <div className="bg-pink-300 px-8 pt-32 pb-10  rounded-lg shadow-lg">
            <h3 className=" mb-3 text-xl text-gray-700 ">
                Maria De Fatima
            </h3>
            <p className="font-base  text-gray-500">
            FullStack Java Jr Developer            </p>
            <p className="mb-4 text-sm font-base  text-gray-500">
                ´´Gosta de Café e Jogos``
            </p>
        <div className = "flex items-center justify-between w-20 pt-8 mx-auto text-gray-600 border-t border-gray-700">
            <a href="https://github.com/Maria621" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600 dark:hover:text-white" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/mariadefatimabatistadecarvalho/" target="_blank">
                <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
        </div>
      </div>
    </div>
    <div className="mb-8 text-center md:w-1/2 md:mb-0">
        <img className=" w-48 h-48 mx-auto -mb-24 rounded-full" src="https://i.imgur.com/vckHxAn.png" alt="membro da equipe"/>
        <div className=" bg-pink-300 px-8 pt-32 pb-10 text-gray-400 rounded-lg shadow-lg">
            <h3 className="bg-white mb-3 text-xl text-gray-800 ">
                Rillary Ferreira
            </h3>
            <p className="font-base text-gray-500">
            FullStack Java Jr Developer            </p>
            <p className="mb-4 text-sm font-base text-gray-500 ">
              ´´Nada melhor que um bom livrinho``
            </p>
           
        <div className = "flex items-center justify-between w-20 pt-8 mx-auto text-gray-600  border-t border-gray-700">
        <br />
            <a href="https://github.com/RillaryDev" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600 dark:hover:text-white" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/rillarydev/" target="_blank">
                <svg width="30" height="30" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-purple-600 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
        </div>
      </div>
    </div>
    </div>
</div>


    </>
  );
}

export default Sobre;
import { GithubLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-purple-600 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-title text-white-100'>Todos os direitos autorais | Minas na Área &copy;</p>
            <p className='text-lg font-title text-white-100'>Acesse nosso GitHub:</p>
            <div className='flex gap-2   text-white-100'>
              <a href="https://github.com/PI-G04" target='_blank'><GithubLogo size={40} weight='bold'/></a>
              
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer
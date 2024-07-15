import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-login bg-top bg-no-repeat bg-cover h-screen -mb-2 text-header">
      <div className="flex h-96 w-64 bg-white md:h-[25rem] md:w-[35rem] lg:h-[24rem] lg:w-[43rem]">
        <div className="hidden h-full w-2/3 bg-login-green md:flex text-white md:flex-col p-12 gap-12">
          <h1 className='text-4xl font-bold'>
            Módulo Cliente
          </h1>
          <span>Sistema para acompanhamento de IRRF</span>
        </div>
        <div className="px-10 py-10">
          <form className="flex flex-col gap-5" action="">
            <div className="flex flex-col gap-2">
              <label className='uppercase font-bold'>CNPJ</label>
              <input className="w-full h-10 py-1 px-3 rounded-sm bg-white ring-1 ring-zinc-300" placeholder='CNPJ' type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <label className='uppercase font-bold'>Usuario</label>
              <input className="w-full h-10 py-1 px-3 rounded-sm bg-white ring-1 ring-zinc-300" placeholder='usuário' type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <label className='uppercase font-bold'>Senha</label>
              <input className="w-full h-10 py-1 px-3 rounded-sm bg-white ring-1 ring-zinc-300" placeholder='senha' type="password" />
            </div>

            <Link
              href="/menu"
              className="w-32 rounded-md flex items-center py-2 justify-center bg-login-green font-bold text-white"
            >
              Entrar
            </Link>
          </form>
        </div>
      </div>
      {/* <div className="h-screen w-full absolute inset-0 bg-login object-cover bg-no-repeat bg-center z-0" /> */}
    </main>
  )
}

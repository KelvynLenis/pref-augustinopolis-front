import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-menu bg-center bg-cover h-screen overflow-hidden -mb-2 inset-0 flex items-center justify-center">
      <div className="grid grid-cols-2 w-2/5 gap-5">
        <button className="bg-blue-600 font-bold w-44 h-32 text-xl rounded-lg px-5 text-white hover:bg-blue-800">Gerar imposto</button>
        <button className="bg-blue-600 font-bold w-44 h-32 text-xl rounded-lg px-5 text-white hover:bg-blue-800">Receber imposto</button>
        <Link href="/relatorios" className="flex justify-center items-center bg-blue-600 font-bold w-44 h-32 text-xl rounded-lg px-5 text-white hover:bg-blue-800">Relatórios</Link>
        <Link href="/" className="flex justify-center items-center bg-blue-600 font-bold w-44 h-32 text-xl rounded-lg px-5 text-white hover:bg-blue-800">Sair</Link>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button";
import { HandCoins, LogOut, Receipt } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-menu bg-center bg-cover h-screen overflow-hidden -mb-2 inset-0 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-3/5 lg:w-2/5 gap-5">
        <Button className="bg-blue-600 font-bold w-40 h-32 rounded-lg px-5 flex flex-col text-lg text-white hover:bg-blue-800 self-center">
          <Receipt className="w-10 h-10" />
          <span className="text-balance">
            Gerar imposto
          </span>
        </Button>
        <Button className="bg-blue-600 font-bold w-40 h-32 text-lg flex flex-col rounded-lg px-5 text-white hover:bg-blue-800">
          <HandCoins className="w-10 h-10" />
          <span className="text-balance">
            Receber imposto
          </span>
        </Button>
        <Link href="/relatorios" className="flex justify-center items-center bg-blue-600 font-bold w-40 h-32 rounded-lg px-5 text-white hover:bg-blue-800">Relatórios</Link>
        <Link href="/" className="flex justify-center items-center bg-blue-600 font-bold w-40 h-32 flex-col rounded-lg px-5 text-white hover:bg-blue-800">
          <LogOut className="w-9 h-9" />
          Sair
        </Link>
      </div>
    </div>
  )
}

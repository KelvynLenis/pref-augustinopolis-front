import { RelatoryForm } from "@/components/RelatoryForm";
import { Button } from "@/components/ui/button";
import { SaveIcon, Trash2 } from "lucide-react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="px-5 py-5 text-header gap-5 flex flex-col bg-zinc-100">
      <header className=" bg-header-purple py-5 px-4 rounded-sm text-white text-xs w-full flex justify-between">
        <span>FUNDO MUNICIPAL DE MEIO AMBIENTE</span>
        <span>Usuário: augustinopolis</span>
      </header>

      <div className="flex w-full items-center justify-center">
        <Button className="flex bg-zinc-100 mr-2 hover:bg-header-purple hover:text-white drop-shadow-md">
          <SaveIcon size={16} className="mr-2" />
          Salvar
        </Button>
        <Button className="flex mr-2 bg-red-400 text-white drop-shadow-lg shadow-red-300 hover:bg-red-500">
          <Trash2 size={16} className="mr-2" />
          Excluir
        </Button>
      </div>

      <RelatoryForm />

    </div>
  )
}


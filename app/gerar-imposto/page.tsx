import { NewTributeForm } from "@/components/NewTributeForm";

export default function page() {
  return (
    <div className="h-full min-h-screen px-5 py-5 text-header gap-5 flex flex-col bg-zinc-100">
      <header className=" bg-header-purple py-5 px-4 rounded-sm text-white text-xs w-full flex justify-between">
        <span>FUNDO MUNICIPAL DE MEIO AMBIENTE</span>
        <span>Usuário: augustinopolis</span>
      </header>

      <NewTributeForm />
    </div>
  )
}

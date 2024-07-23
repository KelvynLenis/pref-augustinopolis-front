import { TableWrapper } from "@/components/TableWrapper";


export default function Relatories() {
  return (
    <div className="px-5 py-5 text-header gap-5 flex flex-col">
      <header className=" bg-header-purple py-5 px-4 rounded-sm text-white text-xs w-full flex justify-between">
        <span>FUNDO MUNICIPAL DE MEIO AMBIENTE</span>
        <span>Usuário: augustinopolis</span>
      </header>

      <TableWrapper />        
    </div>
  );
}
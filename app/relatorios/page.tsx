import { Button } from "@/components/ui/button";
import {  ArrowLeft, PenSquare, Printer, Search, Triangle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Word from '../../assets/icons/word.svg'
import Pdf from '../../assets/icons/pdf.svg'
import PrinterLogo from '../../assets/icons/printer.svg'
import Image from "next/image";

export default function Relatories() {
  return (
    <div className="px-5 py-10 text-header gap-4 flex flex-col">
      <header className="w-full bg-header-purple py-6 px-4 rounded-sm text-white flex justify-between">
        <span>FUNDO MUNICIPAL DE MEIO AMBIENTE</span>
        <span>Usuário: augustinopolis</span>
      </header>

      {/* filter */}
      <div className="flex gap-40 px-10">
        <div className="flex gap-4">
          <div className="flex relative drop-shadow-md">
            <input type="text" className="rounded-md w-44 px-2 py-1 ring-1 ring-zinc-300" />
            <Triangle className="h-4 w-4 absolute right-10 self-center rotate-180 fill-black" />
            <Search className="h-6 w-6 absolute right-1 self-center" />
          </div>

          <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-44 gap-4 hover:bg-slate-200">
            <Search className="h-6 w-6" />
            <span>
              Filtro dinâmico
            </span>
          </Button>
        </div>

        <div className="flex gap-4">
          <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:bg-slate-200">
            <Image src={Word} alt="word logo" className="h-6 w-6" />
            Word
          </Button>

          <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:bg-slate-200">
            <Image src={Pdf} alt="PDF logo" className="h-6 w-6" />
            PDF
          </Button>

          <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:bg-slate-200">
            <Printer className="h-6 w-6" />
            Imprimir
          </Button>

          <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:bg-slate-200">
            <ArrowLeft className="h-6 w-6" />
            Voltar
          </Button>

        </div>
      </div>

      {/* table */}
      <div className="px-10">
        <Table>
          <TableHeader>
            <TableRow className="bg-zinc-200">
              <TableHead className="w-[100px]"></TableHead>
              <TableHead className="text-right">Page</TableHead>
              <TableHead className="text-right">CNPJ Fornecedor</TableHead>
              <TableHead className="text-right">Nome Fornecedor</TableHead>
              <TableHead className="text-right">Data Emissão</TableHead>
              <TableHead className="text-right">Número nota</TableHead>
              <TableHead className="text-right">Valor nota</TableHead>
              <TableHead className="text-right">Aliq Retenção</TableHead>
              <TableHead className="text-right">Valor Retenção</TableHead>
              <TableHead className="text-right">Imprimir</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-zinc-200">
              <TableCell className="font-medium">
                <Button>
                  <PenSquare className="w-6 h-6 hover:text-zinc-500" />
                </Button>
              </TableCell>
              <TableCell className="text-right text-red-500 font-semibold">Não</TableCell>
              <TableCell className="text-right">01784198000295</TableCell>
              <TableCell className="text-right">POSTO AUGUSTINOPOLIS LTDA</TableCell>
              <TableCell className="text-right">07/03/2024</TableCell>
              <TableCell className="text-right">6155</TableCell>
              <TableCell className="text-right">R$15.799,98</TableCell>
              <TableCell className="text-right">0,24</TableCell>
              <TableCell className="text-right">37,92</TableCell>
              <TableCell className="text-right">
                <Button className="self-end text-left">
                  <Image src={PrinterLogo} alt="simbolo de impressora" className="w-10 h-10" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
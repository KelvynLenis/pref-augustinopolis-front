'use client'

import { Button } from "@/components/ui/button";
import { Ban, Check, Paintbrush, PenSquare, Plus, Search, Triangle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import PrinterLogo from '../assets/icons/printer.svg'
import Image from "next/image";
import { ConfigButtons } from "./ConfigButtons";
import { useState } from "react";

export function TableWrapper() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* filter */}
      <div className="flex flex-col gap-4 transition-all ease-in">
        <div className="flex gap-40 px-10">
          <div className="flex gap-4">
            <div className="flex relative drop-shadow-md">
              <input type="text" className="rounded-md w-44 px-2 py-1 ring-1 ring-zinc-300" />

              <Popover>
                <PopoverTrigger className="absolute right-10 self-center">
                  <Triangle className="h-4 w-4 rotate-180 fill-black" />
                </PopoverTrigger>
                <PopoverContent className="bg-white">
                  <div className="p-2">
                    <span className="text-strong font-bold">Colunas</span>
                      <input type="text" />
                    <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>

                  </div>
                </PopoverContent>
              </Popover>
              <Search className="h-6 w-6 absolute right-1 self-center rotate-90" />
            </div>

            <Button onClick={() => setIsFilterOpen(!isFilterOpen)} aria-checked={isFilterOpen} className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-44 gap-4 hover:bg- slate-200 aria-checked:bg-header-purple aria-checked:hover:opacity-90 aria-checked:text-white transition-colors ease-linear">
              <Search className="h-6 w-6" />
              <span>
                Filtro dinâmico
              </span>
            </Button>
          </div>    

          <ConfigButtons />    
        </div>
        {
          isFilterOpen &&
          <div className="bg-zinc-200 flex h-24 w-[95%] self-center gap-4 transition-all ease-out">
            <span className="w-0.5 h-full bg-header-purple" />
            <div className="flex flex-col py-4 gap-2">
              <span className="text-light text-lg font-bold">Filtro dinamico</span>
              <div className="flex gap-6">
                <Button className="h-8 bg-emerald-400 text-white drop-shadow-lg shadow-emerald-500 hover:bg-emerald-500 flex gap-2">
                  <Plus className="w-6 h-6" />
                  Adicionar campos
                </Button>
                <Button disabled className="h-8 bg-white text-light drop-shadow-lg hover:opacity-70 flex gap-2">
                  <Paintbrush className="w-6 h-6" />
                  Limpar
                </Button>
                <Button disabled className="h-8 bg-emerald-400 text-white drop-shadow-lg shadow-emerald-500 hover:bg-emerald-500 flex gap-2">
                  <Check className="w-6 h-6" />
                  Aplicar
                </Button>
                <Button className="h-8 bg-red-400 text-white drop-shadow-lg shadow-red-500 hover:bg-red-500 flex gap-2">
                  <Ban className="w-6 h-6" />
                  Sair
                </Button>
              </div>
            </div>
          </div>
        }
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
    </>
  );
}
'use client'

import { Button } from "@/components/ui/button";
import { Ban, Check, Paintbrush, PenSquare, Plus, Search, Triangle, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import PrinterLogo from '../assets/icons/printer.svg'
import Image from "next/image";
import { ConfigButtons } from "./ConfigButtons";
import { useState } from "react";
import { Autocomplete } from "./Autocomplete";
import { DataTable } from "@/app/relatorios/data-table";
import { columns } from "@/app/relatorios/columns";
import type { ColumnDef } from "@tanstack/react-table";

export function TableWrapper() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const data = [{
    id: "1",
    pago: "Não",
    CNPJFornecedor: "01784198000295",
    nomeFornecedor: "POSTO AUGUSTINOPOLIS LTDA",
    dataEmissão: "07/03/2024",
    numeroNota: "6155",
    valorNota: "R$15.799,98",
    aliqRetenção: "0,24",
    valorRetenção: "37,92",
  },
  {
    id: "2",
    pago: "Sim",
    CNPJFornecedor: "01784198000295",
    nomeFornecedor: "POSTO AUGUSTINOPOLIS LTDA",
    dataEmissão: "07/03/2024",
    numeroNota: "6156",
    valorNota: "R$10.799,98",
    aliqRetenção: "0,34",
    valorRetenção: "37,92",
  }
]

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
                  <Triangle className="h-3 w-4 rotate-180 fill-black" />
                </PopoverTrigger>
                <PopoverContent className="bg-white">
                  <div className="py-2 gap-1 flex flex-col">
                    <span className="text-light font-semibold text-sm">Colunas</span>
                      <Autocomplete />
                  </div>
                  
                  <div className="flex gap-2 w-full justify-end">
                    <Button className="h-6 text-xs bg-emerald-400 text-white drop-shadow-lg shadow-emerald-300 hover:bg-emerald-500">
                      <Check className="h-4 w-4 mr-1" />
                      Aplicar
                    </Button>
                    <Button className="h-6 text-xs bg-red-400 text-white drop-shadow-lg shadow-red-300 hover:bg-red-500">
                      <X className="h-4 w-4 mr-1" />
                      Cancelar
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Search className="h-6 w-6 absolute right-1 self-center rotate-90 text-zinc-400" />
            </div>

            <Button onClick={() => setIsFilterOpen(!isFilterOpen)} aria-checked={isFilterOpen} className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-44 gap-4 hover:bg- slate-200 aria-checked:bg-header-purple aria-checked:hover:opacity-90 aria-checked:text-white transition-colors ease-linear hover:bg-header-purple hover:text-white">
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
          <div className="bg-zinc-100 flex h-24 w-[95%] self-center gap-4 transition-all ease-out">
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
        <DataTable columns={columns as ColumnDef<{ id: string; pago: string; CNPJFornecedor: string; nomeFornecedor: string; dataEmissão: string; numeroNota: string; valorNota: string; aliqRetenção: string; valorRetenção: string; }, unknown>[]} data={data} />
      </div>
    </>
  );
}
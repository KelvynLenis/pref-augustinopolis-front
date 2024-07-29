"use client"

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod"
import { ArrowUpDown } from "lucide-react";

const PaymentSchema = z.object({
  id: z.string(),
  pago: z.enum(["Sim", "Não"]),
  CNPJFornecedor: z.string(),
  nomeFornecedor: z.string(),
  dataEmissão: z.string(),
  numeroNota: z.string(),
  valorNota: z.string(),
  aliqRetenção: z.string(),
  valorRetenção: z.string(),
});

// Define the TypeScript type using the Zod schema
type Payment = z.infer<typeof PaymentSchema>;

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Id
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "pago",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Pago
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "CNPJFornecedor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          CNPJ do Fornecedor
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "nomeFornecedor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Nome do Fornecedor
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "dataEmissão",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Data de Emissão
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "numeroNota",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Numero da Nota
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "valorNota",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Valor da Nota
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "aliqRetenção",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Aliquota de Retenção
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  },
  {
    accessorKey: "valorRetenção",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-4 text-xs text-light font-bold group"
        >
          Valor de Retenção
          <ArrowUpDown className="ml-2 opacity-0 h-3 w-3 group-hover:opacity-100 transition-opacity ease-in" />
        </Button>
      )
    },
  }
]

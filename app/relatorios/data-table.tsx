"use client"

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, PenSquare, SkipBack, SkipForward } from "lucide-react"
import PrinterLogo from '../../assets/icons/printer.svg'
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  function test(row: any) {
    console.log(row)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-zinc-100 text-light text-semibold">
              <TableHead className="hover:opacity-90 hover:bg-zinc-100"></TableHead>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="hover:opacity-90 hover:bg-white p-0">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
              <TableHead className="hover:opacity-90 hover:bg-white px-4 text-xs text-light font-bold">Imprimir</TableHead>

            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-zinc-100"
              >
                <TableCell className="font-medium p-0">
                  <Link href={`/relatory/edit/${row.getAllCells()[0].row.original.id}`}>
                    <Button>
                      <PenSquare className="w-6 h-6 hover:text-zinc-500" />
                    </Button>
                  </Link>
                </TableCell>
                {row.getVisibleCells().map((cell) => (
                  <TableCell 
                    key={cell.id}
                    className={"text-right px-1 text-xs w-fit"}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell className="text-right">
                  <Button className="self-end text-left">
                    <Image src={PrinterLogo} alt="simbolo de impressora" className="w-10 h-10 hover:opacity-50" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-center space-x-2 py-4">
        <Button
            variant="outline"
            size="sm"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button
            variant="outline"
            size="sm"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

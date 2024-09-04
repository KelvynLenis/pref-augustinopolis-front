"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { natureOfServiceOptions } from "@/utils/NatureOfServiceOptions"
import { Textarea } from "./ui/textarea"
import { formatDate } from "@/utils/formatDate"
import { CreateFormSchema } from "@/utils/schemas"

export function NewTributeForm() {
  const today = new Date();

  const form = useForm<z.infer<typeof CreateFormSchema>>({
    resolver: zodResolver(CreateFormSchema),
      defaultValues: {
        nomeOrgao: "FUNDO MUNICIPAL DE MEIO AMBIENTE",
        nomeOrgaoPagador: "",
        dataCadastro: today,
        cnpjFornecedor: "",
        nomeFornecedor: "",
        numeroNota: "0",
        serieNota: "0",
        dataEmissao: today,
        regime: "",
        naturezaServico: natureOfServiceOptions[0],
        valorNota: "R$ 0,00",
        aliqRetencao: "R$ 0,00",
        retISS: "R$ 0,00",
        retIRRF: "R$ 0,00",
        liquidoApagar: "R$ 0,00",
        parecer: "",
    },
  })

  function onSubmit(values: z.infer<typeof CreateFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
        <Button type="submit" className="self-center w-fit text-xs bg-emerald-400 text-white drop-shadow-lg shadow-emerald-300 hover:bg-emerald-500">
          <Plus className="h-4 w-4 mr-1" />
          Inserir
        </Button>
        <div className="flex w-full justify-between gap-2" >
          <FormField
              control={form.control}
              name="nomeOrgao"
              render={({ field }) => (
                <div className="flex flex-col w-2/5">
                  <div className="flex items-center bg-slate-200 w-full p-2 m-0 font-bold">
                    Nome do orgão
                  </div>
                  <div className="flex p-3 bg-white w-full">
                    <FormItem className="w-full">
                      <FormControl>
                        <Input {...field} className="bg-zinc-100 px-2 font-bold text-lg w-full"  value="FUNDO MUNICIPAL DE MEIO AMBIENTE" disabled />
                        {/* <FormLabel className="font-bold text-xl"></FormLabel> */}
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  </div>
                </div>
              )}
          />
          <FormField
              control={form.control}
              name="nomeOrgaoPagador"
              render={({ field }) => (
                <div className="flex flex-col w-2/5">
                  <div className="flex items-center bg-slate-200 w-full p-2 m-0 font-bold">
                    Nome do orgão pagador
                  </div>
                  <div className="flex p-3 bg-white w-full">
                    <FormItem className="flex w-full">
                      <FormControl>
                          <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  </div>
                </div>
              )}
          />

          <FormField
            control={form.control}
            name="dataCadastro"
            render={({ field }) => (
              <div>
                <div className="flex items-center bg-slate-200 w-full p-2 m-0 font-bold">
                  Cadastro
                </div>
                <div className="flex p-3 bg-white">
                  <FormItem className="p-0">
                    <FormControl className="p-0">
                      <Input {...field} className="bg-zinc-100 px-2"  value={formatDate(field.value)} disabled />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                </div>
              </div>
            )}
          />
        </div>
        
        <div className="bg-white">
          <div className="p-4 flex flex-col gap-4">

            <div className="flex bg-white gap-4">
              <FormField
                control={form.control}
                name="cnpjFornecedor"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="text-zinc-500">CNPJ Fornecedor</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nomeFornecedor"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="text-zinc-500">Nome de Fornecedor</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dataEmissao"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="text-zinc-500">Data emissão *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-zinc-100" type="date" value={formatDate(field.value)} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex bg-white gap-4">
              <FormField
                control={form.control}
                name="numeroNota"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="text-zinc-500">Numero Nota *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serieNota"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="text-zinc-500">Serie nota *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="regime"
                render={({ field }) => (
                  <FormItem className="w-1/3 flex flex-col justify-end gap-1">
                    <FormLabel className="text-zinc-500">Regime</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="px-2 bg-zinc-100">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />

                      <SelectContent className="bg-white p-0">
                        <SelectItem value="simples-nacional" className="text-light hover:bg-zinc-100">
                          Simples nacional
                        </SelectItem>
                        <SelectItem value="demais" className="text-light hover:bg-zinc-100">
                          Demais
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="naturezaServico"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col">
                  <FormLabel className="text-zinc-500">Natureza do serviço</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="px-2 bg-zinc-100">
                        <SelectValue placeholder={natureOfServiceOptions[0]} />
                      </SelectTrigger>
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                    <SelectContent className="bg-white p-0 w-[58%] h-96">
                      {
                        natureOfServiceOptions.map((option, index) => (
                          <SelectItem key={index} value={option} className="text-sm w-[99%] text-light text-wrap hover:bg-zinc-100">
                            {option}
                          </SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <div className="flex bg-white gap-4">
              <div className="flex bg-white w-full gap-4">
                <FormField
                  control={form.control}
                  name="valorNota"
                  render={({ field }) => (
                    <FormItem className="w-1/5">
                      <FormLabel className="text-zinc-500">Valor Nota</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aliqRetencao"
                  render={({ field }) => (
                    <FormItem className="w-1/5">
                      <FormLabel className="text-zinc-500">Aliq  Retenção(%)</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="retIRRF"
                  render={({ field }) => (
                    <FormItem className="w-1/5">
                      <FormLabel className="text-zinc-500">Valor Retencao IRRF</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="retISS"
                  render={({ field }) => (
                    <FormItem className="w-1/5">
                      <FormLabel className="text-zinc-500">Valor Retencao ISS</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="liquidoApagar"
                  render={({ field }) => (
                    <FormItem className="w-1/5">
                      <FormLabel className="text-zinc-500">Liquido Apagar</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-zinc-100" value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="parecer"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-zinc-500">Parecer</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none bg-zinc-100"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
      <span className="text-red-700">* Campos obrigatórios</span>
    </Form>
  )
}


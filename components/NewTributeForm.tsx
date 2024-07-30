"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Plus, SaveIcon, Trash2, TriangleRight } from "lucide-react"
import { getDate } from "date-fns"

const formSchema = z.object({
    nomeOrgao: z.string().min(2).max(50),
    nomeOrgaoPagador: z.string().min(2).max(50),
    dataCadastro: z.string().min(2).max(50),
    cnpjFornecedor: z.string().min(2).max(50),
    nomeFornecedor: z.string().min(2).max(50),
    numeroNota: z.string().min(2).max(50),
    serieNota: z.number(),
    dataEmissao: z.string().min(2).max(50),
    regime: z.string().min(2).max(50),
    naturezaServico: z.string().min(2).max(50),
    valorNota: z.string().min(2).max(50),
    aliqRetencao: z.string().min(2).max(50),
    retISS: z.string().min(2).max(50),
    retIRRF: z.string().min(2).max(50),
    liquidoApagar: z.string().min(2).max(50),
    parecer: z.string().min(2).max(50),
  })

export function NewTributeForm() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR'); // Format: DD/MM/YYYY

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
      defaultValues: {
        nomeOrgao: "",
        nomeOrgaoPagador: "",
        dataCadastro: "",
        cnpjFornecedor: "",
        nomeFornecedor: "",
        numeroNota: "",
        serieNota: 0,
        dataEmissao: "",
        regime: "",
        naturezaServico: "",
        valorNota: "",
        aliqRetencao: "",
        retISS: "",
        retIRRF: "",
        liquidoApagar: "",
        parecer: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <Button className="self-center w-fit text-xs bg-emerald-400 text-white drop-shadow-lg shadow-emerald-300 hover:bg-emerald-500">
        <Plus className="h-4 w-4 mr-1" />
        Inserir
      </Button>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
        <div className="flex w-full justify-between" >
          <FormField
              control={form.control}
              name="nomeOrgao"
              render={({ field }) => (
                <div className="flex flex-col w-2/5">
                  <div className="flex items-center bg-slate-200 w-full p-2 m-0 font-bold">
                    Nome do orgão
                  </div>
                  <div className="flex p-4 bg-white">
                    <FormItem>
                      <FormLabel className="font-bold text-xl">FUNDO MUNICIPAL DE MEIO AMBIENTE</FormLabel>
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
                          <Input placeholder="" {...field} className="bg-zinc-100" />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>
              )}
          />
          <FormField
            control={form.control}
            name="numeroNota"
            render={({ field }) => (
              <div>
                <div className="flex items-center bg-slate-200 w-full p-2 m-0 font-bold">
                  Cadastro
                </div>
                <div className="flex p-4 bg-white">
                  <FormItem>
                    <FormControl>
                      <FormLabel className="text-lg">{ formattedDate }</FormLabel>
                    </FormControl>
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
                      <Input placeholder="" {...field} className="bg-zinc-100" />
                    </FormControl>
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
                      <Input placeholder="" {...field} className="bg-zinc-100" />
                    </FormControl>
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
                      <Input placeholder="" {...field} className="bg-zinc-100" />
                    </FormControl>
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
                      <Input placeholder="" {...field} className="bg-zinc-100" />
                    </FormControl>
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
                      <Input placeholder="" {...field} className="bg-zinc-100" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="regime"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel className="text-zinc-500">Regime</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} className="bg-zinc-100" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="naturezaServico"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-zinc-500">Natureza do serviço</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="bg-zinc-100" />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex bg-white gap-4">
              <div className="flex bg-white gap-4">
                <FormField
                  control={form.control}
                  name="valorNota"
                  render={({ field }) => (
                    <FormItem className="w-1/5">
                      <FormLabel className="text-zinc-500">Valor Nota</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} className="bg-zinc-100" />
                      </FormControl>
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
                        <Input placeholder="" {...field} className="bg-zinc-100" />
                      </FormControl>
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
                        <Input placeholder="" {...field} className="bg-zinc-100" />
                      </FormControl>
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
                        <Input placeholder="" {...field} className="bg-zinc-100" />
                      </FormControl>
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
                        <Input placeholder="" {...field} className="bg-zinc-100" />
                      </FormControl>
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
                    <Input placeholder="" {...field} className="bg-zinc-100" />
                  </FormControl>
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


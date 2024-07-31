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
import { Input } from "@/components/ui/input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ArrowLeft, SaveIcon, Trash2, TriangleRight } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { natureOfServiceOptions } from "@/utils/NatureOfServiceOptions"
import { Textarea } from "./ui/textarea"
import { formatDate } from "@/utils/formatDate"
 
const formSchema = z.object({
  numeroNota: z.string().nullish(),
  DataEmissao: z.date(),
  regime: z.string().nullish(),
  dataPagamento: z.date(),
  naturezaServico: z.string(),
  valorNota: z.string(),
  aliqRetencao: z.string(),
  retISS: z.string(),
  valorRetencao: z.string(),
  liquidoApagar: z.string(),
  motivo: z.string(),
})

export function RelatoryForm() {
  const today = new Date();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
      defaultValues: {
        numeroNota: "",
        DataEmissao: today,
        regime: "",
        dataPagamento: today,
        naturezaServico: natureOfServiceOptions[0],
        valorNota: "R$ 0,00",
        aliqRetencao: "R$ 0,00",
        retISS: "R$ 0,00",
        valorRetencao: "R$ 0,00",
        liquidoApagar: "R$ 0,00",
        motivo: "",
      },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-0">
              <div className="flex items-center bg-slate-200 w-full p-2 m-0">
                <TriangleRight size={16} className="mr-2 fill-black" />
                Fornecedor
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-3 px-4">
              <div className="grid grid-cols-2">
                <span>Nome Fornecedor</span>
                <span>CNPJ Fornecedor</span>
                <span>POSTO AUGUSTINOPOLIS LTDA</span>
                <span>01784198000295</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
              <AccordionTrigger className="p-0">
                <div className="flex items-center bg-slate-200 w-full p-2 m-0">
                  <TriangleRight size={16} className="mr-2 fill-black" />
                  Nota
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-white py-3 px-4">
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="numeroNota"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numero Nota</FormLabel>
                        <FormControl>
                          <Input  {...field} value={field.value || ''} onChange={field.onChange} />
                        </FormControl>
                       <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="DataEmissao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data Emissão *</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" value={formatDate(field.value)} onChange={field.onChange} />
                        </FormControl>
                       <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="regime"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col justify-end gap-1">
                        <FormLabel className="text-zinc-500">Regime</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
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
                  <FormField
                    control={form.control}
                    name="dataPagamento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data pagamento</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" value={formatDate(field.value)} onChange={field.onChange} />
                        </FormControl>
                       <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger className="p-0">
              <div className="flex items-center bg-slate-200 w-full p-2 m-0">
                <TriangleRight size={16} className="mr-2 fill-black" />
                Serviço
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-3 px-4">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger className="p-0">
              <div className="flex items-center bg-slate-200 w-full p-2 m-0">
                <TriangleRight size={16} className="mr-2 fill-black" />
                Valores
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-3 px-4">
            <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="valorNota"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valor nota</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value} onChange={field.onChange} />
                      </FormControl>
                     <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aliqRetencao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aliq retenção</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value} onChange={field.onChange} />
                      </FormControl>
                     <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="retISS"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ret ISS</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value} onChange={field.onChange} />
                      </FormControl>
                     <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="valorRetencao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valor retenção</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value} onChange={field.onChange} />
                      </FormControl>
                     <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="liquidoApagar"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Liquido a pagar</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value} onChange={field.onChange} />
                      </FormControl>
                     <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-5">
            <AccordionTrigger className="p-0">
              <div className="flex items-center bg-slate-200 w-full p-2 m-0">
                <TriangleRight size={16} className="mr-2 fill-black" />
                Motivo Cancelamento
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white py-3 px-4">
              <FormField
                control={form.control}
                name="motivo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-zinc-500">Motivo</FormLabel>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <span className="text-red-700">* Campos obrigatórios</span>

        <div className="flex w-full items-center justify-center">
          <Button type="submit" className="flex bg-zinc-100 mr-2 hover:bg-header-purple hover:text-white drop-shadow-md">
            <SaveIcon size={16} className="mr-2" />
            Salvar
          </Button>
          <Button className="flex mr-2 bg-red-400 text-white drop-shadow-lg shadow-red-300 hover:bg-red-500">
            <Trash2 size={16} className="mr-2" />
            Excluir
          </Button>
          <Link href="/relatorios">
            <Button className="flex bg-zinc-100 mr-2 hover:bg-header-purple hover:text-white drop-shadow-md">
              <ArrowLeft size={16} className="mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Form> 
  )
}

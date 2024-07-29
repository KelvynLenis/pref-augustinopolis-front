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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { TriangleRight } from "lucide-react"
  
 
const formSchema = z.object({
  numeroNota: z.string().min(2).max(50),
  DataEmissao: z.string().min(2).max(50),
  regime: z.string().min(2).max(50),
  dataPagamento: z.string().min(2).max(50),
  naturezaServico: z.string().min(2).max(50),
  valorNota: z.string().min(2).max(50),
  aliqRetencao: z.string().min(2).max(50),
  retISS: z.string().min(2).max(50),
  valorRetencao: z.string().min(2).max(50),
  liquidoApagar: z.string().min(2).max(50),
  motivo: z.string().min(2).max(50),
})

export function RelatoryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
      defaultValues: {
        numeroNota: "",
        DataEmissao: "",
        regime: "",
        dataPagamento: "",
        naturezaServico: "",
        valorNota: "",
        aliqRetencao: "",
        retISS: "",
        valorRetencao: "",
        liquidoApagar: "",
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
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="DataEmissao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data Emissão</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="regime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Regime</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
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
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
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
                  <FormItem>
                    <FormLabel>Natureza do serviço</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
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
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
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
                  <FormItem>
                    <FormLabel>Motivo</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button type="submit">Submit</Button>
      </form>
    </Form> 
  )
}

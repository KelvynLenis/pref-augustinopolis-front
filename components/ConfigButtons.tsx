'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Word from '../assets/icons/word.svg'
import Pdf from '../assets/icons/pdf.svg'
import { ArrowLeft, Printer, Check, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



export function ConfigButtons() {
  const [isWordConfigPanelOpen, setIsWordConfigPanelOpen] = useState(false)
  const [isPDFConfigPanelOpen, setIsPDFConfigPanelOpen] = useState(false)
  const [isPrintConfigPanelOpen, setIsPrintConfigPanelOpen] = useState(false)

  return (
    <>
      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:text-white hover:bg-header-purple">
              <Image src={Word} alt="word logo" className="h-6 w-6" />
              Word
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white h-[540px]">
            <Tabs defaultValue="configuration" className="w-full">
              <TabsList className="grid w-full grid-cols-2 gap-1">
                <TabsTrigger value="configuration" className="bg-zinc-100 px-2 text-strong">Configurações de Exportação</TabsTrigger>
                <TabsTrigger value="columns" className="bg-tab text-light">Selecionar colunas</TabsTrigger>
              </TabsList>
              <TabsContent value="configuration">

                <Card>
                  <CardContent className="flex gap-10 pt-10">
                    <Label>Tipo cor</Label>
                    <RadioGroup defaultValue="black-white">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="black-white" id="black-white" className="text-blue-500 pt-[0.3px] pl-[0.3px] border-blue-500" />
                        <Label htmlFor="black-white">Preto e branco</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem  value="colorful" id="colorful" className="text-blue-500 pt-[0.3px] pl-[0.3] border-blue-500 "  />
                        <Label htmlFor="colorful">Colorido</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

              </TabsContent>

              <TabsContent value="columns">

                {/* drag n' drop formkit     */}
                <Card className="flex">
                  <CardContent className="w-full h-full py-2 border-none flex">
                    <div className="w-1/2 h-64 border border-strong outline-dotted border-dotted py-1 px-2 flex flex-col gap-2">
                      <span className="text-light bg-zinc-100 w-full p-1 h-fit">Id Imposto</span>
                      <span className="text-light bg-zinc-100 w-full p-1 h-fit">Id Imposto</span>
                      <span className="text-light bg-zinc-100 w-full p-1 h-fit">Id Imposto</span>
                      <span className="text-light bg-zinc-100 w-full p-1 h-fit">Id Imposto</span>
                    </div>

                    <div>

                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <DialogTrigger className="flex gap-3 w-full justify-end">
              <Button className="h-6 bg-emerald-400 text-white drop-shadow-lg shadow-emerald-300 hover:bg-emerald-500">
                <Check className="h-6 w-6" />
                Ok
              </Button>
              <Button className="h-6 bg-red-400 text-white drop-shadow-lg shadow-red-300 hover:bg-red-500">
                <X className="h-6 w-6" />
                Fechar
              </Button>
            </DialogTrigger>
          </DialogContent>
        </Dialog>


        <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:text-white hover:bg-header-purple">
          <Image src={Pdf} alt="PDF logo" className="h-6 w-6" />
          PDF
        </Button>

        <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:text-white hover:bg-header-purple">
          <Printer className="h-6 w-6" />
          Imprimir
        </Button>

        <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:text-white hover:bg-header-purple">
          <ArrowLeft className="h-6 w-6" />
          Voltar
        </Button>
      </div>
    </>
  );
}
'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Word from '../assets/icons/word.svg'
import Pdf from '../assets/icons/pdf.svg'
import { ArrowLeft, Printer, Check, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { twMerge } from "tailwind-merge";
import { DragDrop } from "./DragDrop";
import { PdfCardContent } from "./PdfCardContent";
import { CardContentPrint } from "./CardContentPrint";
import Link from "next/link";

const availableList = ["Id imposto", "Id CNAE", "Tbusuario Orgao Idusuario", "Tbusuario Idfornecedor", "Tbusuario Principal Idorgao Principal"]
const selectedList = ["Pago", "CNPJ Fornecedor", "Nome Fornecedor", "Data Emissão", "Numero Nota", "Valor Nota", "Aliq Retenção", "Valor Retenção", "Imprimir"]

export function ConfigButtons() {
  const [activeTab, setActiveTab] = useState<"configuration" | "columns">("configuration")

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
          <DialogContent className="bg-white h-[35rem]">
            <Tabs defaultValue={activeTab} className="w-full">

              <TabsList className="grid w-full grid-cols-2 gap-1">
                <TabsTrigger value="configuration" onClick={() => setActiveTab("configuration")} className={twMerge("px-2", activeTab === 'configuration' ? 'text-strong bg-zinc-100' : 'bg-tab text-light')}>
                  Configurações de Exportação
                </TabsTrigger>
                <TabsTrigger value="columns" onClick={() => setActiveTab("columns")} className={twMerge("px-2", activeTab === 'columns' ? 'text-strong bg-zinc-100' : 'bg-tab text-light')}>Selecionar colunas</TabsTrigger>
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

                {/* drag n' drop    */}
                <Card className="flex">
                  <CardContent className="w-full h-[27rem] py-2 border-none flex gap-5">
                    <DragDrop availableList={availableList} selectedList={selectedList} />
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

        <Dialog>
          <DialogTrigger asChild>
            <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:text-white hover:bg-header-purple group">
              <Image src={Pdf} alt="PDF logo" className="h-6 w-6" />
              PDF
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white h-[35rem]">
            <Tabs defaultValue={activeTab} className="w-full">

              <TabsList className="grid w-full grid-cols-2 gap-1">
                <TabsTrigger value="configuration" onClick={() => setActiveTab("configuration")} className={twMerge("px-2", activeTab === 'configuration' ? 'text-strong bg-zinc-100' : 'bg-tab text-light')}>
                  Configurações do PDF
                </TabsTrigger>
                <TabsTrigger value="columns" onClick={() => setActiveTab("columns")} className={twMerge("px-2", activeTab === 'columns' ? 'text-strong bg-zinc-100' : 'bg-tab text-light')}>Selecionar colunas</TabsTrigger>
              </TabsList>

              <TabsContent value="configuration">

                <Card>
                  <CardContent>
                    <PdfCardContent />                    
                  </CardContent>
                </Card>

              </TabsContent>

              <TabsContent value="columns">

                {/* drag n' drop    */}
                <Card className="flex">
                  <CardContent className="w-full h-[27rem] py-2 border-none flex gap-5">
                    <DragDrop availableList={availableList} selectedList={selectedList} />
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

        <Dialog>
          <DialogTrigger asChild>
            <Button className="drop-shadow-md bg-slate-100 ring-1 ring-slate-200 flex w-32 gap-4 hover:text-white hover:bg-header-purple">
              <Printer className="h-6 w-6" />
              Imprimir
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white h-[35rem]">
            <Tabs defaultValue={activeTab} className="w-full">

              <TabsList className="grid w-full grid-cols-2 gap-1">
                <TabsTrigger value="configuration" onClick={() => setActiveTab("configuration")} className={twMerge("px-2", activeTab === 'configuration' ? 'text-strong bg-zinc-100' : 'bg-tab text-light')}>
                  Configurações de Exportação
                </TabsTrigger>
                <TabsTrigger value="columns" onClick={() => setActiveTab("columns")} className={twMerge("px-2", activeTab === 'columns' ? 'text-strong bg-zinc-100' : 'bg-tab text-light')}>
                  Selecionar colunas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="configuration">

                <Card>
                  <CardContent className="flex gap-10 pt-10">
                    <CardContentPrint />
                  </CardContent>
                </Card>

              </TabsContent>

              <TabsContent value="columns">

                {/* drag n' drop    */}
                <Card className="flex">
                  <CardContent className="w-full h-[27rem] py-2 border-none flex gap-5">
                    <DragDrop availableList={availableList} selectedList={selectedList} />
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

        <Link href='/menu' className="drop-shadow-md rounded-md bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center w-32 gap-4 hover:text-white hover:bg-header-purple">
          <ArrowLeft className="h-6 w-6" />
          Voltar
        </Link>
      </div>
    </>
  );
}
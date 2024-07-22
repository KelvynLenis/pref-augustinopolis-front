import { colorOptions, orientationOptions, paperSizeOptions } from "@/utils/DropdownOptions";
import { Dropdown } from "./Dropdown"
import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox";

const items = [
  {
    id: "recents",
    label: "Gerar marcadores",
  },
  {
    id: "home",
    label: "Exibir o cabeçalho em todas as páginas",
  },
  {
    id: "applications",
    label: "Exibir o título em todas as páginas",
  },
  {
    id: "desktop",
    label: "Exibir o título abaixo de cada quebra",
  }
] as const

export default function PdfCardContent() {
  return (
    <div className="flex gap-2 text-xs text-light pt-10">
      <div className="flex flex-col gap-8 pt-2">
        <Label>Tipo da impressão</Label>
        <Label>Tamanho do papel</Label>
        <Label>Orientação</Label>
        <Label>Outras opções</Label>
      </div>

      <div  className="flex flex-col gap-5">
        <select className="w-[200px] border border-gray-300 rounded-sm py-0.5 text-strong">
          {
            colorOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
        <select className="w-[200px] border border-gray-300 rounded-sm py-0.5 text-strong">
          {
            paperSizeOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
        <select className="w-[200px] border border-gray-300 rounded-sm py-0.5 text-strong">
          {
            orientationOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
        {/* <Dropdown options={colorOptions} />  */}
        {/* <Dropdown options={paperSizeOptions} /> 
        <Dropdown options={orientationOptions} />  */}
        <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div className="flex gap-2">
            <Checkbox key={item.id} id={item.id} className="border-strong data-[state=checked]:bg-blue-400 data-[state=checked]:text-white data-[state=checked]:border-blue-400" />
            <label
              htmlFor={item.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
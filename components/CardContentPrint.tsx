import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function CardContentPrint() {
  return (
    <div className="flex gap-2 text-xs text-light pt-10">
      <div className="flex flex-col gap-8 pt-2">
        <Label>Modo da impressão</Label>
        <Label>Tipo de cor</Label>
      </div>

      <div className="flex flex-col gap-5">
        <RadioGroup defaultValue="black-white">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="black-white" id="black-white" className="text-blue-500 pr-[0.4px] border-blue-500" />
            <Label htmlFor="black-white">Página corrente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem  value="colorful" id="colorful" className="text-blue-500 pr-[0.4px] border-blue-500 "  />
            <Label htmlFor="colorful">Relatório completo</Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="black-white">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="black-white" id="black-white" className="text-blue-500 pr-[0.4px] border-blue-500" />
            <Label htmlFor="black-white">Preto e branco</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem  value="colorful" id="colorful" className="text-blue-500 pr-[0.4px] border-blue-500 "  />
            <Label htmlFor="colorful">Colorido</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
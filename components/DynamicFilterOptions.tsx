import { z } from "zod";
import { Input } from "./ui/input";
import DatePickerRange from "./DatePickerRange";

const optionSchema = z.object({
    accessoryKey: z.string(),
    component: z.function()
  })
  
export type Option = z.infer<typeof optionSchema>;
  
export const options: Option[] = [
    {
      accessoryKey: "CNPJ Fornecedor",
      component: () => {
        return (
          <Input className="w-44" />
        )
      }
    },
    {
      accessoryKey: "Pago",
      component: () => {
        return (
          <select>
            <option value="paid">Pago</option>
            <option value="not-paid">Não pago</option>
          </select>
        )
      }
    },
    {
      accessoryKey: "Data de Pagamento",
      component: () => {
        return (
          <DatePickerRange />
        )
      }
    },
    {
      accessoryKey: "Numero Nota",
      component: () => {
        return (
          <Input className="w-44" />
        )
      }
    },
    {
      accessoryKey: "Data Emissão",
      component: () => {
        return (
          <DatePickerRange />
        )
      }
    },
    {
      accessoryKey: "Data Cadastro",
      component: () => {
        return (
          <DatePickerRange />
        )
      }
    },
  ]
import { z } from "zod";

export const CreateFormSchema = z.object({
  nomeOrgao: z.string(),
  nomeOrgaoPagador: z.string(),
  dataCadastro: z.date(),
  cnpjFornecedor: z.string(),
  nomeFornecedor: z.string(),
  numeroNota: z.string(),
  serieNota: z.string(),
  dataEmissao: z.date(),
  regime: z.string(),
  naturezaServico: z.string(),
  valorNota: z.string(),
  aliqRetencao: z.string(),
  retISS: z.string(),
  retIRRF: z.string(),
  liquidoApagar: z.string(),
  parecer: z.string().nullable(),
})

export const ColumnSchema = z.object({
  id: z.string(),
  pago: z.enum(["Sim", "Não"]),
  CNPJFornecedor: z.string(),
  nomeFornecedor: z.string(),
  dataEmissão: z.string(),
  numeroNota: z.string(),
  valorNota: z.string(),
  aliqRetenção: z.string(),
  valorRetenção: z.string(),
});

export const EditFormSchema = z.object({
  numeroNota: z.string().nullish(),
  dataEmissao: z.date(),
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
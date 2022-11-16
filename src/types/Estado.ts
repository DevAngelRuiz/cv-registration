import { IRegiao } from "./Regiao";

export interface IEstado {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegiao;
}

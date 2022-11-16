import { ICidade } from "./Cidade";
import { IEstado } from "./Estado";

export interface ILocationProvider {
  getCitiesFromUf: (uf: string) => Promise<ICidade[]> | null;
  getStates: () => Promise<IEstado[]> | null;
}

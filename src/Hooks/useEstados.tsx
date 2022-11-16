import { useEffect, useState } from "react";
import LocationService from "../services/LocationService";
import { IEstado } from "../types/Estado";
//Removi os tipos daqui e coloquei em uma pasta separada
export const useEstados = () => {
  const [estados, setEstados] = useState<IEstado[] | null>([]);
  //Trocando a chamada direta à api pela chamada
  //do LocationService
  useEffect(() => {
    (async () => {
      const states = await LocationService.getStates();
      setEstados(states);
    })();
  }, []);

  return {
    estados,
  };
};

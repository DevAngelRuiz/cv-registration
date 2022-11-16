import { useEffect, useState } from "react";
import LocationService from "../services/LocationService";
import { ICidade } from "../types/Cidade";

export const useCidades = ({ uf }: any) => {
  const [cidades, setCidades] = useState<ICidade[] | null>([]);

  useEffect(() => {
    if (!uf) return;

    (async () => {
      const states = await LocationService.getCitiesFromUf(uf);
      setCidades(states);
    })();
  }, [uf]);

  return {
    cidades,
  };
};

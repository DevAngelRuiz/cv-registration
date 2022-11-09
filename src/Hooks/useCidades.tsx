import { useEffect, useState } from "react";

export interface ICidade {
  nome: string;
  codigo_ibge: string;
}

export const useCidades = ({ uf }: any) => {
  const [cidades, setCidades] = useState<ICidade[]>([]);

  useEffect(() => {
    if (!uf) return;

    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
      .then((response) => response.json())
      .then((data) => setCidades(data))
  }, [uf]);

  return {
    cidades
   
  };
};

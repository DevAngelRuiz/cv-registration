import { ILocationProvider } from "../../types/ILocationProvider";
//Provider que implementa a interface ILocationProvider
//pra conseguir fazer a injeção de depemdência.
//(Mais uma vez, assunto mais avançãdo, não precisa se preocupar.)

class BrasilApiProvider implements ILocationProvider {
  public async getCitiesFromUf(uf: string) {
    //Sempre colocar um try / catch e tratar
    //esses erros de alguma forma.
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`
      );
      const result = await response.json();
      return result;
    } catch (e) {
      return null;
    }
  }

  public async getStates() {
    try {
      const response = await fetch("https://brasilapi.com.br/api/ibge/uf/v1");
      const result = await response.json();

      return result;
    } catch (e) {
      return null;
    }
  }
}

export default BrasilApiProvider;

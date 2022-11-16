import { ILocationProvider } from "../types/ILocationProvider";
import BrasilApiProvider from "./Providers/BrasilApiProvider";
/* Criando service para todas as chamadas à APIs
 internas e externas,separando a lógica de busca
 de dados do restante da aplicação. Dessa forma,
a reutilização fica mais facil e o código mais
 organizado.*/
class LocationService {
  protected locationProvider: ILocationProvider;

  constructor(locationProvider: ILocationProvider) {
    this.locationProvider = locationProvider;
  }

  public async getCitiesFromUf(uf: string) {
    try {
      const response = await this.locationProvider.getCitiesFromUf(uf);
      return response;
    } catch (e) {
      return null;
    }
  }

  public async getStates() {
    try {
      const response = await this.locationProvider.getStates();

      return response;
    } catch (e) {
      return null;
    }
  }
}
// Injeção de Dependência
/*

O provedor dos dados dos estados e cidades
pode mudar futuramente então pra evitar acoplamento,
facilitar testes e ficar mais facil a troca futura caso necessário,
a lógica que busca os dados dessa api é separado no Provider,
que é "injetado" na classe LocationService pelo construtor 
da classe.

(Esse é um conceito mais avançado então não precisa se
preocupar muito com ele agora, mas é legal saber que ele existe)

https://khalilstemmler.com/articles/tutorials/dependency-injection-inversion-explained/
*/
export default new LocationService(new BrasilApiProvider());

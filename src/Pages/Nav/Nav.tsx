import { Container, ContainerItems, Item } from "./Nav.styles";
import { options } from "../../data/options";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Container>
      <ContainerItems>
        {options.map((key, index) => (
          <Link to={key.path}>
            {/*Não é recomendado usar o index como 'key' de um elemnento.
              Nesse caso, como a ordem dos itens nunca muda, não tem problema em usar,
               mas em casos onde a ordem pode mudar, é recomendado usar outra coisa como 'key':
                https://reactjs.org/docs/lists-and-keys.html#keys
                
                        */}
            <Item key={index}>
              <h2>{key.title}</h2>
              <img src={key.icon} />
              <p>{key.subtitle}</p>
            </Item>
          </Link>
        ))}
      </ContainerItems>
    </Container>
  );
};
export default Nav;

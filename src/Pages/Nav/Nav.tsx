
import { Container, ContainerItems, Item} from "./Nav.styles";
import { options } from "../../data/options";
import { Link } from "react-router-dom";
const Nav = () => {



    return (
        <Container>
            <ContainerItems>
                {options.map((key, index) => (
                    <Link  to={key.path}>
                        <Item key={index}>
                            <h2 >{key.title}</h2>
                            <img src={key.icon} />
                            <p>{key.subtitle}</p>

                        </Item>
                    </Link>
                ))}


            </ContainerItems>
        </Container>
    )
}
export default Nav
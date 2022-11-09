import { Info, Container } from "./Home.styles"
import { Link } from "react-router-dom";


const Home = () =>{

    return(

        <Container>
            <Info>
                <h1>Seja bem-vindo(a) <br/>👩🏻‍💻👨🏻‍💻  </h1>
                <h2>Inicie sua procura a vaga dos sonhos aqui!</h2>
                <Link to={'/pessoal'}>
                <button>Start 🚀</button>
                </Link>
            </Info>
        </Container>
    )
}

export default Home; 
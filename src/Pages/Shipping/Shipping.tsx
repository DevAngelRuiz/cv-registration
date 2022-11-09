import { Container } from './Shipping.styles'
import GoodLuckImg from '../../assets/good-luck.gif'

const Shipping = () =>{

    return(

        <Container>
            <h2>Obrigado(a) por sua inscrição</h2>
            <h1>BOA SORTEEEEE!!!</h1>
            <img src={GoodLuckImg} alt="img-boa-sorte" />
           
        </Container>
    )
}

export default Shipping
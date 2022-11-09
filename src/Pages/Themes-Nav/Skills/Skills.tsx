import { Container, Info } from "./Skills.styles"
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
    text: string

}

const Skills = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs> = userData => {
        console.log(userData);
        if (userData) {
            navigate('/contato')
        }
    }


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Info>
                <h1>Queremos te conhecer melhor!</h1>
                <h3>Aqui vale colocar <strong>todas</strong> suas skills (soft ou hard)</h3>
                <p>Fale sobre experiência na área, linguagens e ferramentes que usa ou conhece,o pq de ter escolhido a area de TI. Nos conte, quem é você, além da parte técnica. </p>
            
                    <textarea {...register('text', { required: true })} />
                    <button type="submit">Próximo</button>
               
            </Info>
            </form>
        </Container>
    )


}
export default Skills
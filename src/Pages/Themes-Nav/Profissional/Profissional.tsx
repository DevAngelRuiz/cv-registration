import { Container, Questions, Alternative } from "./Profissional.styles"
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
    senoridade: string;
   
  };


const Profissional = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const navigate = useNavigate()

      
    const onSubmit: SubmitHandler<Inputs> = userData =>{
        console.log(userData);
    if (userData) {       
        navigate('/skills')
    }}
  
    return (
        <Container>

            <Questions>
                <h1>Você se considera... </h1>
                <Alternative>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label>
                        <p><input type='radio'  {...register("senoridade", {required: true})} value='junior'   />
                            <strong>Junior</strong> Estudante ou recém-formado, possui pouca experiência (profissonal ou acadêmica). Mas tá cheio de vontade para começar.</p>
                        </label>

                        <label>
                            <p><input type='radio' {...register("senoridade")} value='pleno'  />
                            <strong>Pleno</strong> Possui experiência profissional, já sabe se virar, mas ainda precisa de supervisão.</p>
                        </label>
                        <label>
                            <p><input type='radio' {...register("senoridade")} value='senior'  />
                            <strong>Sênior</strong> Possui alta experência, responsável por entender os projetos, auxiliar os demais tecnicamente e pode designar tarefas...</p>
                        </label>
                        <button type='submit'>enviar</button>
                    </form>



                </Alternative>

            </Questions>

        </Container>
    )
}
export default Profissional
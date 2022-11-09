import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Container, Info } from './Contato.styles'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

interface IFormInputs {
    phone: number,
    email: string,
    linkedin: string, 
    github: string, 
    file: string, 

}

const schema = yup.object().shape({
    phone: yup.number().typeError("Digite um número válido").required('campo obrigatório'),
    email: yup.string().email('Digite uma e-mail válido').required('campo obrigatório'),
    linkedin: yup.string().url('Link inválido').required('campo obrigatório'),
    github: yup.string().url('Link inválido').required('campo obrigatório'),
    file: yup.string().required('campo obrigatório'),
   
});

const Contato = () => {
        const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
            resolver: yupResolver(schema)
        });
        const navigate = useNavigate()
        const onSubmit = (data: IFormInputs) =>{
            console.log(data);
            if(data){ navigate('/envio') }
        }

        return (
            <Container>
                <Info>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Deixe aqui seus contatos</h1>
                        <div>Contato
                            <input type="number" placeholder='(xx) xxxx-xxxx' {...register("phone")} />
                            <span>{errors.phone?.message}</span>
                        </div>
                        <div>E-mail
                            <input type="email" {...register("email")} />
                            <span>{errors.email?.message}</span>
                        </div>
                        <div>Linkedin
                            <input type="text" {...register("linkedin")} />
                            <span>{errors.linkedin?.message}</span>
                        </div>
                        <div>GitHub
                            <input type="text" {...register("github")} />
                            <span>{errors.github?.message}</span>
                        </div>
                        <div>Carregue seu currículo
                            <input type="file" {...register("file")} />
                            <span>{errors.file?.message}</span>
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>


                </Info>
            </Container>


        )
    }

    export default Contato
import { Container, InputName, Remote, ContainerSelect, Button } from "./Pessoal.styles"
import { useForm, SubmitHandler } from "react-hook-form";
import { useCidades } from "../../../Hooks/useCidades";
import { useState } from "react";
import { useEstados } from "../../../Hooks/useEstados";
import { useNavigate } from "react-router-dom";

type Inputs = {
    name: string;
    state: string;
    city: string;
    checkRemote: string;
  };

const Pessoal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const { estados } = useEstados()
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const { cidades } = useCidades({ uf: selectedState })
    const navigate = useNavigate()

    const handleEstadoUpdate = (event: any) => {
        setSelectedState(event.target.value);
    };
    const handleCityUpdate = (event: any) => {
        setSelectedCity(event.target.value)
    };

 
      
    const onSubmit: SubmitHandler<Inputs> = userData =>{
        console.log(userData);
    if (userData) {       
        navigate('/profissional')
    }} 

    


    return (
        <Container>
            <h1>Informações Pessoais</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputName type='text' placeholder="Qual seu nome?"  {...register("name", { required: true })} />
                {errors.name && <span>Item obrigatório</span>}
                <p>Onde você mora?</p>
                {errors.city && <span>Item obrigatório</span>}

                <ContainerSelect>
                    <label>UF</label>
                    <select {...register("state", { required: true })} value={selectedState} onChange={handleEstadoUpdate}>
                        {estados.map((estado) => (
                            <option key={estado.id} value={estado.sigla}>
                                {estado.nome}
                            </option>

                        ))}
                        {errors.state && <span>Item obrigatório</span>}
                    </select>
                    
                    <label>Cidade</label>
                    <select {...register("city", { required: true })} value={selectedCity} onChange={handleCityUpdate}  >
                        {cidades.map((cidade) => (
                            <option key={cidade.codigo_ibge}>{cidade.nome}</option>
                        ))}
                        
                    </select>
                    

                </ContainerSelect>

                <Remote>
                    <fieldset >
                        <legend>Disponibilidade para trabalhar:</legend>
                        <input type='checkbox' value={'remoto'} {...register("checkRemote", { required: true })} />
                        <label>Remoto </label>
                        <input type='checkbox' value={'hibrido'} {...register("checkRemote", { required: true })} />
                        <label>Híbrido</label>
                        <input type='checkbox' value={'presencial'} {...register("checkRemote", { required: true })} />
                        <label>Presencial</label>
                    </fieldset>
                    {errors.checkRemote && <span>Item obrigatório</span>}
                </Remote>

                
                    <Button type="submit"> Próximo </Button>
               

            </form>

        </Container>
    )
}

export default Pessoal


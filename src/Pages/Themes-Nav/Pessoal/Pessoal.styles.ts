import styled from "styled-components";

export const Container = styled.div`

width: 60%; 
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 50px;
border-radius: 20px;
opacity: 0.8; 
flex-direction: column;

span{
    color: red;
    font-size: 12px;
    padding-top: 5px;
}

`
export const InputName = styled.input`
display: flex;
flex-direction: column;
width: 500px;
height: 50px;
border-radius: 20px;
padding-left: 10px;
font-size: 16px;
font-weight: bold;


`
export const ContainerSelect = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 20px;


select{
    width: 200px;
    height: 40px;
    border-radius: 10px;
    margin-right: 20px;
}
label{
    margin-right: 10px;
}


`

export const Remote = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 15px;

fieldset{
display: flex;
align-items: center;
justify-content: center;
width: 500px;
height: 50px;
border-radius: 20px;
}
legend{
 font-size: 18px;
font-weight: bold;
}
label{
font-size: 14px;
font-weight: bold;
    
}
input{
    width: 40px;
    height: 20px;
}

`
export const Button = styled.button`
    margin-right: 120px;
    align-self: flex-end;
    margin-top: 10px;
    background-color: #4B0082;
    color: white;
    position: relative;
    border: none;

:hover{
    opacity: 0.8;
}


`
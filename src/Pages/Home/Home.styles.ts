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


`

export const Info = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
text-align: center;

button{
margin-bottom: 15px;
width: 300px;
height: 80px;
border-radius: 20px;
padding-left: 10px;
font-size: 30px;
background-color: #BA55D3;
border: none;

}
button:hover{
    background-color: #4B0082;
    color: white;
    
   
}
button:active{
    opacity: 0.2;
    
}   
`


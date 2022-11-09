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

export const Questions = styled.div`
display: flex;
align-items: center;
justify-content: center;  
flex-direction: column;
padding: 15px;  


h1{
    text-align: center;
}




`
export const Alternative = styled.div`
display: flex;
align-items: center;
justify-content: center; 
flex-direction: column;
width: 80%;

p{
    font-size: 18px;
}

label{
    margin-bottom: 15px;
}

button{ 
display: flex;
justify-content: center;
align-items: center;
margin: auto;
width: 200px;
height: 50px;
border-radius: 15px;
font-size: 18px;


}
button:hover{
    background-color: #4B0082;
    color: white;
}
button:active{
    opacity: 0.2; 
}

`



